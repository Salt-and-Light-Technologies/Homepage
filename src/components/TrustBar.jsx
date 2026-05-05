export default function TrustBar() {
  const traits = [
    'Built for teams that can\'t afford to rebuild',
    'Architecture before any code is written',
    'Production-grade from day one',
    'You own all code and infrastructure',
    'Senior engineers on every engagement',
  ]

  return (
    <div className="border-y overflow-hidden" style={{borderColor:'rgba(255,255,255,0.05)', background:'#0a0a0a'}}>
      <div className="flex items-center py-3.5 px-6">
        <div className="flex items-center gap-2.5 mr-8 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
          <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
            How we work
          </span>
        </div>
        <div className="flex items-center gap-8 overflow-x-auto">
          {traits.map((trait, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              {i > 0 && <span className="w-px h-3 bg-white/8" />}
              <span className="text-[11px] text-zinc-500 whitespace-nowrap">{trait}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
