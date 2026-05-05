const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'We break down the problem before writing code. Scope, constraints, existing systems, and risks — fully mapped before anything starts.',
    detail: 'Discovery & scoping',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We design the system before building it. Data models, APIs, services, and infrastructure decisions documented and reviewed.',
    detail: 'Written RFC + review',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We deliver working software continuously. Not demos. Not slides. Real product — visible every step of the way.',
    detail: 'Continuous delivery',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'We ship production-ready systems. Infrastructure, monitoring, and deployment pipelines included — not bolted on later.',
    detail: 'Production handoff',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 border-b" style={{borderColor:'rgba(255,255,255,0.06)'}}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]"/>
            <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">How We Build</span>
          </div>
          <h2 className="text-4xl font-bold text-white leading-tight">
            Predictable process.{' '}
            <span className="text-zinc-400">No black boxes.</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-base leading-relaxed">
            Every step produces something real. You see progress as it happens.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-px pointer-events-none"
               style={{background:'linear-gradient(90deg, rgba(250,205,18,0.25), rgba(250,205,18,0.08) 60%, transparent)'}}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-5">
                {/* Number tile — consistent styling across all steps */}
                <div className="w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0"
                     style={{
                       borderColor: 'rgba(255,255,255,0.08)',
                       background: '#161616',
                     }}>
                  <span className="font-mono text-base font-bold text-zinc-500">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-white tracking-tight">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-[1.7]">{step.description}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1 h-1 rounded-full bg-[#facd12]/50"/>
                    <span className="text-[11px] text-zinc-600 font-medium">{step.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
