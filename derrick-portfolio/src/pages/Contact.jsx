import { useRef, useState } from 'react';
import { CONTACT_ENDPOINT, WEB3FORMS_ACCESS_KEY } from '../config';
import { profile } from '../content/site';
import { ExtLink, SectionLabel } from '../components/site/Bits';

const ENQUIRIES = [
  { value: 'role', label: 'A data science role' },
  { value: 'consulting', label: 'A consulting project' },
  { value: 'research', label: 'Research collaboration' },
  { value: 'other', label: 'Something else' },
];

// a profile link as people read it: linkedin.com/in/lubangaderrick, from the one URL in the content file
const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/+$/, '');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RULES = {
  name: (v) => (v.trim() ? '' : 'Write your name.'),
  email: (v) => (EMAIL_RE.test(v.trim()) ? '' : 'Write an email address with an @, like name@example.com.'),
  enquiry: (v) => (v ? '' : 'Choose what your enquiry is about.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Write a few lines about the opportunity or challenge.'),
};
const FIELDS = Object.keys(RULES);

const fromQuery = () => {
  const q = new URLSearchParams(window.location.search).get('enquiry');
  return ENQUIRIES.some((e) => e.value === q) ? q : '';
};

// Web3Forms emails a message to Derrick; it answers success: true only once it has accepted it
const emailViaWeb3Forms = async ({ subject, type, name, email, message, botcheck }) => {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject, from_name: 'Portfolio contact form', name, email, enquiry_type: type, message, botcheck }),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && data.success === true;
};

// The form says a message is sent only once it is confirmed:
//   - with CONTACT_ENDPOINT (Vercel): once /api/contact has stored it in Supabase; Web3Forms, if set up,
//     also emails a copy, which does not change the answer (the message is already kept)
//   - with only a Web3Forms key: once Web3Forms has accepted it
//   - with neither: it opens the visitor's email app with the enquiry written in, and says plainly that
//     nothing was sent through the website
const ONLINE = Boolean(CONTACT_ENDPOINT || WEB3FORMS_ACCESS_KEY);

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', enquiry: fromQuery(), message: '', botcheck: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', text: '' });
  const refs = { name: useRef(null), email: useRef(null), enquiry: useRef(null), message: useRef(null) };
  const sending = status.state === 'sending';

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: RULES[k](v) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const found = Object.fromEntries(FIELDS.map((k) => [k, RULES[k](values[k])]));
    setErrors(found);
    const bad = FIELDS.filter((k) => found[k]);
    if (bad.length) {
      setStatus({ state: 'invalid', text: bad.length === 1 ? '1 field to fix.' : `${bad.length} fields to fix.` });
      refs[bad[0]].current?.focus();
      return;
    }
    const type = ENQUIRIES.find((x) => x.value === values.enquiry)?.label || 'Enquiry';
    const subject = `Portfolio enquiry: ${type}`;

    if (!ONLINE) {
      const body = `${values.message.trim()}\n\nName: ${values.name.trim()}\nEmail: ${values.email.trim()}\nEnquiry type: ${type}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ state: 'mailto', text: 'Your email app should open with your enquiry ready to send. It has not been sent through this website.' });
      return;
    }

    setStatus({ state: 'sending', text: 'Sending your message…' });
    const msg = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim(), botcheck: values.botcheck };
    try {
      let confirmed;
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...msg, enquiry: values.enquiry }),
        });
        const data = await res.json().catch(() => ({}));
        confirmed = res.ok && data.success === true;
        if (confirmed && WEB3FORMS_ACCESS_KEY) emailViaWeb3Forms({ ...msg, subject, type }).catch(() => {});
      } else {
        confirmed = await emailViaWeb3Forms({ ...msg, subject, type });
      }
      if (!confirmed) throw new Error('not confirmed');
      setValues({ name: '', email: '', enquiry: '', message: '', botcheck: false });
      setStatus({ state: 'sent', text: 'Thank you. Your message has been sent, and I will reply to the email address you gave.' });
    } catch {
      setStatus({ state: 'failed', text: `Your message did not send. Your words are still here: try again, or email ${profile.email}.` });
    }
  };

  const err = (k) => errors[k] && <p className="field__error" id={`f-${k}-err`}>{errors[k]}</p>;
  const aria = (k) => ({ 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? `f-${k}-err` : undefined });

  return (
    <form className="contact-form span-6 start-7" onSubmit={onSubmit} noValidate aria-labelledby="form-h">
      <h2 className="t-card contact-form__head" id="form-h">Send an enquiry</h2>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden checked={values.botcheck} onChange={set('botcheck')} />
      <div className="field"><label htmlFor="f-name">Name</label>
        <input id="f-name" ref={refs.name} type="text" autoComplete="name" value={values.name} onChange={set('name')} required {...aria('name')} />
        {err('name')}</div>
      <div className="field"><label htmlFor="f-email">Email</label>
        <input id="f-email" ref={refs.email} type="email" autoComplete="email" inputMode="email" value={values.email} onChange={set('email')} required {...aria('email')} />
        {err('email')}</div>
      <div className="field field--full"><label htmlFor="f-enquiry">Enquiry type</label>
        <select id="f-enquiry" ref={refs.enquiry} value={values.enquiry} onChange={set('enquiry')} required {...aria('enquiry')}>
          <option value="">Choose one</option>
          {ENQUIRIES.map((x) => <option key={x.value} value={x.value}>{x.label}</option>)}
        </select>
        {err('enquiry')}</div>
      <div className="field field--full"><label htmlFor="f-message">Message</label>
        <textarea id="f-message" ref={refs.message} value={values.message} onChange={set('message')} required {...aria('message')} />
        {err('message')}</div>
      <div className="btn-row">
        <button className="btn btn--primary" type="submit" disabled={sending} aria-busy={sending || undefined}>
          {sending ? 'Sending…' : ONLINE ? 'Send message' : 'Write it in my email app'}
        </button>
      </div>
      <p className={`form__status contact-form__status is-${status.state}`} role="status" aria-live="polite">{status.text}</p>
      {!ONLINE && <p className="t-small muted">The form opens your email app with the enquiry written in; you send it from there.</p>}
    </form>
  );
};

const Contact = () => (
  <section className="section page-head contact" data-enter aria-labelledby="contact-h">
    <div className="wrap">
      <div className="grid grid--top">
        <div className="span-5 stack-5">
          <SectionLabel n={1}>Contact</SectionLabel>
          <h1 id="contact-h">Let’s talk about what you’re working on.</h1>
          <p className="t-lead">I’m open to remote roles, consulting projects, and research collaboration. Tell me a little about the opportunity or challenge.</p>
          <ul className="rows contact__rows">
            <li><span className="rows__name">Email</span><a className="rows__value link" href={`mailto:${profile.email}`}>{profile.email.split('@')[0]}@<wbr />{profile.email.split('@')[1]}</a></li>
            <li><span className="rows__name">LinkedIn</span><ExtLink href={profile.links.linkedin} className="rows__value link">{shortUrl(profile.links.linkedin)}</ExtLink></li>
            <li><span className="rows__name">GitHub</span><ExtLink href={profile.links.github} className="rows__value link">{shortUrl(profile.links.github)}</ExtLink></li>
            <li><span className="rows__name">Phone</span><a className="rows__value link" href={`tel:${profile.phone}`}>{profile.phoneShown}</a></li>
            <li><span className="rows__name">Based in</span><span className="rows__value">{profile.location}</span></li>
          </ul>
          <div className="btn-row">
            {profile.calendarUrl && <ExtLink href={profile.calendarUrl} className="btn btn--primary">Book a Discovery Call</ExtLink>}
            {profile.cvUrl && <a className="btn btn--secondary" href={profile.cvUrl} download>Download CV</a>}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
