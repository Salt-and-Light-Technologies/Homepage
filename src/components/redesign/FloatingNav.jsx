import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Floating pill-shaped glass nav bar, shared by the redesigned Home and Work
 * pages. `page` controls link targets/active state per the design spec:
 *  - On Home: Work -> route to /work; Services/Contact -> in-page anchors;
 *    Say hello -> #contact anchor.
 *  - On Work: Work link highlighted gold; Services/Contact -> route to
 *    Home + anchor; Say hello -> mailto link.
 *
 * The design reference is desktop-only, so below `md` the center links +
 * "Say hello" collapse behind a hamburger toggle that opens a glass dropdown
 * (same visual language, just stacked) rather than overflowing the pill.
 */
export default function FloatingNav({ page = 'home' }) {
  const isWork = page === 'work'
  const [menuOpen, setMenuOpen] = useState(false)

  const servicesHref = isWork ? '/#services' : '#services'
  const contactHref = isWork ? '/#contact' : '#contact'
  const sayHelloHref = isWork ? 'mailto:info@saltandlighttechnologies.com' : '#contact'

  const linkBaseStyle = { color: 'rgba(255,255,255,0.65)' }
  const closeMenu = () => setMenuOpen(false)

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="px-4 sm:px-8 md:px-12 pt-4 sm:pt-5 md:pt-6">
      <div className="sticky top-4 z-50" style={{ width: '100%', maxWidth: 1080 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
            width: '100%',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
          className="py-2.5 pl-4 pr-2.5 md:py-3 md:pl-[22px] md:pr-3.5"
        >
          <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src="/CompanyLogoFlatYellowClear.png"
              alt="Salt and Light Technologies"
              style={{ height: 26, width: 'auto' }}
              className="md:!h-[30px]"
            />
          </Link>

          {/* Desktop links + CTA */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/work"
              className="transition-colors duration-150 hover:!text-[#facd12]"
              style={isWork ? { color: '#facd12' } : linkBaseStyle}
            >
              Work
            </Link>
            <a href={servicesHref} className="transition-colors duration-150 hover:!text-[#facd12]" style={linkBaseStyle}>
              Services
            </a>
            <a href={contactHref} className="transition-colors duration-150 hover:!text-[#facd12]" style={linkBaseStyle}>
              Contact
            </a>
          </div>
          <a
            href={sayHelloHref}
            className="hidden md:inline-flex hover:brightness-110 transition-[filter] duration-150"
            style={{
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

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              marginTop: 10,
              borderRadius: 24,
              background: 'rgba(10,10,10,0.85)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Link
              to="/work"
              onClick={closeMenu}
              className="hover:!text-[#facd12] transition-colors duration-150"
              style={{ padding: '10px 4px', fontSize: 15, ...(isWork ? { color: '#facd12' } : linkBaseStyle) }}
            >
              Work
            </Link>
            <a
              href={servicesHref}
              onClick={closeMenu}
              className="hover:!text-[#facd12] transition-colors duration-150"
              style={{ padding: '10px 4px', fontSize: 15, ...linkBaseStyle }}
            >
              Services
            </a>
            <a
              href={contactHref}
              onClick={closeMenu}
              className="hover:!text-[#facd12] transition-colors duration-150"
              style={{ padding: '10px 4px', fontSize: 15, ...linkBaseStyle }}
            >
              Contact
            </a>
            <a
              href={sayHelloHref}
              onClick={closeMenu}
              className="hover:brightness-110 transition-[filter] duration-150"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
                padding: '13px 22px',
                borderRadius: 999,
                background: '#facd12',
                color: '#0a0a0a',
                fontWeight: 600,
                fontSize: 15,
                boxShadow: '0 0 28px rgba(250,205,18,0.35)',
              }}
            >
              Say hello
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
