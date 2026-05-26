import {
  AboutClosingSection,
  AboutEcosystemSection,
  AboutLeadershipSection,
  AboutPageHero,
  AboutSecuritySection,
  AboutVisionSection,
  AboutWhyChooseSection,
} from '../components/about/AboutPageSections'

export default function AboutPage() {
  return (
    <main id="about">
      <AboutPageHero />
      <AboutSecuritySection />
      <AboutVisionSection />
      <AboutLeadershipSection />
      <AboutEcosystemSection />
      <AboutWhyChooseSection />
      <AboutClosingSection />
    </main>
  )
}
