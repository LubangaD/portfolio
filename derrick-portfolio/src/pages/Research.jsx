import { caseStudyBySlug, research } from '../content/site';
import { Arrow, ExtLink, SectionLabel, Workflow } from '../components/site/Bits';

const Research = () => {
  const t = research.thesis;
  const thesis = caseStudyBySlug(t.caseStudy);
  const ablespeak = caseStudyBySlug('ablespeak');
  return (
    <>
      <section className="section page-head" data-enter aria-labelledby="research-h">
        <div className="wrap">
          <div className="section-head">
            <SectionLabel n={1}>Research</SectionLabel>
            <h1 id="research-h">Applied research, grounded in real needs.</h1>
            <p>Healthcare inventory research, assistive technology, and applied machine learning connect through one question: how technical work can better serve people.</p>
          </div>
        </div>
      </section>

      <section className="section" id="thesis" aria-labelledby="thesis-h">
        <div className="wrap">
          <div className="grid grid--top">
            <div className="span-5 stack-5">
              <SectionLabel n={2}>MSc thesis · Academic research</SectionLabel>
              <h2 id="thesis-h" className="research__title">{t.title}</h2>
              <p className="t-small muted">{t.degree}</p>
              <p>{t.summary}</p>
              <p className="t-small muted">{t.status}</p>
              <ul className="link-list">
                {thesis && <li><a className="link" href={`/work/${thesis.slug}`}>Thesis case study</a></li>}
                {thesis?.links?.demo && <li><ExtLink href={thesis.links.demo}>Open the reorder-point application</ExtLink></li>}
                {thesis?.links?.code && <li><ExtLink href={thesis.links.code}>Read the code on GitHub</ExtLink></li>}
                {t.thesisFile && <li><a className="link" href={t.thesisFile} download>Download thesis (PDF)</a></li>}
                {t.publicationUrl && <li><ExtLink href={t.publicationUrl}>View publication</ExtLink></li>}
              </ul>
            </div>
            {thesis?.workflow && <Workflow spec={thesis.workflow} fx className="span-6 start-7 research__visual" />}
          </div>
        </div>
      </section>

      <section className="section" id="themes" aria-labelledby="themes-h">
        <div className="wrap">
          <div className="section-head">
            <SectionLabel n={3}>Research themes</SectionLabel>
            <h2 id="themes-h">Three threads through the work.</h2>
          </div>
          <ul className="grid themes">
            {research.themes.map((th) => (
              <li className="span-4" key={th.title}>
                <h3 className="t-card">{th.title}</h3>
                <p>{th.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="inclusive" aria-labelledby="inclusive-h">
        <div className="wrap">
          <div className="grid grid--top">
            <div className="span-5 stack-5">
              <SectionLabel n={4}>Inclusive innovation</SectionLabel>
              <h2 id="inclusive-h">Technology works best when human needs stay in the frame.</h2>
            </div>
            <div className="span-6 start-7 stack-5">
              {ablespeak && (
                <div className="stack-4">
                  <h3 className="t-card">AbleSpeak</h3>
                  <p>{ablespeak.summary} {ablespeak.outcome}</p>
                  <a className="link" href={`/work/${ablespeak.slug}`}>Read the case study</a>
                </div>
              )}
              <div className="stack-4">
                <h3 className="t-card">Research and design collaboration</h3>
                <p>At CNEAT Research Academy, I supported assistive-technology research, inclusive learning programmes, and accessibility-technology training. Through the SUGAR Network, I facilitated stakeholder workshops across Africa and Europe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section research__cta" aria-labelledby="collab-h">
        <div className="wrap">
          <div className="section-head--split">
            <h2 id="collab-h">Interested in collaborating on research or inclusive technology?</h2>
            <a className="btn btn--primary" href="/contact?enquiry=research">Discuss a collaboration<Arrow /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
