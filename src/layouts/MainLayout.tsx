import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import ScrollToTop from '../components/ScrollToTop'

export type LayoutOutletContext = {
  openContact: () => void
}

export default function MainLayout() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <ScrollToTop />
      <Header onOpenContact={openContact} />
      <Outlet context={{ openContact } satisfies LayoutOutletContext} />
      <Footer onOpenContact={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  )
}
