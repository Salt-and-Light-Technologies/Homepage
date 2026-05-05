/**
 * Contact form submission handler.
 *
 * Currently wired to Formspree (no backend required).
 * To switch to Option B (backend API), replace the body of
 * `submitContact` with:
 *
 *   const res = await fetch('/api/contact', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(data),
 *   })
 *   if (!res.ok) throw new Error('Submission failed')
 *
 * Setup:
 *   1. Create a form at https://formspree.io
 *   2. Copy your endpoint (e.g. https://formspree.io/f/xabcdefg)
 *   3. Add to .env.local:  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xabcdefg
 */

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export async function submitContact(data) {
  if (!ENDPOINT) {
    throw new Error(
      'VITE_FORMSPREE_ENDPOINT is not set. Add it to .env.local — see src/lib/submitContact.js for instructions.'
    )
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Tells Formspree to return JSON instead of redirecting
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      company: data.company || undefined,
      budget: data.budget || undefined,
      timeline: data.timeline || undefined,
      message: data.message,
    }),
  })

  if (!res.ok) {
    // Formspree returns { errors: [...] } on 4xx
    const body = await res.json().catch(() => ({}))
    const detail = body?.errors?.map(e => e.message).join(', ') ?? res.statusText
    throw new Error(`Submission failed: ${detail}`)
  }
}
