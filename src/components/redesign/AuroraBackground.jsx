/**
 * Two large blurred radial-gradient "aurora" blobs, purely decorative,
 * pointer-events:none. Matches Home.dc.html / Work.dc.html exactly
 * (opacity differs slightly between the two pages per the design spec).
 */
export default function AuroraBackground({ variant = 'home' }) {
  const topOpacity = variant === 'home' ? 0.14 : 0.12
  const secondTop = variant === 'home' ? 120 : 300
  const secondOpacity = variant === 'home' ? 0.08 : 0.07

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: -180,
          left: -120,
          width: 640,
          height: 640,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(250,205,18,${topOpacity}) 0%, transparent 60%)`,
          filter: 'blur(40px)',
          animation: 'aurora-a 14s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: secondTop,
          right: -160,
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(250,205,18,${secondOpacity}) 0%, transparent 60%)`,
          filter: 'blur(50px)',
          animation: 'aurora-b 18s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
