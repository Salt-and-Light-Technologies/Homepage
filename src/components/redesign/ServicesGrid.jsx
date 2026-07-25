import Reveal from './Reveal'

const SERVICES = [
  { num: '01', title: 'Websites & web apps', short: 'From simple sites to full platforms.' },
  { num: '02', title: 'Mobile apps', short: 'iOS and Android, done properly.' },
  { num: '03', title: 'The behind-the-scenes', short: 'Databases, dashboards, plumbing.' },
  { num: '04', title: 'A straight answer', short: 'Honest advice before any code.' },
]

export default function ServicesGrid() {
  return (
    <div
      id="services"
      style={{
        position: 'relative',
        padding: '8px clamp(16px, 5vw, 48px) clamp(48px, 10vw, 80px)',
        maxWidth: 1120,
        margin: '0 auto',
        scrollMarginTop: 100,
      }}
    >
      <Reveal
        as="h2"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.5rem, 5vw, 2.125rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          margin: '0 0 28px',
          color: '#fff',
        }}
      >
        What we can make for you
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
        {SERVICES.map((s) => (
          <Reveal
            key={s.num}
            className="group hover:!border-[#facd12]/30 hover:!bg-[#facd12]/[0.05]"
            style={{
              padding: '26px 24px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.035)',
              border: '1px solid rgba(255,255,255,0.09)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              transitionProperty: 'border-color, background-color, opacity, transform',
              transitionDuration: '.25s, .25s, .7s, .7s',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: 'rgba(250,205,18,0.12)',
                border: '1px solid rgba(250,205,18,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#facd12' }}>
                {s.num}
              </span>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 8px', color: '#fff' }}>{s.title}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.short}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
