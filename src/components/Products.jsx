function MicLockerPreview() {
  return (
    <div className="w-full rounded-xl overflow-hidden border"
         style={{borderColor:'rgba(255,255,255,0.08)', background:'#0d0d0d'}}>
      {/* App header */}
      <div className="flex items-center justify-between px-4 py-3 border-b"
           style={{borderColor:'rgba(255,255,255,0.06)'}}>
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center"
               style={{background:'rgba(250,205,18,0.15)', border:'1px solid rgba(250,205,18,0.2)'}}>
            <span className="text-[9px] text-[#facd12] font-bold">ML</span>
          </div>
          <span className="text-xs font-semibold text-white">MicLocker</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="3" r="2" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
              <path d="M1 9c0-2 1.8-3 4-3s4 1 4 3" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Search + filters */}
      <div className="px-4 pt-3 pb-2 flex items-center gap-2">
        <div className="flex-1 h-7 rounded-md flex items-center px-2.5 gap-2"
             style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)'}}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <circle cx="4" cy="4" r="3" stroke="#71717a" strokeWidth="0.8"/>
            <path d="M6.5 6.5L8 8" stroke="#71717a" strokeWidth="0.8" strokeLinecap="round"/>
          </svg>
          <span className="text-[9px] text-zinc-600">Search gear near you...</span>
        </div>
        {['All', 'Mics', 'Interfaces'].map((f, i) => (
          <span key={f} className="text-[9px] px-2 py-1 rounded-md"
                style={{
                  background: i===0 ? 'rgba(250,205,18,0.12)' : 'rgba(255,255,255,0.04)',
                  color: i===0 ? '#facd12' : '#71717a',
                  border: i===0 ? '1px solid rgba(250,205,18,0.2)' : '1px solid rgba(255,255,255,0.06)',
                }}>
            {f}
          </span>
        ))}
      </div>

      {/* Listing grid */}
      <div className="p-3 grid grid-cols-3 gap-2">
        {[
          { name: 'SM7B Bundle', owner: 'marcus_a', avail: true },
          { name: 'Apollo Twin X', owner: 'studio_j', avail: true },
          { name: 'Rode NT1 Kit', owner: 'freelanc_', avail: false },
          { name: 'Focusrite 2i2', owner: 'kevin_b', avail: true },
          { name: 'UA OX Amp', owner: 'pro_audio', avail: true },
          { name: 'AKG C414', owner: 'the_booth', avail: false },
        ].map(item => (
          <div key={item.name} className="flex flex-col rounded-lg overflow-hidden"
               style={{border:'1px solid rgba(255,255,255,0.06)', background:'#161616'}}>
            <div className="h-10 flex items-center justify-center"
                 style={{background: item.avail ? 'rgba(250,205,18,0.04)' : 'rgba(255,255,255,0.02)'}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="5.5" y="1" width="3" height="7" rx="1.5"
                      stroke={item.avail ? '#facd12' : '#52525b'} strokeWidth="0.9"/>
                <path d="M3 7a4 4 0 008 0" stroke={item.avail ? '#facd12' : '#52525b'} strokeWidth="0.9" strokeLinecap="round"/>
                <line x1="7" y1="11" x2="7" y2="13" stroke={item.avail ? '#facd12' : '#52525b'} strokeWidth="0.9" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="p-1.5">
              <div className="text-[9px] font-medium text-white truncate">{item.name}</div>
              <div className="text-[8px] text-zinc-600 truncate">{item.owner}</div>
              <div className={`text-[8px] mt-0.5 font-medium ${item.avail ? 'text-emerald-400' : 'text-zinc-600'}`}>
                {item.avail ? 'Available' : 'Rented'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ADAPreview() {
  const screens = [
    { label: 'Member Profile', active: true },
    { label: 'League Schedule', active: false },
    { label: 'Player Stats', active: false },
    { label: 'Admin Panel', active: false },
  ]
  const platforms = [
    { name: 'iOS', icon: 'Swift', color: 'rgba(250,140,0,0.8)' },
    { name: 'Android', icon: 'Kotlin', color: 'rgba(123,97,255,0.8)' },
  ]
  return (
    <div className="w-full rounded-xl overflow-hidden border"
         style={{borderColor:'rgba(255,255,255,0.07)', background:'#0d0d0d'}}>
      <div className="flex items-center justify-between px-3 py-2.5 border-b"
           style={{borderColor:'rgba(255,255,255,0.06)'}}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded flex items-center justify-center"
               style={{background:'rgba(250,205,18,0.12)', border:'1px solid rgba(250,205,18,0.2)'}}>
            <span className="text-[8px] text-[#facd12] font-bold">ADA</span>
          </div>
          <span className="text-[11px] font-semibold text-white">American Darters Association</span>
        </div>
        <span className="text-[8px] px-2 py-0.5 rounded-full text-[#facd12]"
              style={{background:'rgba(250,205,18,0.08)', border:'1px solid rgba(250,205,18,0.2)'}}>
          In Progress
        </span>
      </div>
      <div className="p-3">
        <div className="text-[9px] text-zinc-600 mb-2 uppercase tracking-widest">Mobile platforms</div>
        <div className="flex gap-2 mb-3">
          {platforms.map(p => (
            <div key={p.name} className="flex-1 rounded-lg px-2 py-2 flex flex-col gap-1"
                 style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)'}}>
              <span className="text-[8px] font-mono" style={{color:p.color}}>{p.icon}</span>
              <span className="text-[9px] text-zinc-300 font-medium">{p.name}</span>
            </div>
          ))}
        </div>
        <div className="text-[9px] text-zinc-600 mb-1.5 uppercase tracking-widest">App screens</div>
        <div className="flex flex-col gap-1">
          {screens.map(s => (
            <div key={s.label} className="flex items-center gap-2 px-2 py-1.5 rounded text-[9px]"
                 style={{
                   background: s.active ? 'rgba(250,205,18,0.06)' : '#161616',
                   border: `1px solid ${s.active ? 'rgba(250,205,18,0.2)' : 'rgba(255,255,255,0.05)'}`,
                 }}>
              <span className="w-1 h-1 rounded-full shrink-0"
                    style={{background: s.active ? '#facd12' : 'rgba(255,255,255,0.15)'}} />
              <span style={{color: s.active ? '#facd12' : '#71717a'}}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="pt-[84px] pb-28 border-b" style={{borderColor:'rgba(255,255,255,0.06)'}}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]"/>
            <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">Our Products</span>
          </div>
          <h2 className="text-4xl font-bold text-white leading-tight">
            We build our own products.{' '}
            <span className="text-zinc-400">That changes how we build yours.</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-base leading-relaxed">
            Most firms ship tickets. We build systems we have to live with — so we design for scale,
            edge cases, and real users from day one. We wouldn't build your digital solutions any other way. Our guarantee.
          </p>
        </div>

        {/* MicLocker — featured full-width */}
        <div className="rounded-2xl overflow-hidden mb-6"
             style={{border:'1px solid rgba(255,255,255,0.1)', background:'#111111'}}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Preview pane */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r"
                 style={{borderColor:'rgba(255,255,255,0.07)', background:'#0d0d0d'}}>
              <MicLockerPreview />
            </div>
            {/* Info pane */}
            <div className="p-8 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                            style={{background:'rgba(250,205,18,0.1)', color:'#facd12', border:'1px solid rgba(250,205,18,0.25)'}}>
                        Owned Product
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">MicLocker</h3>
                    <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                      A marketplace platform for musicians, engineers, studios, and venues to list,
                      rent, and manage professional audio gear.
                    </p>
                  </div>
                </div>

                {/* What's built */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  {[
                    'Listings and availability system',
                    'Offer and negotiation workflows',
                    'Role-based user accounts',
                    'Messaging and transaction flows',
                    'Ratings and trust systems',
                    'Stripe Connect payouts',
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5L4.5 9L10 3" stroke="#facd12" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-600 mt-4 leading-relaxed">
                  Why it matters: We didn't just design screens — we built the full system required to operate a marketplace.
                </p>
              </div>

              {/* Stack */}
              <div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium mb-2">Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {['React Native', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'AWS', 'Expo', 'TypeScript'].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded font-mono text-zinc-500"
                          style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)'}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADA — secondary */}
        <div className="rounded-2xl overflow-hidden"
             style={{border:'1px solid rgba(255,255,255,0.07)', background:'#111111'}}>
          <div className="grid md:grid-cols-3 gap-0">
            {/* Preview */}
            <div className="p-5 border-b md:border-b-0 md:border-r"
                 style={{borderColor:'rgba(255,255,255,0.06)', background:'#0d0d0d'}}>
              <ADAPreview />
            </div>
            {/* Info */}
            <div className="md:col-span-2 p-7 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                      style={{background:'rgba(250,205,18,0.08)', color:'#facd12', border:'1px solid rgba(250,205,18,0.2)'}}>
                  Digital Modernization
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">American Darters Association</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  A digital modernization initiative for a national darts organization, beginning with
                  native iOS and Android applications and expanding into backend, database, and web
                  platform modernization.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-4">
                  {[
                    'Native iOS application built with SwiftUI',
                    'Native Android application built with Kotlin',
                    'Membership and player experience modernization',
                    'Legacy data and database restructuring',
                    'Future web platform modernization',
                    'Foundation for stats, records, and league operations',
                  ].map(f => (
                    <div key={f} className="flex items-start gap-2 text-xs text-zinc-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-[2px] shrink-0">
                        <path d="M2 6.5L4.5 9L10 3" stroke="#facd12" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-600 mt-4 leading-relaxed">
                  Modernization is not just a redesign. It requires rebuilding real workflows across mobile apps,
                  data systems, and future web infrastructure without losing the operational history the organization depends on.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['SwiftUI', 'Kotlin', 'Node.js', 'PostgreSQL', 'REST APIs'].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded font-mono text-zinc-500"
                        style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)'}}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
