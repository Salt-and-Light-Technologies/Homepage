import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Case Study', href: '#case-study' },
]

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleAnchor(e, hash) {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + hash)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-[#0B0B0B]/90 backdrop-blur-md"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/CompanyLogoFlatYellowClear.png"
              alt="Salt and Light Technologies"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleAnchor(e, item.href)}
                className="text-sm text-zinc-500 hover:text-white transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#facd12] text-[#0B0B0B] hover:brightness-110 transition-all duration-150"
          >
            Start a Project
          </Link>

          {/* Mobile hamburger / close button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-150"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? (
              /* X icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16"/>
                <line x1="16" y1="4" x2="4" y2="16"/>
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <rect y="3.5" width="20" height="1.5" rx="0.75"/>
                <rect y="9.25" width="20" height="1.5" rx="0.75"/>
                <rect y="15" width="20" height="1.5" rx="0.75"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className="fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-200"
        style={{
          background: '#0d0d0d',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV_LINKS.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={e => handleAnchor(e, item.href)}
              className="text-base text-zinc-300 hover:text-white py-3 border-b transition-colors duration-150"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <div className="pt-5">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0B0B0B] bg-[#facd12] hover:brightness-110 transition-all duration-150"
            >
              Start a Project
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Contact info */}
          <div className="pt-4 flex flex-col gap-1.5">
            <a href="mailto:info@saltandlighttechnologies.com"
               className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150">
              info@saltandlighttechnologies.com
            </a>
            <a href="tel:+13146900719"
               className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150">
              (314) 690-0719
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
