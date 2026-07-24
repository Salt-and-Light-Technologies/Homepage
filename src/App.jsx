import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import TermsPage from './components/TermsPage'
import PrivacyPage from './components/PrivacyPage'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'
import AdminPage from './components/admin/AdminPage'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ScrollManager from './components/redesign/ScrollManager'

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
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactLayout />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
