const traits = [
  'Built for teams that can\'t afford to rebuild',
  'Architecture before any code is written',
  'Production-grade from day one',
  'You own all code and infrastructure',
  'Senior engineers on every engagement',
  'No offshore handoffs — ever',
  'Scalable from day one, not day one hundred',
  'Real deadlines. Real accountability.',
  'We\'ve shipped what you\'re trying to build',
  'Clean code your next engineer won\'t hate',
  'Full-stack teams, not freelance patchwork',
  'We stay until it works in production',
]

function TickerRow() {
  const items = [...traits, ...traits]
  return (
    <div className="flex items-center gap-10 ticker-track">
      {items.map((trait, i) => (
        <div key={i} className="flex items-center gap-10 shrink-0">
          <span className="text-[11px] text-zinc-500 whitespace-nowrap tracking-wide">{trait}</span>
          <span className="w-1 h-1 rounded-full bg-[#facd12]/40 shrink-0" />
        </div>
      ))}
    </div>
  )
}

export default function TrustBar() {
  return (
    <div className="border-y" style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#0a0a0a' }}>
      <div className="flex items-center py-3.5">
        {/* Fixed label */}
        <div className="flex items-center gap-2.5 px-6 shrink-0 border-r" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
          <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest whitespace-nowrap pr-2">
            How we work
          </span>
        </div>

        {/* Ticker */}
        <div className="flex-1 overflow-hidden">
          <TickerRow />
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
          width: max-content;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
