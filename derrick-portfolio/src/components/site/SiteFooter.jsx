import { caseStudies, nav, profile } from '../../content/site';
import { Arrow, ExtLink } from './Bits';

const flagship = caseStudies.filter((c) => c.featured);

const Links = () => (
  <div className="closing__links">
    <div className="grid">
      <div className="span-4 stack-4">
        <a className="nav__logo" href="/"><span className="mark" data-mark="dots" aria-hidden="true"></span>{profile.name}</a>
        <p className="footer__lede">{profile.title}, {profile.location}</p>
        <p className="t-small footer__motto">{profile.motto}</p>
      </div>
      <div className="span-2 footer__col"><h3>Pages</h3><ul>
        {nav.filter((n) => n.href !== '/' && n.href !== '/contact').map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
      </ul></div>
      <div className="span-3 footer__col"><h3>Selected work</h3><ul>
        {flagship.map((c) => <li key={c.slug}><a href={`/work/${c.slug}`}>{c.short || c.title}</a></li>)}
      </ul></div>
      <div className="span-3 footer__col"><h3>Contact</h3><ul>
        <li><a href={`mailto:${profile.email}`}>Email</a></li>
        <li><ExtLink href={profile.links.linkedin} className="">LinkedIn</ExtLink></li>
        <li><ExtLink href={profile.links.github} className="">GitHub</ExtLink></li>
        {profile.cvUrl && <li><a href={profile.cvUrl} download>Download CV</a></li>}
      </ul></div>
    </div>
    <div className="footer__legal">
      <span>&copy; {new Date().getFullYear()} {profile.name}</span>
      <div className="socials">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><img src="/assets/icons/github.svg" alt="" width="20" height="20" /></a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><img src="/assets/icons/linkedin.svg" alt="" width="20" height="20" /></a>
      </div>
      <a className="credits" href="/credits.html">Photographs via Wikimedia Commons</a>
    </div>
  </div>
);

// footer.closing: the contact call (close-photo) over the links. The contact page has the form
// itself, so it takes the links alone.
const SiteFooter = ({ close = true }) => {
  if (!close) {
    return (
      <footer className="footer footer--dark ground-inverse site-footer">
        <div className="wrap"><Links /></div>
      </footer>
    );
  }
  return (
    <footer className="footer closing footer--dark ground-inverse" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Let’s talk about what you’re working on.</h2>
              <p className="t-lead">Open to remote roles, consulting projects, and research collaboration.</p>
            </div>
            <div className="btn-row">
              <a className="btn btn--primary" href="/contact">Discuss an Opportunity<Arrow /></a>
              {profile.calendarUrl && <ExtLink href={profile.calendarUrl} className="btn btn--secondary">Book a Discovery Call</ExtLink>}
            </div>
          </div>
          <div className="close__media">
            <img
              src="/assets/img/photo-f163119220.jpg"
              srcSet="/assets/img/photo-f163119220-500.jpg 500w, /assets/img/photo-f163119220-960.jpg 960w, /assets/img/photo-f163119220.jpg 1600w"
              sizes="(max-width: 639px) 230vw, 100vw"
              alt="The Nairobi skyline at sunset, the Kenyatta International Convention Centre among its towers"
              // the band is a thin strip: aim it at the towers and the sunset glow, not the empty sky above
              style={{ '--pos': '50% 62%' }}
              loading="lazy"
              decoding="async"
              data-source="stand-in"
              data-subject="Nairobi"
            />
          </div>
        </div>
        <Links />
      </div>
    </footer>
  );
};

export default SiteFooter;
