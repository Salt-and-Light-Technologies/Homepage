import { Link } from 'react-router-dom'

/**
 * Simple footer used on the redesigned Home/Work pages:
 * copyright left, "Blog · Privacy · Terms" right.
 */
export default function SiteFooter() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 text-center sm:text-left"
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: 'clamp(20px, 5vw, 28px) clamp(16px, 5vw, 48px)',
        fontSize: 13,
        color: 'rgba(255,255,255,0.4)',
      }} /* layout (display/direction/justify) fully driven by the className above, not inline styles */
    >
      <span>© 2026 Salt and Light Technologies</span>
      <span className="flex items-center gap-1.5">
        <Link to="/blog" className="hover:text-[#facd12] transition-colors duration-150">Blog</Link>
        <span>·</span>
        <Link to="/privacy" className="hover:text-[#facd12] transition-colors duration-150">Privacy</Link>
        <span>·</span>
        <Link to="/terms" className="hover:text-[#facd12] transition-colors duration-150">Terms</Link>
      </span>
    </div>
  )
}
