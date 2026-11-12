import { caseStudyBySlug, education, experience, profile } from '../content/site';
import { Arrow, SectionLabel } from '../components/site/Bits';

const About = () => (
  <>
    <section className="section page-head" data-enter aria-labelledby="about-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-7 stack-5 about__text">
            <SectionLabel n={1}>About</SectionLabel>
            <h1 id="about-h">A little about how I work.</h1>
            <p className="t-lead">I’m Derrick, a Kenyan data scientist with more than five years of experience across data science, machine learning, analytics, and applied research. I look for the connection between how data is built, what it can reliably show, and the people who need to use it.</p>
            <p>At Stahili Commerce, I develop a Survey-to-Story pipeline and work with more than 1 million consumer response data points to produce executive-level market reports. The work runs from BigQuery and Dataform into an analytics dashboard with AI-written narratives, and includes migrating legacy SQL logic into modular Dataform and SQLX workflows.</p>
            <p>My work at iLab Africa includes data validation frameworks for the Kenya Livestock Masterplan, a real-time IoT pipeline, hospital-review analysis, and predictive and forecasting projects. My MSc research examines ABC-VEN inventory optimisation in Kenyan hospitals; measured findings are not yet published here.</p>
            <p>Accessibility and collaboration matter just as much as the technical system. Through AbleSpeak and earlier work at CNEAT Research Academy, I have contributed to assistive-technology and inclusive-learning work. The SUGAR Network connected my design-thinking collaboration with stakeholders across Africa and Europe.</p>
            <p className="about__motto">{profile.motto}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/work">Explore my work<Arrow /></a>
              {profile.cvUrl && <a className="btn btn--secondary" href={profile.cvUrl} download>Download CV</a>}
            </div>
          </div>
          <div className="span-4 start-9 about__portrait">
            <img
              className="about__photo"
              src="/assets/img/derrick-cutout-560.webp"
              srcSet="/assets/img/derrick-cutout-560.webp 560w, /assets/img/derrick-cutout.webp 900w"
              sizes="(max-width: 639px) 80vw, 30vw"
              width="560"
              height="866"
              alt="Derrick Lubanga, smiling, in a navy suit and white shirt"
              decoding="async"
              data-source="client"
              data-subject="portrait"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={2}>Experience</SectionLabel>
          <h2 id="exp-h">A timeline of applied work.</h2>
          <p>Roles and dates follow the portfolio record; results are described only where they are documented.</p>
        </div>
        <ol className="timeline">
          {experience.map((r) => {
            const cs = r.caseStudy && caseStudyBySlug(r.caseStudy);
            return (
              <li className="grid timeline__row" key={`${r.organisation}-${r.period}`}>
                <div className="span-3 timeline__when">
                  <p className="t-small">{r.period}</p>
                  <p className="t-small muted">{r.location}</p>
                </div>
                <div className="span-8 start-5 stack-4">
                  <h3 className="t-card">{r.role} <span className="muted">· {r.organisation}</span></h3>
                  <dl className="car">
                    {r.challenge && <div><dt>Challenge</dt><dd>{r.challenge}</dd></div>}
                    <div><dt>Action</dt><dd>{r.action}</dd></div>
                    {r.outcome && <div><dt>Outcome</dt><dd>{r.outcome}</dd></div>}
                  </dl>
                  {cs && <a className="link" href={`/work/${cs.slug}`}>Related case study: {cs.short || cs.title}</a>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

    <section className="section" id="education" aria-labelledby="edu-h">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel n={3}>Education</SectionLabel>
          <h2 id="edu-h">Education.</h2>
        </div>
        <div className="grid">
          {education.map((e) => (
            <div className="card span-6" key={e.degree}>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              {e.note && <p className="t-small muted">{e.note}</p>}
            </div>
          ))}
        </div>
        {profile.languages?.length > 0 && <p className="about__langs">Languages: {profile.languages.join(', ')}</p>}
      </div>
    </section>
  </>
);

export default About;
