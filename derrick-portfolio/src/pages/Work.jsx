import { caseStudies } from '../content/site';
import { CaseCard, SectionLabel } from '../components/site/Bits';

const GROUPS = [
  { type: 'Professional', title: 'Professional work', line: 'Employment and client-context work.' },
  { type: 'Product', title: 'Products', line: 'Live and in use.' },
  { type: 'Academic research', title: 'Academic research', line: 'Research and study projects.' },
  { type: 'Prototype', title: 'Prototypes', line: 'Concepts and working explorations.' },
];

const Work = () => {
  const groups = GROUPS.map((g) => ({ ...g, items: caseStudies.filter((c) => c.workType === g.type) })).filter((g) => g.items.length);
  return (
    <>
      <section className="section page-head" data-enter aria-labelledby="work-h">
        <div className="wrap">
          <div className="section-head">
            <SectionLabel n={1}>Selected work</SectionLabel>
            <h1 id="work-h">Work shaped by data, context, and people.</h1>
            <p>Professional work, academic research, and prototypes, clearly distinguished. Results appear only where they are documented.</p>
          </div>
          <ul className="pills work__jump" aria-label="Kinds of work">
            {groups.map((g) => <li key={g.type}><a className="pill" href={`#${g.type.toLowerCase().replace(/\s+/g, '-')}`}>{g.title} <span className="muted">{g.items.length}</span></a></li>)}
          </ul>
        </div>
      </section>

      {groups.map((g, i) => {
        const id = g.type.toLowerCase().replace(/\s+/g, '-');
        return (
          <section className="section work__group" id={id} key={g.type} aria-labelledby={`${id}-h`}>
            <div className="wrap">
              <div className="section-head">
                <SectionLabel n={i + 2}>{g.title}</SectionLabel>
                <h2 id={`${id}-h`}>{g.title}. <span className="muted">{g.line}</span></h2>
              </div>
              <div className="grid work__grid">
                {g.items.map((c) => <CaseCard key={c.slug} c={c} className="span-4" />)}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Work;
