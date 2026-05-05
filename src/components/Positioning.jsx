export default function Positioning() {
  return (
    <section className="py-28 border-b" style={{borderColor:'rgba(255,255,255,0.06)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">

          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]"/>
            <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">Our Position</span>
          </div>

          <blockquote className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
                      style={{textWrap:'balance'}}>
            We are the team you hire{' '}
            <span className="text-zinc-500">
              when the software actually matters.
            </span>
          </blockquote>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Bad engineering decisions don't show up immediately — they show up later as rebuilds,
            delays, and expensive fixes. We work with founders and teams who can't afford that.
            If you're building something real — a platform, a marketplace, a system that needs to
            work under pressure — we build it correctly from the start.
          </p>

          {/* Differentiators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
            {[
              {
                title: 'Product-minded, not task-minded',
                desc: 'We think in systems, not tickets. Every decision is made in the context of the full product.',
              },
              {
                title: 'You own everything',
                desc: 'No lock-in. No proprietary traps. You get full control of your code, architecture, and infrastructure.',
              },
              {
                title: 'Scope-driven, not hours-driven',
                desc: 'We define what gets built upfront. No endless timelines, no drifting scope, no surprise invoices.',
              },
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-3 p-6 rounded-2xl text-left"
                   style={{border:'1px solid rgba(255,255,255,0.07)', background:'#111111'}}>
                <div className="flex items-start gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#facd12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4 className="text-sm font-semibold text-white leading-snug">{item.title}</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
