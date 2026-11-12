// Contact form delivery through Web3Forms (https://web3forms.com).
// Get a key by entering your email address on web3forms.com; it is emailed to you. Web3Forms access keys
// are designed to sit in the page (a key can only send form messages to its own inbox), but keep it out of
// the repository anyway: set it for the build as VITE_WEB3FORMS_ACCESS_KEY (an .env.local file locally,
// a build argument or environment variable in deployment).
// While it is empty, the contact form opens the visitor's email app instead and says nothing was sent.
export const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();

// Where the contact form saves messages: on Vercel, /api/contact (api/contact.js stores them in Supabase).
// Empty locally and on the Flask build, where the form falls back to Web3Forms or the visitor's email app.
export const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT || '').trim();

export const CONTACT_EMAIL = 'lubanga.derrickn@gmail.com';
