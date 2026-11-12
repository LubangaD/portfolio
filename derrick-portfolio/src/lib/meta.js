// The document head for the current route: title, description, Open Graph, the canonical link
// (only once a production domain is configured) and the Person structured data.
import { profile } from '../content/site';
import { notFoundPage, pages, personJsonLd } from '../content/pages';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) { el?.remove(); return; }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export function applyMeta(route) {
  const page = route.key === 'notfound' ? notFoundPage : pages[route.path] || notFoundPage;
  document.title = page.title;
  setMeta('name', 'description', page.description);
  setMeta('property', 'og:title', page.title);
  setMeta('property', 'og:description', page.description);
  setMeta('name', 'robots', route.key === 'notfound' ? 'noindex' : null);

  const site = profile.siteUrl;
  setMeta('property', 'og:url', site ? new URL(route.path, site).href : null);
  setMeta('property', 'og:image', site ? new URL(profile.portrait, site).href : null);
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (site && route.key !== 'notfound') {
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = new URL(route.path, site).href;
  } else canonical?.remove();

  if (!document.getElementById('person-ld')) {
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'person-ld';
    ld.textContent = JSON.stringify(personJsonLd());
    document.head.appendChild(ld);
  }
}
