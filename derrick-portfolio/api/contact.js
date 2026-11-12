// POST /api/contact: saves one contact-form message to Supabase (table public.contact_messages, created by
// supabase/migrations/20261112120000_contact_messages.sql). Runs on Vercel as a Node function.
//
// Environment (Vercel project settings, server-only: never prefix these with VITE_, or the build would put
// them in the page):
//   SUPABASE_URL          https://<project-ref>.supabase.co
//   SUPABASE_SECRET_KEY   the project's secret key (sb_secret_...), or the legacy service_role key
//                         (SUPABASE_SERVICE_ROLE_KEY is read too)
//
// Answers { success: true } only once Supabase has stored the row, so the form never reports a send that
// did not happen.

import process from 'node:process';

export const ENQUIRY_TYPES = ['role', 'consulting', 'research', 'other'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// the fields the table stores, cleaned, and the names of any that fail
export function validate(body) {
  const b = body && typeof body === 'object' ? body : {};
  const row = {
    name: text(b.name, 200),
    email: text(b.email, 320),
    enquiry_type: text(b.enquiry, 20),
    message: text(b.message, 5000),
  };
  const invalid = [];
  if (!row.name) invalid.push('name');
  if (!EMAIL_RE.test(row.email)) invalid.push('email');
  if (!ENQUIRY_TYPES.includes(row.enquiry_type)) invalid.push('enquiry');
  if (row.message.length < 10) invalid.push('message');
  return { row, invalid };
}

const parse = (body) => {
  if (typeof body !== 'string') return body;
  try { return JSON.parse(body); } catch { return null; }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Use POST.' });
  }

  const body = parse(req.body);
  // the hidden honeypot box is filled only by bots: answer as a success and store nothing
  if (body && body.botcheck) return res.status(200).json({ success: true });

  const { row, invalid } = validate(body);
  if (invalid.length) {
    return res.status(400).json({ success: false, message: 'Some fields are missing or not valid.', fields: invalid });
  }

  const url = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!url || !key) {
    console.error('contact: SUPABASE_URL or SUPABASE_SECRET_KEY is not set');
    return res.status(500).json({ success: false, message: 'The contact service is not set up yet.' });
  }

  // new secret keys (sb_secret_...) go in the apikey header alone; a legacy service_role JWT also as Bearer
  const headers = { apikey: key, 'Content-Type': 'application/json', Prefer: 'return=minimal' };
  if (!key.startsWith('sb_')) headers.Authorization = `Bearer ${key}`;

  try {
    const r = await fetch(`${url}/rest/v1/contact_messages`, { method: 'POST', headers, body: JSON.stringify(row) });
    if (!r.ok) {
      console.error('contact: Supabase insert failed', r.status, (await r.text().catch(() => '')).slice(0, 300));
      return res.status(502).json({ success: false, message: 'The message could not be saved.' });
    }
    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('contact: Supabase unreachable', err);
    return res.status(502).json({ success: false, message: 'The message could not be saved.' });
  }
}
