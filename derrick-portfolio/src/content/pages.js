// Per-page titles and descriptions. Read by the app (document head at runtime) and by
// scripts/postbuild.mjs (a static copy of index.html per route, so link previews see the right text).
import { caseStudies, profile } from './site.js';

const brand = 'Derrick Lubanga';

export const pages = {
  '/': {
    title: `${brand} · Data Scientist & ML Engineer`,
    description: 'Evidence-led data science, machine learning, research, and inclusive technology by Derrick Lubanga, based in Kenya.',
  },
  '/about': {
    title: `About · ${brand}`,
    description: 'Meet Derrick Lubanga and explore his verified experience in data science, analytics, research, and inclusive technology.',
  },
  '/work': {
    title: `Selected work · ${brand}`,
    description: 'Professional data work, academic research, and prototypes from Derrick Lubanga, with verified project context and supporting tools.',
  },
  '/capabilities': {
    title: `Capabilities · ${brand}`,
    description: 'Evidence-backed capabilities in forecasting, NLP, data engineering, analytics, validation, and inclusive innovation.',
  },
  '/research': {
    title: `Research · ${brand}`,
    description: 'Explore Derrick Lubanga’s MSc research on ABC-VEN inventory optimization, applied machine learning, and inclusive technology.',
  },
  '/services': {
    title: `Services · ${brand}`,
    description: 'Consulting in predictive analytics, data pipeline engineering, NLP customer-feedback analysis, and AI analytics assistants.',
  },
  '/contact': {
    title: `Contact · ${brand}`,
    description: 'Get in touch with Derrick Lubanga about remote roles, consulting, and research collaboration.',
  },
};

for (const c of caseStudies) {
  pages[`/work/${c.slug}`] = { title: `${c.short || c.title} · ${brand}`, description: c.summary };
}

export const notFoundPage = { title: `Page not found · ${brand}`, description: 'This page does not exist.' };

// schema.org Person, from the verified profile only (no url until a domain is configured)
export function personJsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
    sameAs: [profile.links.linkedin, profile.links.github],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Strathmore University' },
      { '@type': 'CollegeOrUniversity', name: 'Kenya Methodist University' },
    ],
    knowsAbout: ['Data science', 'Machine learning', 'Natural language processing', 'Data engineering', 'Forecasting', 'Business intelligence'],
  };
  if (profile.siteUrl) {
    person.url = profile.siteUrl;
    person.image = new URL(profile.portrait, profile.siteUrl).href;
  }
  return person;
}

// the routes a sitemap lists (only written when profile.siteUrl is set)
export const sitemapRoutes = Object.keys(pages);
