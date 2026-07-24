import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Global navigation scroll behavior per the design handoff spec:
 * - Navigating to a route always lands at the top by default.
 * - Unless the URL has a hash, in which case scroll to that element
 *   (handles cross-page anchor links like Work -> "/#contact").
 */
export default function ScrollManager() {
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)

  useEffect(() => {
    const pathChanged = prevPathRef.current !== location.pathname
    prevPathRef.current = location.pathname

    if (!location.hash) {
      if (pathChanged) window.scrollTo(0, 0)
      return
    }

    const id = location.hash.slice(1)
    // Wait a tick for the target route's content to mount.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: pathChanged ? 'auto' : 'smooth' })
    })
    return () => cancelAnimationFrame(raf)
  }, [location.pathname, location.hash])

  return null
}
