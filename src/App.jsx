import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Products from './components/Products'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudy from './components/CaseStudy'
import Positioning from './components/Positioning'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import TermsPage from './components/TermsPage'
import PrivacyPage from './components/PrivacyPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Services />
        <Process />
        <CaseStudy />
        <Positioning />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

function ContactLayout() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Nav />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactLayout />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
