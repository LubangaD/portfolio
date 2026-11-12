# Deploying the portfolio on Vercel, with contact messages in Supabase

The site is static: Vite builds it into `dist/`, with one HTML file per page (`scripts/postbuild.mjs`) and
`dist/404.html` for addresses with no page. One small Vercel function, `api/contact.js`, saves each
contact-form message into a Supabase table. Nothing else runs on a server. The Flask backend and the
Dockerfile are not used on Vercel.

Keys never go in the code, in a commit or in a chat. Each one goes straight into the settings page named
below.

## 1. Supabase: the table

1. In the Supabase dashboard, **New project**. Pick a name (for example `portfolio`) and the region nearest
   to you. Save the database password it asks for in your password manager.
2. Open **SQL Editor**, paste the whole of
   `supabase/migrations/20261112120000_contact_messages.sql`, and **Run**. It creates the table
   `contact_messages` with row level security on and no policies, so the public key cannot read or write it.
3. Open **Project Settings > API Keys** (or **API**). You need two values for Vercel:
   - the **Project URL** (`https://<project-ref>.supabase.co`)
   - a **secret key** (`sb_secret_...`; create one if none is listed). The legacy `service_role` key also
     works. Copy it straight into Vercel in step 2; it can read and write every table.

## 2. Vercel: the site and the function

1. **Add New > Project**, import the GitHub repository `LubangaD/portfolio`.
2. **Root Directory**: `derrick-portfolio`. Vercel reads the rest from `vercel.json` (Vite, `pnpm build`,
   output `dist`).
3. **Environment Variables** (Production and Preview):

   | Name | Value | Where it is used |
   | --- | --- | --- |
   | `SUPABASE_URL` | the Project URL | the function only |
   | `SUPABASE_SECRET_KEY` | the secret key | the function only (never prefix it with `VITE_`) |
   | `VITE_CONTACT_ENDPOINT` | `/api/contact` | built into the page: the form posts there |
   | `VITE_WEB3FORMS_ACCESS_KEY` | optional: your Web3Forms key | also emails you each message |

4. **Deploy**. The redesign is on the branch `redesign/multi-page-portfolio`. Vercel deploys the
   repository's production branch (`main`) to the main address, and every other branch as a preview. Merge
   the branch into `main`, or set the production branch under **Settings > Git**.
5. A change to a `VITE_` variable takes effect at the next deploy (it is built into the page): redeploy after
   adding them.

## 3. Check it

1. Open `/contact` on the deployment and send a test message. The form says it is sent only once Supabase
   has stored it.
2. In Supabase, **Table Editor > contact_messages** shows the row.
3. If it fails, **Vercel > the deployment > Logs** shows the function's error (for example a missing
   `SUPABASE_URL` or `SUPABASE_SECRET_KEY`).
4. Open a made-up address such as `/nope`: the not-found page, with a 404 status.

## 4. After the first deploy

- Set `profile.siteUrl` in `src/content/site.js` to the production address (the `*.vercel.app` one, or your
  own domain once it is connected under **Settings > Domains**) and push. The next build writes the canonical
  links, `sitemap.xml` and `robots.txt`.
- The old Render deployment keeps running until you switch your domain or links over.

## Running it locally

`pnpm dev` runs the site without the function: the contact form then falls back to Web3Forms or the
visitor's email app. To run the function too, install the Vercel CLI (`npm i -g vercel`), run `vercel link`
and `vercel env pull .env.local` in this folder, then `vercel dev`. `.env.local` is git-ignored.
