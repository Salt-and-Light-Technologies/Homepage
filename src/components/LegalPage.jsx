import { Link } from 'react-router-dom'

export default function LegalPage({ title, effectiveDate, sections }) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Subtle grid background */}
      <div className="fixed inset-0 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
             backgroundSize: '72px 72px',
           }}
      />

      <main className="relative">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-28">

          {/* Back link */}
          <Link to="/"
                className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150 mb-10">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-12 pb-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
              <span className="text-[11px] font-semibold text-[#facd12] uppercase tracking-[0.12em]">Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-3">{title}</h1>
            <p className="text-sm text-zinc-600">Effective Date: {effectiveDate}</p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-3">
                {section.heading && (
                  <h2 className="text-base font-semibold text-white tracking-tight">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <h3 className="text-sm font-semibold text-zinc-300">{section.subheading}</h3>
                )}
                {section.intro && (
                  <p className="text-sm text-zinc-400 leading-[1.8]">{section.intro}</p>
                )}
                {section.paragraphs && section.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm text-zinc-400 leading-[1.8]">{p}</p>
                ))}
                {section.items && (
                  <ul className="flex flex-col gap-2 mt-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-400 leading-[1.7]">
                        <span className="mt-[6px] w-1 h-1 rounded-full bg-[#facd12] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsections && section.subsections.map((sub, j) => (
                  <div key={j} className="mt-2 flex flex-col gap-2">
                    <p className="text-sm text-zinc-300 font-medium">{sub.label}</p>
                    <p className="text-sm text-zinc-400 leading-[1.8]">{sub.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
               style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="text-xs text-zinc-700">
              © {new Date().getFullYear()} Salt and Light Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link to="/privacy" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors duration-150">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors duration-150">Terms of Use</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
