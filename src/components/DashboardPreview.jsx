export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-2xl blur-3xl scale-110 pointer-events-none"
           style={{background:'radial-gradient(ellipse, rgba(250,205,18,0.06) 0%, transparent 70%)'}} />

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl"
           style={{border:'1px solid rgba(255,255,255,0.08)', background:'#111111'}}>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b"
             style={{borderColor:'rgba(255,255,255,0.06)', background:'#0d0d0d'}}>
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full" style={{background:'rgba(255,95,87,0.6)'}} />
            <span className="w-2.5 h-2.5 rounded-full" style={{background:'rgba(255,189,46,0.6)'}} />
            <span className="w-2.5 h-2.5 rounded-full" style={{background:'rgba(39,201,63,0.6)'}} />
          </div>
          <div className="flex-1 mx-3">
            <div className="w-44 h-5 rounded-md mx-auto flex items-center justify-center gap-1.5"
                 style={{background:'rgba(255,255,255,0.05)'}}>
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <rect x="0.5" y="0.5" width="8" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)"/>
                <path d="M2.5 4.5h4M4.5 2.5v4" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" strokeLinecap="round"/>
              </svg>
              <span className="text-[10px] text-zinc-600 font-mono">miclocker.app/admin</span>
            </div>
          </div>
        </div>

        {/* App layout */}
        <div className="flex" style={{height:'370px'}}>

          {/* Sidebar */}
          <div className="w-40 flex flex-col shrink-0 border-r"
               style={{borderColor:'rgba(255,255,255,0.05)', background:'#0d0d0d'}}>
            {/* Brand */}
            <div className="px-3 pt-3 pb-2">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="w-5 h-5 rounded-md flex items-center justify-center"
                     style={{background:'rgba(250,205,18,0.15)'}}>
                  <span className="text-[9px] font-bold text-[#facd12]">ML</span>
                </div>
                <span className="text-[11px] font-semibold text-white">MicLocker</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest px-4 pb-1">Platform</div>
            {[
              { label: 'Overview', active: true },
              { label: 'Listings', active: false },
              { label: 'Bookings', active: false },
              { label: 'Users', active: false },
              { label: 'Payouts', active: false },
              { label: 'Messages', active: false },
            ].map(item => (
              <div key={item.label}
                   className="mx-2 flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] mb-0.5"
                   style={{
                     background: item.active ? 'rgba(250,205,18,0.08)' : 'transparent',
                     color: item.active ? '#facd12' : '#71717a',
                   }}>
                <span className="w-1 h-1 rounded-full shrink-0"
                      style={{background: item.active ? '#facd12' : 'rgba(255,255,255,0.15)'}} />
                {item.label}
              </div>
            ))}
            <div className="mt-auto border-t px-3 py-3" style={{borderColor:'rgba(255,255,255,0.05)'}}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-[#facd12]"
                     style={{background:'rgba(250,205,18,0.15)'}}>A</div>
                <span className="text-[10px] text-zinc-500">admin@mic...</span>
              </div>
            </div>
          </div>

          {/* Main panel */}
          <div className="flex-1 flex flex-col gap-3 p-4 overflow-hidden">

            {/* Page title */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">Platform Overview</div>
                <div className="text-[9px] text-zinc-600 mt-0.5">MicLocker Admin · v2.4.1</div>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md"
                   style={{background:'rgba(39,201,63,0.08)', border:'1px solid rgba(39,201,63,0.2)'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] text-emerald-400 font-medium">Healthy</span>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Active Listings', value: '—', sub: 'gear available now' },
                { label: 'Open Bookings', value: '—', sub: 'in progress' },
                { label: 'Pending Payouts', value: '—', sub: 'queued to owners' },
              ].map(k => (
                <div key={k.label} className="rounded-lg p-2.5"
                     style={{border:'1px solid rgba(255,255,255,0.06)', background:'#161616'}}>
                  <div className="text-[9px] text-zinc-500 mb-1">{k.label}</div>
                  <div className="text-sm font-semibold text-zinc-400">—</div>
                  <div className="text-[9px] text-zinc-600 mt-0.5">{k.sub}</div>
                </div>
              ))}
            </div>

            {/* Booking feed */}
            <div className="flex-1 rounded-lg overflow-hidden"
                 style={{border:'1px solid rgba(255,255,255,0.06)', background:'#161616'}}>
              <div className="flex items-center justify-between px-3 py-2 border-b"
                   style={{borderColor:'rgba(255,255,255,0.05)'}}>
                <span className="text-[10px] text-zinc-400 font-medium">Recent Bookings</span>
                <span className="text-[9px] text-zinc-600">Stripe Connect · PayPal</span>
              </div>
              <div className="flex flex-col">
                {[
                  { gear: 'SM7B Bundle', renter: 'marcus_a', status: 'Active', statusColor: 'text-emerald-400', bg: 'rgba(39,201,63,0.06)' },
                  { gear: 'Apollo Twin X', renter: 'studio_j', status: 'Pending', statusColor: 'text-[#facd12]', bg: 'transparent' },
                  { gear: 'Rode NT1 Kit', renter: 'freelanc_', status: 'Completed', statusColor: 'text-zinc-500', bg: 'transparent' },
                  { gear: 'Focusrite 2i2', renter: 'kevin_b', status: 'Active', statusColor: 'text-emerald-400', bg: 'rgba(39,201,63,0.04)' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 text-[10px] border-b"
                       style={{borderColor:'rgba(255,255,255,0.04)', background:row.bg}}>
                    <div className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                         style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)'}}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <rect x="3.5" y="0.5" width="2" height="5" rx="1" stroke="#facd12" strokeWidth="0.7"/>
                        <path d="M1.5 4.5a3 3 0 006 0" stroke="#facd12" strokeWidth="0.7" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-zinc-300 flex-1 truncate">{row.gear}</span>
                    <span className="text-zinc-600 font-mono w-16 truncate">{row.renter}</span>
                    <span className={`font-medium ${row.statusColor} w-14 text-right`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: role badges */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-zinc-600">User roles:</span>
              {['Owner', 'Renter', 'Admin'].map(r => (
                <span key={r} className="text-[9px] px-2 py-0.5 rounded-full text-zinc-500"
                      style={{border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.03)'}}>
                  {r}
                </span>
              ))}
              <span className="ml-auto text-[9px] text-zinc-700 font-mono">PostgreSQL · Redis · Expo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating status badge */}
      <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl shadow-2xl"
           style={{background:'#161616', border:'1px solid rgba(250,205,18,0.25)'}}>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"/>
        <span className="text-[11px] text-zinc-300 font-medium whitespace-nowrap">Stripe Connect active</span>
      </div>
    </div>
  )
}
