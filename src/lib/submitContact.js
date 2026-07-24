/**
 * Contact form submission handler.
 *
 * POSTs to the Vercel serverless function at /api/contact,
 * which sends the email via Resend.
 *
 * The only thing you need to configure is the RESEND_API_KEY
 * environment variable — no frontend env vars required.
 *
 * Local dev:  add RESEND_API_KEY=re_xxx to .env.local
 * Production: add RESEND_API_KEY in Vercel → Project Settings → Environment Variables
 */

export async function submitContact(data) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
    const body = await res.json().catch(() => ({}))
    throw new Error(body?.error ?? `Submission failed (${res.status})`)
  }
}
