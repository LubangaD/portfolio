-- Contact-form messages from the portfolio. Written only by the Vercel function api/contact.js, which uses
-- the project's secret (service role) key. Row level security is on and there are no policies, so the
-- public anon/publishable key can neither read nor write this table.

create table if not exists public.contact_messages (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  name         text not null check (char_length(name) between 1 and 200),
  email        text not null check (char_length(email) between 3 and 320),
  enquiry_type text not null check (enquiry_type in ('role', 'consulting', 'research', 'other')),
  message      text not null check (char_length(message) between 10 and 5000)
);

alter table public.contact_messages enable row level security;

comment on table public.contact_messages is 'Portfolio contact-form messages; written by the Vercel function /api/contact with the secret key.';

create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
