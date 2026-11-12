import { capabilities, caseStudies, caseStudyBySlug, organisations, profile, research } from '../content/site';
import { Arrow, CaseCard, SectionLabel, Workflow } from '../components/site/Bits';

const flagship = caseStudies.filter((c) => c.featured);
const thesis = caseStudyBySlug(research.thesis.caseStudy);
const metric = profile.headlineMetric;

const Home = () => (
  <>
    {/* the dealt split hero: the words on span-5, the portrait on span-6 start-7, the one verified figure on it */}
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <p className="t-label hero__eyebrow">{profile.name} · {profile.title}</p>
            <h1 id="hero-h">Turning complex data into decisions leaders can act on.</h1>
            <p className="hero__lead">I build machine learning models, NLP applications, reliable data pipelines, and custom analytics dashboards in D3, Plotly Dash, and Power BI for healthcare, agriculture, and consumer markets.</p>
            <p className="hero__where">Based in Kenya. Open to remote roles and consulting opportunities worldwide.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/work">View My Work<Arrow /></a>
              <a className="btn btn--secondary" href="/contact">Discuss an Opportunity</a>
            </div>
            {profile.cvUrl && <a className="link hero__cv" href={profile.cvUrl} download>Download CV (PDF)</a>}
            {metric && (
              <p className="hero__metric-line"><strong>{metric.value}</strong> {metric.label} <span className="muted">· {metric.context}</span></p>
            )}
          </div>
          {/* the portrait as it is: the cut-out on the page's own ground, no frame, card or effect */}
          <div className="hero__media hero__media--plain span-6 start-7">
            <img
              src="/assets/img/derrick-cutout.webp"
              srcSet="/assets/img/derrick-cutout-560.webp 560w, /assets/img/derrick-cutout.webp 900w"
              sizes="(max-width: 639px) 90vw, 40vw"
              alt="Derrick Lubanga, smiling, in a navy suit and white shirt"
              fetchPriority="high"
              data-source="client"
              data-subject="portrait"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="intro" aria-labelledby="intro-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 stack-5">
            <SectionLabel n={1}>About</SectionLabel>
            <h2 id="intro-h">How data is built, what it can show, and who needs it.</h2>
            <p>I’m Derrick, a Kenyan data scientist working across data science, machine learning, analytics, and applied research. Accessibility and collaboration matter to me as much as the technical system.</p>
            <a className="link" href="/about">More about how I work</a>
          </div>
          <div className="span-6 start-7">
            <h3 className="t-label muted orgs__head">Organisations and how I worked with them</h3>
            <ul className="rows orgs">
              {organisations.map((o) => (
                <li key={o.name}><span className="rows__name">{o.name}</span><span className="rows__value muted">{o.relationship}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={2}>Selected work</SectionLabel>
          <h2 id="work-h">Applied work, clear context.</h2>
          <p>Professional work, academic research, and prototypes, each identified by its context and supported by the details available.</p>
        </div>
        <div className="grid home-work">
          {flagship.map((c) => <CaseCard key={c.slug} c={c} line="outcome" className="span-3" />)}
        </div>
        <a className="link home-more" href="/work">Explore selected work</a>
      </div>
    </section>

    <section className="section" id="capabilities" aria-labelledby="cap-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={3}>Capabilities</SectionLabel>
          <h2 id="cap-h">Data work that connects analysis to action.</h2>
        </div>
        <ul className="grid home-caps">
          {capabilities.map((c) => (
            <li key={c.title} className="span-4">
              <h3 className="t-card">{c.title}</h3>
              <p>{c.deliver}</p>
            </li>
          ))}
        </ul>
        <a className="link home-more" href="/capabilities">See capabilities</a>
      </div>
    </section>

    <section className="section" id="research" aria-labelledby="research-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 stack-5">
            <SectionLabel n={4}>Research</SectionLabel>
            <h2 id="research-h">Research that takes context seriously.</h2>
            <p>My MSc thesis, <em>{research.thesis.title}</em>, brings together inventory value, clinical criticality, forecasting, and reorder planning.</p>
            <p className="t-small muted">Measured findings and thesis materials are not yet published here.</p>
            <div className="link-row">
              <a className="link" href="/research">Explore research</a>
              {thesis && <a className="link" href={`/work/${thesis.slug}`}>Read the thesis case study</a>}
            </div>
          </div>
          {thesis?.workflow && <Workflow spec={thesis.workflow} fx className="span-6 start-7 home-research__visual" />}
        </div>
      </div>
    </section>
  </>
);

export default Home;
