/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Receives contact form data and sends an email via Resend.
 *
 * Required environment variable (set in Vercel dashboard + .env.local):
 *   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
 *
 * To get a key:
 *   1. Sign up at https://resend.com (free tier: 3,000 emails/month)
 *   2. Verify your domain (saltandlighttechnologies.com) under Domains
 *   3. Create an API key under API Keys
 *   4. Add RESEND_API_KEY to Vercel → Project Settings → Environment Variables
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, budget, timeline, message } = req.body ?? {}

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  // Build a readable email body
  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone    ? `Phone:   ${phone}`    : null,
    company  ? `Company: ${company}`  : null,
    budget   ? `Budget:  ${budget}`   : null,
    timeline ? `Timeline: ${timeline}` : null,
    '',
    'Message:',
    message,
  ].filter(line => line !== null)

  const textBody = lines.join('\n')

  const htmlBody = `
    <table style="font-family:sans-serif;font-size:15px;color:#222;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td>${escHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
      ${phone    ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Phone</td><td>${escHtml(phone)}</td></tr>` : ''}
      ${company  ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Company</td><td>${escHtml(company)}</td></tr>` : ''}
      ${budget   ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Budget</td><td>${escHtml(budget)}</td></tr>` : ''}
      ${timeline ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Timeline</td><td>${escHtml(timeline)}</td></tr>` : ''}
    </table>
    <hr style="margin:20px 0;border:none;border-top:1px solid #ddd"/>
    <p style="font-family:sans-serif;font-size:15px;color:#222;white-space:pre-wrap">${escHtml(message)}</p>
  `

  try {
    const sendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Salt & Light Contact Form <hello@saltandlighttechnologies.com>',
        to: ['info@saltandlighttechnologies.com'],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text: textBody,
        html: htmlBody,
      }),
    })

    if (!sendRes.ok) {
      const err = await sendRes.json().catch(() => ({}))
      console.error('Resend error:', err)
      return res.status(502).json({ error: 'Failed to send email', detail: err })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Unexpected server error' })
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
