import { Link } from 'react-router-dom'

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-28 border-b" style={{borderColor:'rgba(255,255,255,0.06)'}}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]"/>
          <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">Product Build · Case Study</span>
        </div>

        {/* Headline block */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            MicLocker — built from first principles
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mt-4">
            Audio professionals owned expensive gear that sat unused. At the same time, others
            needed access to that gear — without the upfront cost. There was no system built
            to support that exchange.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left — 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-10">

            {/* P/A/W columns */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Problem',
                  color: 'text-red-400',
                  borderColor: 'rgba(248,113,113,0.2)',
                  text: 'Audio professionals owned expensive gear that sat unused. Others needed access to that gear without the upfront cost. No purpose-built system existed to support that exchange.',
                },
                {
                  label: 'Approach',
                  color: 'text-[#facd12]',
                  borderColor: 'rgba(250,205,18,0.2)',
                  text: 'We designed the platform from the ground up: marketplace architecture, role-based user system, listings and offer workflows, Stripe Connect commerce layer, messaging and trust systems.',
                },
                {
                  label: 'What We Built',
                  color: 'text-emerald-400',
                  borderColor: 'rgba(52,211,153,0.2)',
                  text: 'A commerce-ready marketplace platform structured to support real transactions, user growth, operational complexity, and future scaling without a rewrite.',
                },
              ].map(item => (
                <div key={item.label} className="flex flex-col gap-3 p-5 rounded-xl border"
                     style={{borderColor:item.borderColor, background:'rgba(255,255,255,0.02)'}}>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${item.color}`}>{item.label}</span>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium mb-3">Full Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Stripe Connect', 'AWS S3'].map(tech => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-lg font-mono text-zinc-400"
                        style={{border:'1px solid rgba(255,255,255,0.08)', background:'rgba(255,255,255,0.03)'}}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Insight quote */}
            <blockquote className="flex gap-4 pl-5 border-l-2" style={{borderColor:'#facd12'}}>
              <div>
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "This is the level of system design we bring into every engagement."
                </p>
                <span className="block mt-3 text-xs text-zinc-600">— Salt & Light Engineering Team</span>
              </div>
            </blockquote>
          </div>

          {/* Right — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Platform card */}
            <div className="rounded-2xl p-6 flex flex-col gap-2"
                 style={{border:'1px solid rgba(250,205,18,0.18)', background:'rgba(250,205,18,0.03)'}}>
              <span className="text-[10px] font-semibold text-[#facd12] uppercase tracking-widest">Systems Delivered</span>
              <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                Everything below is production-designed — not scaffolded. Each system handles real user-facing complexity.
              </p>
            </div>

            {/* Feature tiles */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Marketplace engine', sub: 'Listings, offers, bookings' },
                { label: 'Role-based accounts', sub: 'Owners, renters, admins' },
                { label: 'Payment infrastructure', sub: 'Stripe Connect' },
                { label: 'Messaging system', sub: 'Real-time communication' },
                { label: 'Trust layer', sub: 'Ratings, reviews, moderation' },
                { label: 'Availability + scheduling', sub: 'Search, filter, calendar' },
              ].map(f => (
                <div key={f.label} className="p-3.5 rounded-xl"
                     style={{border:'1px solid rgba(255,255,255,0.07)', background:'#111111'}}>
                  <div className="text-xs font-semibold text-white leading-snug">{f.label}</div>
                  <div className="text-[10px] text-zinc-500 mt-1">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post-case CTA */}
        <div className="mt-16 pt-12 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
             style={{borderColor:'rgba(255,255,255,0.06)'}}>
          <div>
            <p className="text-white font-semibold text-lg">Building something with similar scope?</p>
            <p className="text-zinc-500 text-sm mt-1">
              This is the level of system design we bring into every engagement.
            </p>
          </div>
          <Link to="/contact"
             className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-[#0B0B0B] bg-[#facd12] hover:brightness-110 transition-all duration-150 whitespace-nowrap">
            Talk to us about your project
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
