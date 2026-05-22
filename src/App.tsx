import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedPartners from './components/FeaturedPartners'
import AboutSection from './components/AboutSection'
import ExploreSection from './components/ExploreSection'
import JourneySection from './components/JourneySection'
import IndustriesSection from './components/IndustriesSection'
import DeveloperSection from './components/DeveloperSection'
import FAQSection from './components/FAQSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Header onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />
      <FeaturedPartners />
      <AboutSection />
      <ExploreSection />
      <JourneySection />
      <IndustriesSection />
      <DeveloperSection />
      <FAQSection onOpenContact={openContact} />
      <NewsletterSection />
      <Footer onOpenContact={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  )
}

export default App
