import { capabilities, caseStudyBySlug, techStrip } from '../content/site';
import { SectionLabel } from '../components/site/Bits';
import { pad } from '../lib/format';

const Capabilities = () => (
  <>
    <section className="section page-head" data-enter aria-labelledby="cap-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={1}>Capabilities</SectionLabel>
          <h1 id="cap-h">From useful models to reliable data workflows.</h1>
          <p>Each capability is grounded in a documented project, with examples and tools rather than an undifferentiated list of skills.</p>
        </div>
      </div>
    </section>

    <section className="section" aria-label="Six capabilities">
      <div className="wrap">
        {capabilities.map((c, i) => {
          const cs = caseStudyBySlug(c.caseStudy);
          return (
            <article className="grid case-row" key={c.title} aria-labelledby={`cap-${i}`}>
              <div className="span-4">
                <p className="t-label muted">{pad(i + 1)}</p>
                <h2 className="t-card case-row__title" id={`cap-${i}`}>{c.title}</h2>
              </div>
              <div className="span-7 start-6 stack-4">
                <div><h3 className="t-label muted">What I deliver</h3><p>{c.deliver}</p></div>
                <div><h3 className="t-label muted">Example from my work</h3><p>{c.example}</p></div>
                <ul className="pills" aria-label="Tools">{c.tools.map((t) => <li className="pill" key={t}>{t}</li>)}</ul>
                {cs && <a className="link" href={`/work/${cs.slug}`}>Supporting case study: {cs.short || cs.title}</a>}
              </div>
            </article>
          );
        })}
      </div>
    </section>

    <section className="section" aria-labelledby="tools-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={2}>Technology and methods</SectionLabel>
          <h2 id="tools-h">Supporting toolkit.</h2>
        </div>
        <ul className="pills">{techStrip.map((t) => <li className="pill" key={t}>{t}</li>)}</ul>
      </div>
    </section>
  </>
);

export default Capabilities;
