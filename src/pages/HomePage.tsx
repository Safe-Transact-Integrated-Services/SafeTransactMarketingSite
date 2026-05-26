import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import ExploreSection from '../components/ExploreSection'
import IndustriesSection from '../components/IndustriesSection'
import FAQSection from '../components/FAQSection'
import NewsletterSection from '../components/NewsletterSection'
import type { LayoutOutletContext } from '../layouts/MainLayout'

export default function HomePage() {
  const { openContact } = useOutletContext<LayoutOutletContext>()

  return (
    <>
      <Hero onOpenContact={openContact} />
      <ExploreSection />
      <IndustriesSection />
      <FAQSection onOpenContact={openContact} />
      <NewsletterSection />
    </>
  )
}
