import { useEffect } from 'react';
import SiteNav from './components/site/SiteNav';
import SiteFooter from './components/site/SiteFooter';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Capabilities from './pages/Capabilities';
import Research from './pages/Research';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { resolveRoute } from './lib/routes';
import { applyMeta } from './lib/meta';
import './App.css';

// The design kit's behaviour (nav sheet, hover, the hero's entrance, the diagrams, the effect ground).
// It attaches to the page as it finds it, so it loads once the page has rendered.
const KIT_SCRIPTS = ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js', '/assets/diagrams/mount.js'];

const PAGES = {
  home: Home, about: About, work: Work, case: CaseStudy, capabilities: Capabilities,
  research: Research, services: Services, contact: Contact, notfound: NotFound,
};

// one route per page load: every link is a plain <a href>
const route = resolveRoute(window.location.pathname);

function App() {
  useEffect(() => {
    applyMeta(route);
    for (const src of KIT_SCRIPTS) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement('script');
      s.type = 'module';
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);

  const Page = PAGES[route.key];
  return (
    <>
      <SiteNav active={route.nav} />
      {/* the home page keeps the kit's one-section-a-screen rhythm; the inner pages flow at their own length */}
      <main id="main" tabIndex={-1} className={route.key === 'home' ? undefined : 'page-flow'}>
        <Page caseStudy={route.caseStudy} />
      </main>
      <SiteFooter close={route.key !== 'contact'} />
    </>
  );
}

export default App;
