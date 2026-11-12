// After `vite build`: one copy of dist/index.html per route with that page's title, description and
// Open Graph text, so link previews (which do not run JavaScript) see the right words. The Person
// structured data goes into every page. sitemap.xml and robots.txt are written only when a production
// domain is configured (profile.siteUrl in src/content/site.js); without one, neither file exists.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { notFoundPage, pages, personJsonLd, sitemapRoutes } from '../src/content/pages.js';
import { profile } from '../src/content/site.js';

const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');
const site = profile.siteUrl ? profile.siteUrl.replace(/\/+$/, '') + '/' : null;

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const text = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const abs = (path) => new URL(path.replace(/^\//, ''), site).href;

function render(path, page) {
  const head = [
    `<script type="application/ld+json" id="person-ld">${JSON.stringify(personJsonLd()).replace(/</g, '\\u003c')}</script>`,
  ];
  if (site) {
    head.push(
      `<link rel="canonical" href="${attr(abs(path))}">`,
      `<meta property="og:url" content="${attr(abs(path))}">`,
      `<meta property="og:image" content="${attr(abs(profile.shareImage || profile.portrait))}">`,
      `<meta property="og:image:width" content="1200">`,
      `<meta property="og:image:height" content="630">`,
      `<meta property="og:image:alt" content="${attr(`${profile.name}, ${profile.title}`)}">`,
    );
  }
  return (site ? template.replace(/(<meta name="twitter:card" content=")[^"]*(")/, '$1summary_large_image$2') : template)
    .replace(/<title>[^<]*<\/title>/, `<title>${text(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${attr(page.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${attr(page.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${attr(page.description)}$2`)
    .replace('</head>', `${head.join('\n')}\n</head>`);
}

let n = 0;
for (const [path, page] of Object.entries(pages)) {
  const file = path === '/' ? new URL('index.html', dist) : new URL(`.${path}/index.html`, dist);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, render(path, page));
  n++;
}

// Vercel answers an address with no page with dist/404.html and a 404 status; the app then shows its
// not-found page. No canonical link or og:url: the page belongs to no address.
const notFound = render('/', notFoundPage)
  .replace(/<link rel="canonical"[^>]*>\n?/, '')
  .replace(/<meta property="og:url"[^>]*>\n?/, '')
  .replace('</head>', '<meta name="robots" content="noindex">\n</head>');
await writeFile(new URL('404.html', dist), notFound);

if (site) {
  const urls = sitemapRoutes.map((p) => `  <url><loc>${text(abs(p))}</loc></url>`).join('\n');
  await writeFile(new URL('sitemap.xml', dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await writeFile(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);
} else {
  await rm(new URL('sitemap.xml', dist), { force: true });
  await rm(new URL('robots.txt', dist), { force: true });
}

console.log(`postbuild: ${n} pages written${site ? `, sitemap.xml and robots.txt for ${site}` : '; no siteUrl, so no sitemap.xml or robots.txt'}`);
