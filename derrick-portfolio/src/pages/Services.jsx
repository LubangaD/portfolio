import { services } from '../content/site';
import { Arrow, SectionLabel } from '../components/site/Bits';

// Four consulting offers. Timelines are indicative; there is no pricing on the site.
const Services = () => (
  <>
    <section className="section page-head" data-enter aria-labelledby="services-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={1}>Services</SectionLabel>
          <h1 id="services-h">Practical data support, scoped around your needs.</h1>
          <p>Four focused consulting offers for teams working with forecasting, data workflows, feedback, and analytical exploration.</p>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="offers-h">
      <div className="wrap">
        <h2 className="sr-only" id="offers-h">Four offers</h2>
        <div className="grid services">
          {services.map((s, i) => (
            <article className="card card--plan span-6 service" key={s.title} aria-labelledby={`svc-${i}`}>
              <SectionLabel n={i + 1}>Offer</SectionLabel>
              <h3 id={`svc-${i}`}>{s.title}</h3>
              <p><strong>The challenge:</strong> {s.problem}</p>
              <p>{s.description}</p>
              <ul className="checks" aria-label="Deliverables">{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
              <p className="t-small muted service__time">Indicative scope: {s.timeline}</p>
              <a className="btn btn--primary" href="/contact?enquiry=consulting">Discuss Your Project<Arrow /></a>
            </article>
          ))}
        </div>
        <p className="t-small muted services__note">Timelines are indicative, depend on the project scope and data readiness, and are not guaranteed delivery commitments. Pricing is discussed after scope is understood.</p>
      </div>
    </section>
  </>
);

export default Services;
