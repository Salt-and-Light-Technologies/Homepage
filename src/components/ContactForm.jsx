import useContactForm from '../hooks/useContactForm'
import { submitContact } from '../lib/submitContact'

const BUDGET_OPTIONS = [
  { value: '', label: 'Select a range' },
  { value: 'under-10k', label: 'Under $10K' },
  { value: '10k-25k', label: '$10K – $25K' },
  { value: '25k-50k', label: '$25K – $50K' },
  { value: '50k-plus', label: '$50K+' },
]

const TIMELINE_OPTIONS = [
  { value: '', label: 'Select a timeline' },
  { value: 'asap', label: 'ASAP' },
  { value: '1-2-months', label: '1–2 months' },
  { value: '3-6-months', label: '3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
]

// Live submission handler — posts to Formspree (VITE_FORMSPREE_ENDPOINT)
// Swap submitContact for a fetch('/api/contact') call to move to Option B
async function defaultSubmit(formData) {
  await submitContact(formData)
}

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

const inputBase =
  'w-full bg-[#111111] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-150 focus:border-[#facd12] focus:ring-1 focus:ring-[#facd12]/30'

const labelBase = 'block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2'

function FieldError({ message }) {
  if (!message) return null
  return <p className="mt-1.5 text-xs text-red-500">{message}</p>
}

export default function ContactForm({ onSubmitOverride }) {
  const { formData, errors, submitError, isSubmitting, success, handleChange, handleSubmit, reset } =
    useContactForm({ onSubmit: onSubmitOverride ?? defaultSubmit })

  if (success) {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        {/* Checkmark */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center"
             style={{ background: 'rgba(250,205,18,0.1)', border: '1px solid rgba(250,205,18,0.25)' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11.5L8.5 16L18 6" stroke="#facd12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-white font-semibold text-lg">Got it. We'll take a look and get back to you.</p>
          <p className="text-zinc-500 text-sm mt-2">Keep an eye on your inbox.</p>
        </div>
        <button
          onClick={reset}
          className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelBase}>
            Full Name <span className="text-[#facd12]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="James McDougall"
            value={formData.name}
            onChange={handleChange}
            className={inputBase + (errors.name ? ' border-red-500 focus:border-red-500 focus:ring-red-500/20' : '')}
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            Email <span className="text-[#facd12]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="james@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputBase + (errors.email ? ' border-red-500 focus:border-red-500 focus:ring-red-500/20' : '')}
          />
          <FieldError message={errors.email} />
        </div>
      </div>

      {/* Company + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelBase}>
            Company <span className="text-zinc-700 font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Corp"
            value={formData.company}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-zinc-700 font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(314) 709-0309"
            value={formData.phone}
            onChange={e =>
              handleChange({ target: { name: 'phone', value: formatPhone(e.target.value) } })
            }
            className={inputBase}
          />
        </div>
      </div>

      {/* Budget + Timeline */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className={labelBase}>
            Budget <span className="text-zinc-700 font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputBase + ' cursor-pointer'}
            style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%2371717a' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
          >
            {BUDGET_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value} style={{ background: '#111111' }}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className={labelBase}>
            Timeline <span className="text-zinc-700 font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputBase + ' cursor-pointer'}
            style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%2371717a' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
          >
            {TIMELINE_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value} style={{ background: '#111111' }}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Project Description <span className="text-[#facd12]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you're building — what it does, where you are in the process, and what kind of help you need."
          value={formData.message}
          onChange={handleChange}
          className={inputBase + ' resize-none leading-relaxed' + (errors.message ? ' border-red-500 focus:border-red-500 focus:ring-red-500/20' : '')}
        />
        <FieldError message={errors.message} />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-[#0B0B0B] bg-[#facd12] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150"
          style={{ boxShadow: '0 0 32px rgba(250,205,18,0.18)' }}
          onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.filter = 'brightness(1.08)' }}
          onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)' }}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28" strokeDashoffset="10"/>
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>

        {submitError && (
          <p className="mt-3 text-sm text-red-400 leading-relaxed">{submitError}</p>
        )}

        <p className="mt-4 text-xs text-zinc-700">
          No pitch decks required. Just a real conversation.
        </p>
      </div>
    </form>
  )
}
