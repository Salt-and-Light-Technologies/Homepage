import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden text-center"
             style={{border:'1px solid rgba(255,255,255,0.08)', background:'#111111'}}>

          {/* Gold radial bloom */}
          <div className="absolute inset-0 pointer-events-none"
               style={{backgroundImage:'radial-gradient(ellipse 55% 60% at 50% 100%, rgba(250,205,18,0.06) 0%, transparent 70%)'}}
          />
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
               style={{background:'linear-gradient(90deg, transparent 0%, rgba(250,205,18,0.5) 50%, transparent 100%)'}}
          />
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none"
               style={{
                 backgroundImage:`linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
                 backgroundSize:'48px 48px',
               }}
          />

          <div className="relative flex flex-col items-center gap-7 px-8 py-20 max-w-2xl mx-auto">

            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]"/>
              <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">Get in touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{textWrap:'balance'}}>
              Tell us what you're building.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              From idea to execution, we help you make the right decisions at every step.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base text-[#0B0B0B] bg-[#facd12] hover:brightness-110 transition-all duration-150"
                style={{boxShadow:'0 0 40px rgba(250,205,18,0.2)'}}
              >
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="mailto:info@saltandlighttechnologies.com?subject=Discovery Call"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-zinc-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] hover:text-white transition-all duration-150"
              >
                Book a Discovery Call
              </a>
            </div>

            <p className="text-xs text-zinc-600">
              No pitch decks required. Just a real conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
