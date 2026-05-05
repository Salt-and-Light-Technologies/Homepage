import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* Background grid — matches Hero */}
      <div className="fixed inset-0 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
             backgroundSize: '72px 72px',
           }}
      />
      {/* Gold bloom — top right */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(250,205,18,0.04) 0%, transparent 65%)' }}
      />

      <main className="relative">
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-28">

          {/* Header */}
          <div className="mb-12">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
              <span className="text-[11px] font-semibold text-[#facd12] uppercase tracking-[0.12em]">
                Start a project
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-4">
              Tell us what you're building.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              If it's worth building, we'll help you build it right.{' '}
              If it's not, we'll tell you that too.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-12"
               style={{ background: 'linear-gradient(90deg, rgba(250,205,18,0.3) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)' }}
          />

          {/* Form */}
          <ContactForm />

          {/* Bottom info */}
          <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
               style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-zinc-600 uppercase tracking-widest font-medium">Prefer email?</span>
              <a href="mailto:info@saltandlighttechnologies.com"
                 className="text-sm text-zinc-400 hover:text-[#facd12] transition-colors duration-150">
                info@saltandlighttechnologies.com
              </a>
            </div>
            <div className="flex flex-col gap-1 sm:text-right">
              <span className="text-xs text-zinc-600 uppercase tracking-widest font-medium">Or call us</span>
              <a href="tel:+13146900719"
                 className="text-sm text-zinc-400 hover:text-[#facd12] transition-colors duration-150">
                (314) 690-0719
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
