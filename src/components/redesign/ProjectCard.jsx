import Reveal from './Reveal'

export default function ProjectCard({ project }) {
  const { name, kind, year, status, image, tagline, description, url, stack, moreScreens } = project

  return (
    <Reveal
      style={{
        borderRadius: 28,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        overflow: 'hidden',
        boxShadow: '0 24px 70px rgba(0,0,0,0.45)',
      }}
    >
      <div style={{ padding: '32px 36px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, color: '#fff' }}>
            {name}
          </h2>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{kind} · {year}</span>
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            padding: '6px 14px',
            borderRadius: 999,
            background: 'rgba(250,205,18,0.12)',
            color: '#facd12',
            border: '1px solid rgba(250,205,18,0.3)',
          }}
        >
          {status}
        </span>
      </div>

      <div style={{ padding: '0 36px' }}>
        <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', aspectRatio: '16/9' }}>
          <img src={image} alt={`${name} screenshot`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]" style={{ padding: '28px 36px 36px', gap: 32, alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#fff', margin: 0 }}>{tagline}</p>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '12px 0 0', maxWidth: '60ch' }}>
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:!text-[#fde68a]"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontSize: 14, fontWeight: 600, color: '#facd12' }}
          >
            Visit {name}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M3.5 9.5L9.5 3.5M5 3.5H9.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>
            Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {stack.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  padding: '6px 12px',
                  borderRadius: 8,
                  fontFamily: 'ui-monospace, monospace',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {moreScreens && moreScreens.length > 0 && (
        <div style={{ padding: '0 36px 36px' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            More screens
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: 16 }}>
            {moreScreens.map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/10' }}>
                <img src={src} alt={`${name} screen ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Reveal>
  )
}
