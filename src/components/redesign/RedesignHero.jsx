import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function RedesignHero() {
  return (
    <div
      style={{
        position: 'relative',
        padding: 'clamp(64px, 14vw, 96px) clamp(20px, 6vw, 48px) clamp(48px, 10vw, 72px)',
        maxWidth: 1080,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Reveal
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 16px',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(250,205,18,0.25)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          marginBottom: 'clamp(20px, 4vw, 32px)',
          maxWidth: '100%',
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            flexShrink: 0,
            borderRadius: '50%',
            background: '#facd12',
            boxShadow: '0 0 10px rgba(250,205,18,0.8)',
          }}
        />
        <span style={{ fontSize: 'clamp(12px, 3vw, 13px)', color: 'rgba(255,255,255,0.85)' }}>
          We build websites, apps &amp; the products to prove it
        </span>
      </Reveal>

      <Reveal
        as="h1"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.5rem, 8vw + 0.5rem, 4.625rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          margin: 0,
          textWrap: 'balance',
        }}
      >
        Software that feels
        <span
          style={{
            display: 'block',
            background: 'linear-gradient(100deg, #facd12 20%, #fde68a 50%, #facd12 80%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          good to use.
        </span>
      </Reveal>

      <Reveal
        as="p"
        style={{
          fontSize: 'clamp(15px, 3vw, 18px)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '52ch',
          margin: 'clamp(20px, 5vw, 28px) auto 0',
        }}
      >
        We're a small team that designs and builds digital products for businesses
        that want it done right the first time — and we run our own, so we know what that takes.
      </Reveal>

      <Reveal
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center"
        style={{ gap: 14, marginTop: 'clamp(24px, 5vw, 36px)' }}
      >
        <Link
          to="/work"
          className="hover:brightness-110 transition-[filter] duration-150 justify-center sm:w-auto"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '15px 30px',
            borderRadius: 999,
            background: '#facd12',
            color: '#0a0a0a',
            fontWeight: 600,
            fontSize: 15,
            boxShadow: '0 0 40px rgba(250,205,18,0.3)',
          }}
        >
          See our work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <a
          href="#contact"
          className="hover:!bg-white/10 transition-colors duration-150 justify-center sm:w-auto"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '15px 30px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.14)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Tell us your idea
        </a>
      </Reveal>
    </div>
  )
}
