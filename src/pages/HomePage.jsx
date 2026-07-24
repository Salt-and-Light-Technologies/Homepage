import AuroraBackground from '../components/redesign/AuroraBackground'
import FloatingNav from '../components/redesign/FloatingNav'
import RedesignHero from '../components/redesign/RedesignHero'
import ServicesGrid from '../components/redesign/ServicesGrid'
import ContactCTA from '../components/redesign/ContactCTA'
import SiteFooter from '../components/redesign/SiteFooter'

export default function HomePage() {
  return (
    <div
      id="home-top"
      style={{
        position: 'relative',
        background: '#080808',
        color: '#fff',
        overflowX: 'hidden',
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <AuroraBackground variant="home" />
      <FloatingNav page="home" />
      <RedesignHero />
      <ServicesGrid />
      <ContactCTA id="contact" heading="Tell us what you're making." subheading="No pitch deck needed — a real person answers, and you'll get a straight answer back." />
      <SiteFooter />
    </div>
  )
}
