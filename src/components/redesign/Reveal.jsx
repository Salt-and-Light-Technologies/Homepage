import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper matching the design handoff spec:
 * initial opacity:0, translateY(26px) -> opacity:1, translateY(0)
 * over 0.7s cubic-bezier(.2,.7,.3,1), triggered once at ~12% visibility.
 * Elements already in the viewport on mount reveal immediately (no FOUC).
 */
export default function Reveal({ as: Tag = 'div', className = '', style = {}, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(26px)',
        transition: 'opacity .7s cubic-bezier(.2,.7,.3,1), transform .7s cubic-bezier(.2,.7,.3,1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
