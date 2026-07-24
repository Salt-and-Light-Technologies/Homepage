import { Link } from 'react-router-dom'

/**
 * Floating pill-shaped glass nav bar, shared by the redesigned Home and Work
 * pages. `page` controls link targets/active state per the design spec:
 *  - On Home: Work -> route to /work; Services/Contact -> in-page anchors;
 *    Say hello -> #contact anchor.
 *  - On Work: Work link highlighted gold; Services/Contact -> route to
 *    Home + anchor; Say hello -> mailto link.
 */
export default function FloatingNav({ page = 'home' }) {
  const isWork = page === 'work'

  const servicesHref = isWork ? '/#services' : '#services'
  const contactHref = isWork ? '/#contact' : '#contact'
  const sayHelloHref = isWork ? 'mailto:info@saltandlighttechnologies.com' : '#contact'

  const linkBaseStyle = { color: 'rgba(255,255,255,0.65)' }

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: '24px 48px 0' }}>
      <div
        className="sticky top-4 z-50"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
          width: '100%',
          maxWidth: 1080,
          padding: '12px 14px 12px 22px',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/CompanyLogoFlatYellowClear.png"
            alt="Salt and Light Technologies"
            style={{ height: 30, width: 'auto' }}
          />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32, fontSize: 14 }}>
          <Link
            to="/work"
            className="transition-colors duration-150 hover:!text-[#facd12]"
            style={isWork ? { color: '#facd12' } : linkBaseStyle}
          >
            Work
          </Link>
          <a
            href={servicesHref}
            className="transition-colors duration-150 hover:!text-[#facd12]"
            style={linkBaseStyle}
          >
            Services
          </a>
          <a
            href={contactHref}
            className="transition-colors duration-150 hover:!text-[#facd12]"
            style={linkBaseStyle}
          >
            Contact
          </a>
        </div>

        <a
          href={sayHelloHref}
          className="hover:brightness-110 transition-[filter] duration-150"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 22px',
            borderRadius: 999,
            background: '#facd12',
            color: '#0a0a0a',
            fontWeight: 600,
            fontSize: 14,
            boxShadow: '0 0 28px rgba(250,205,18,0.35)',
          }}
        >
          Say hello
        </a>
      </div>
    </div>
  )
}
