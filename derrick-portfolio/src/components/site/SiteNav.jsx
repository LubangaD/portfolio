import { nav } from '../../content/site';

// The kit's nav bar: the name, the seven pages (the current one marked), one action.
// On a phone the toggle opens the links as a sheet (assets/system.js).
const SiteNav = ({ active }) => (
  <header className="nav">
    <div className="wrap nav__bar">
      <a className="skip-link" href="#main">Skip to content</a>
      <a className="nav__logo" href="/">
        <span className="mark" data-mark="dots" aria-hidden="true"></span>Derrick Lubanga
      </a>
      <nav className="nav__links" aria-label="Main">
        {nav.map((n) => (
          <div className="nav__item" key={n.href}>
            <a className="nav__link" href={n.href} aria-current={active === n.href ? 'page' : undefined}>{n.label}</a>
          </div>
        ))}
      </nav>
      <div className="nav__actions">
        <a className="btn btn--primary" href="/contact">Discuss an opportunity</a>
      </div>
      <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      </button>
    </div>
  </header>
);

export default SiteNav;
