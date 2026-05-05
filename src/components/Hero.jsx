import { Link } from 'react-router-dom'
import DashboardPreview from './DashboardPreview'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
             backgroundSize: '72px 72px',
           }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{background: 'radial-gradient(ellipse 100% 70% at 50% -10%, rgba(11,11,11,0) 0%, #0B0B0B 75%)'}}
      />
      {/* Subtle gold bloom — top left quadrant only */}
      <div className="absolute -top-32 left-0 w-[600px] h-[600px] pointer-events-none"
           style={{background: 'radial-gradient(circle, rgba(250,205,18,0.05) 0%, transparent 65%)'}}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-7">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 w-fit px-3 py-1.5 rounded-full border"
                 style={{borderColor:'rgba(250,205,18,0.2)', background:'rgba(250,205,18,0.05)'}}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12] shrink-0" />
              <span className="text-[11px] font-semibold text-[#facd12] uppercase tracking-[0.12em]">
                Built for teams creating real products
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.06] tracking-tight">
              We build software you{' '}
              <span className="relative inline-block">
                <span className="text-white">don't have to</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                      style={{background: 'linear-gradient(90deg, #facd12 0%, rgba(250,205,18,0.2) 100%)'}} />
              </span>
              <br className="hidden lg:block" />
              {' '}rebuild later.
            </h1>

            {/* Subtext */}
            <p className="text-[1.0625rem] text-zinc-400 leading-[1.75] max-w-[480px]">
              Salt and Light Technologies designs and builds product-grade software —
              marketplaces, mobile apps, backend platforms, and dashboards — for founders
              and teams who need it done right the first time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-[#0B0B0B] bg-[#facd12] transition-all duration-150"
                style={{
                  boxShadow: '0 0 24px rgba(250,205,18,0.2)',
                  filter: 'brightness(1)',
                }}
                onMouseEnter={e => e.currentTarget.style.filter='brightness(1.08)'}
                onMouseLeave={e => e.currentTarget.style.filter='brightness(1)'}
              >
                Tell us what you're building
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-zinc-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/[0.04] transition-all duration-150"
              >
                View product work
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs text-zinc-600 leading-relaxed max-w-[420px]">
              We'll review your idea and give you a straight answer — even if the answer is "don't build this yet."
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Marketplaces', 'Mobile Apps', 'Backend Platforms', 'Dashboards', 'IoT Systems'].map(cap => (
                <span key={cap} className="text-[11px] text-zinc-500 px-2.5 py-1 rounded-md border"
                      style={{borderColor:'rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.02)'}}>
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Right — dashboard preview */}
          <div className="flex justify-center lg:justify-end">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
