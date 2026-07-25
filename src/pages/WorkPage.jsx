import AuroraBackground from '../components/redesign/AuroraBackground'
import FloatingNav from '../components/redesign/FloatingNav'
import Reveal from '../components/redesign/Reveal'
import ProjectCard from '../components/redesign/ProjectCard'
import ContactCTA from '../components/redesign/ContactCTA'
import SiteFooter from '../components/redesign/SiteFooter'
import { projects } from '../data/projects'

export default function WorkPage() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: '#080808',
        color: '#fff',
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <AuroraBackground variant="work" />
      <FloatingNav page="work" />

      <div style={{ position: 'relative', padding: 'clamp(56px, 12vw, 88px) clamp(16px, 5vw, 48px) clamp(40px, 8vw, 56px)', maxWidth: 1120, margin: '0 auto' }}>
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
            marginBottom: 24,
          }}
        >
          <span style={{ width: 7, height: 7, flexShrink: 0, borderRadius: '50%', background: '#facd12', boxShadow: '0 0 10px rgba(250,205,18,0.8)' }} />
          <span style={{ fontSize: 'clamp(12px, 3vw, 13px)', color: 'rgba(255,255,255,0.85)' }}>Real products, running in production</span>
        </Reveal>

        <Reveal
          as="h1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.25rem, 8vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            margin: 0,
            maxWidth: '18ch',
          }}
        >
          Our work.
        </Reveal>

        <Reveal
          as="p"
          style={{ fontSize: 'clamp(15px, 3vw, 17px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: '56ch', margin: '20px 0 0' }}
        >
          We don't just build for clients — we build and run our own products. It's how we
          stay honest about what good software actually takes.
        </Reveal>
      </div>

      <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '0 clamp(16px, 5vw, 48px) 96px', display: 'flex', flexDirection: 'column', gap: 64 }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <ContactCTA heading="Want something like this built for you?" headingSize={40} bottomPadding={96} />

      <SiteFooter />
    </div>
  )
}
