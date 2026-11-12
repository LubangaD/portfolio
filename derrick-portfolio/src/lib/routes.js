// Path-based routes. Every link is a plain <a href>, so each page is a full load: the design kit's
// scripts attach to the page they find, once, the way they were built to.
import { caseStudyBySlug } from '../content/site';

const STATIC = ['/about', '/work', '/capabilities', '/research', '/services', '/contact'];

export function resolveRoute(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { key: 'home', path, nav: '/' };
  if (STATIC.includes(path)) return { key: path.slice(1), path, nav: path };
  const m = path.match(/^\/work\/([a-z0-9-]+)$/);
  if (m) {
    const caseStudy = caseStudyBySlug(m[1]);
    if (caseStudy) return { key: 'case', path, nav: '/work', caseStudy };
  }
  return { key: 'notfound', path, nav: null };
}
