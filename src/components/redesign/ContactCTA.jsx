import Reveal from './Reveal'

/**
 * Large centered glass CTA panel used at the bottom of both Home (#contact)
 * and Work. Home vs Work differ only in heading copy / subheading presence.
 */
export default function ContactCTA({
  id,
  heading,
  subheading,
  headingSize = 44,
  bottomPadding = 72,
}) {
  return (
    <div
      id={id}
      style={{
        position: 'relative',
        padding: `0 48px ${bottomPadding}px`,
        maxWidth: 1120,
        margin: '0 auto',
        scrollMarginTop: 100,
      }}
    >
      <Reveal
        style={{
          position: 'relative',
          borderRadius: 28,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(250,205,18,0.2)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          overflow: 'hidden',
          padding: '64px 56px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            left: '50%',
            marginLeft: -260,
            width: 520,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(250,205,18,0.16) 0%, transparent 65%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />
        <h2
          style={{
            position: 'relative',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: headingSize,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: 0,
            color: '#fff',
            textWrap: 'balance',
          }}
        >
          {heading}
        </h2>
        {subheading && (
          <p
            style={{
              position: 'relative',
              fontSize: 16,
              color: 'rgba(255,255,255,0.6)',
              margin: '16px 0 0',
            }}
          >
            {subheading}
          </p>
        )}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 14, marginTop: 32 }}>
          <a
            href="mailto:info@saltandlighttechnologies.com"
            className="hover:brightness-110 transition-[filter] duration-150"
            style={{
              display: 'inline-flex',
              padding: '15px 30px',
              borderRadius: 999,
              background: '#facd12',
              color: '#0a0a0a',
              fontWeight: 600,
              fontSize: 15,
              boxShadow: '0 0 40px rgba(250,205,18,0.3)',
            }}
          >
            info@saltandlighttechnologies.com
          </a>
          <a
            href="tel:+13145291650"
            className="hover:!bg-white/[0.12] transition-colors duration-150"
            style={{
              display: 'inline-flex',
              padding: '15px 30px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            (314) 529-1650
          </a>
        </div>
      </Reveal>
    </div>
  )
}
