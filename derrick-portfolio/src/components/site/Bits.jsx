// Small shared pieces: the numbered section label, the kit's arrow, outside links, the workflow
// diagram panel and the case-study card.

import { pad } from '../../lib/format';

export const Arrow = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path className="m-arrow__stem" d="M1 6h8" /><path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg>
);

// "01 / About": the numbered label over a section's heading (as="h2" when the label is the heading)
export const SectionLabel = ({ n, as, id, children }) => {
  const Tag = as || 'p';
  return <Tag className="t-label section-num" id={id}><span className="section-num__n">{pad(n)}</span> / {children}</Tag>;
};

// a link to another site: a new tab, said in words for screen readers
export const ExtLink = ({ href, className = 'link', children }) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    {children}<span className="sr-only"> (opens in a new tab)</span>
  </a>
);

// a workflow from the content file, drawn by the kit's diagram script (assets/diagrams/mount.js).
// With fx, the panel is the page's one [data-visual] band, on the kit's gradient-mesh ground.
// data-dg-phone="loop": the data keeps flowing on a phone too (the kit would hold a still frame under 640px);
// a visitor who asks for reduced motion still gets the still frame, and every diagram has its pause button.
const FX = '{"relief": 0.2, "tint": 0.5, "calm": 0.75, "calmX": 0.5, "calmY": 0.5}';
export const Workflow = ({ spec, fx = false, className = '' }) => (
  <div
    data-dg-phone="loop"
    className={`panel workflow ${className}`.trim()}
    {...(fx ? { 'data-visual': '', 'data-fx': 'gradient-mesh', 'data-fx-seed': '31', 'data-fx-params': FX } : {})}
  >
    <div className="dg" data-diagram>
      <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(spec) }} />
    </div>
  </div>
);

// one case study as a card: the whole card is the link
export const CaseCard = ({ c, line = 'summary', className = '' }) => (
  <a className={`card case-card ${className}`.trim()} href={`/work/${c.slug}`}>
    <span className="t-label case-card__type">{c.workType} · {c.context}</span>
    <h3>{c.short || c.title}</h3>
    <p>{c[line]}</p>
    <span className="case-card__more">Read Case Study<Arrow /></span>
  </a>
);
