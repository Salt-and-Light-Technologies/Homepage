const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M6 8l2.5 2.5L12 7" stroke="#facd12" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Product Engineering',
    description: 'We build full systems — not partial deliverables. Database design, backend APIs, frontend apps, deployment, and production readiness. You get a working product, not a handoff document.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="5" y="2" width="10" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="10" cy="15" r="1" fill="#facd12"/>
        <path d="M7.5 6h5M7.5 9h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mobile Systems',
    description: 'iOS and Android apps built for real usage. Authentication, real-time data, offline handling, push notifications, and hardware integrations where needed.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 6v8l-8 4-8-4V6l8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M10 2v12M2 6l8 4 8-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="2" fill="#facd12" fillOpacity="0.8"/>
      </svg>
    ),
    title: 'Platform Architecture',
    description: 'We design systems that hold up under growth. APIs, data models, third-party integrations, and infrastructure decisions that don\'t collapse when usage increases.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 6v4l3 2" stroke="#facd12" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 5.5l1.5 1.5M13 5.5l-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Product Strategy',
    description: 'We define what gets built before development starts. Scope, sequencing, and technical risk — grounded in engineering reality, not guesses.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 border-b" style={{borderColor:'rgba(255,255,255,0.06)'}}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]"/>
              <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">Services</span>
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              What we design{' '}
              <span className="text-zinc-400">and build.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            From first architecture decision to deployed system — we own the outcome.
          </p>
        </div>

        {/* 2×2 grid — gap-px gives the "ruled panel" look */}
        <div className="grid sm:grid-cols-2 rounded-2xl overflow-hidden"
             style={{border:'1px solid rgba(255,255,255,0.07)', gap:'1px', background:'rgba(255,255,255,0.04)'}}>
          {services.map((service, i) => (
            <div key={i}
                 className="flex flex-col gap-5 p-8 hover:bg-white/[0.015] transition-colors duration-200"
                 style={{background:'#111111'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border text-zinc-300"
                   style={{borderColor:'rgba(255,255,255,0.08)', background:'rgba(255,255,255,0.03)'}}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-[1.7]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
