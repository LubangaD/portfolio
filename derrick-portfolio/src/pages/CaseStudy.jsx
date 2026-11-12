import { caseStudyBySlug, profile } from '../content/site';
import { Arrow, CaseCard, ExtLink, SectionLabel, Workflow } from '../components/site/Bits';

// On a desktop the case study's wide panel shows a timeline as a row of steps (the kit would otherwise
// turn a thin row into a checklist down the panel); tablets and phones keep the kit's own choice.
const wideTimeline = (spec) =>
  spec.layout === 'timeline' && !spec.orient && window.matchMedia('(min-width: 1024px)').matches ? { ...spec, orient: 'h' } : spec;

// The case-study template. Every part comes from the content file; a part with no content is left
// out and the numbering closes up, so the page never shows a gap or a placeholder.
const CaseStudy = ({ caseStudy: c }) => {
  const related = c.related && caseStudyBySlug(c.related);
  const sideFlow = c.workflow?.orient === 'v';
  const links = [
    c.links?.site && { href: c.links.site, label: `Visit ${c.title}` },
    c.links?.store && { href: c.links.store, label: 'Get it on the Chrome Web Store' },
    c.links?.demo && { href: c.links.demo, label: 'Open the live demo' },
    c.links?.code && { href: c.links.code, label: 'Read the code on GitHub' },
  ].filter(Boolean);

  const parts = [
    { key: 'role', label: 'Role', body: <p>{c.role}</p> },
    {
      key: 'problem', label: 'Problem',
      body: (
        <>
          <p>{c.problem}</p>
          {c.dataContext && <div><h3 className="t-label muted">Constraints and data context</h3><p>{c.dataContext}</p></div>}
        </>
      ),
    },
    {
      key: 'approach', label: 'Technical approach',
      // a vertical workflow (orient "v") sits beside the words and saves the band under them; any other takes
      // the row's full width under the words, so a card pipeline has room for its cards
      body: sideFlow ? (
        <div className="case-split">
          <p>{c.approach}</p>
          <Workflow spec={c.workflow} className="case__diagram case__diagram--side" />
        </div>
      ) : <p>{c.approach}</p>,
      wide: c.workflow && !sideFlow && <Workflow spec={wideTimeline(c.workflow)} className="case__diagram" />,
    },
    {
      key: 'results', label: 'Results and evidence',
      body: (
        <>
          <p className="t-lead">{c.outcome}</p>
          {c.evidence && <p>{c.evidence}</p>}
          {c.scopeNote && <p className="t-small muted">{c.scopeNote}</p>}
        </>
      ),
    },
    { key: 'tools', label: 'Tools', body: <ul className="pills">{c.tools.map((t) => <li className="pill" key={t}>{t}</li>)}</ul> },
    c.lessons && { key: 'lessons', label: 'Lessons', body: <p>{c.lessons}</p> },
    links.length && {
      key: 'links', label: 'Links',
      body: <ul className="link-list">{links.map((l) => <li key={l.href}><ExtLink href={l.href}>{l.label}</ExtLink></li>)}</ul>,
    },
  ].filter(Boolean);

  return (
    <>
      <section className="section page-head" data-enter aria-labelledby="case-h">
        <div className="wrap">
          <a className="case__back" href="/work">All selected work</a>
          <div className="grid grid--top case__head">
            <div className={`${c.image ? 'span-6' : 'span-8'} stack-5`}>
              <p className="t-label section-num">{c.workType} · {c.context}</p>
              <h1 id="case-h" className="case__title">{c.title}</h1>
              <p className="t-lead">{c.summary}</p>
              <ul className="rows case__facts">
                <li><span className="rows__name">Organisation or context</span><span className="rows__value">{c.context}</span></li>
                <li><span className="rows__name">Type of work</span><span className="rows__value">{c.workType}</span></li>
              </ul>
              {links.length > 0 && (
                <div className="btn-row">
                  {links.map((l, i) => (
                    <ExtLink key={l.href} href={l.href} className={`btn ${i === 0 ? 'btn--primary' : 'btn--secondary'}`}>{l.label}</ExtLink>
                  ))}
                </div>
              )}
            </div>
            {c.image && (
              <figure className="span-6 start-7 case__figure">
                <div className="frame frame--photo">
                  <img className="frame__img" src={c.image.src} alt={c.image.alt} loading="lazy" decoding="async"
                    data-source={c.image.standIn ? 'stand-in' : 'client'} data-subject={c.title} />
                </div>
                {c.image.standIn && <figcaption className="t-small muted">Illustrative photograph, not from the project.</figcaption>}
              </figure>
            )}
          </div>
        </div>
      </section>

      <section className="section case__body" aria-label="Case study">
        <div className="wrap">
          {parts.map((p, i) => (
            <div className="grid case-row" key={p.key}>
              <div className="span-4">
                <SectionLabel as="h2" n={i + 1}>{p.label}</SectionLabel>
              </div>
              <div className="span-7 start-6 stack-4">{p.body}</div>
              {p.wide && <div className="case-row__wide">{p.wide}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="section case__next" aria-labelledby="next-h">
        <div className="wrap">
          <div className="grid grid--top">
            <div className="span-5 stack-5">
              <h2 id="next-h">Have a related problem to solve?</h2>
              <p>Tell me about the data, the decision it should support, and the people who will use it.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="/contact">Discuss an Opportunity<Arrow /></a>
                {profile.calendarUrl && <ExtLink href={profile.calendarUrl} className="btn btn--secondary">Book a Discovery Call</ExtLink>}
              </div>
            </div>
            {related && (
              <div className="span-6 start-7 stack-4">
                <h3 className="t-label muted">Related project</h3>
                <CaseCard c={related} />
              </div>
            )}
          </div>
          <a className="link case__more" href="/work">More selected work</a>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
