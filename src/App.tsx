import { useState, useEffect } from 'react'
import heroBg from './assets/hero_bg.png'
import impactVideo from './assets/impact_video.png'
import exploreAfrica from './assets/explore_africa.png'
import exploreBanking from './assets/explore_banking.png'
import exploreDeveloper from './assets/explore_developer.png'
import journeyAtm from './assets/journey_atm.png'
import journeyEnergy from './assets/journey_energy.png'
import journeyTransit from './assets/journey_transit.png'
import journeyAgriculture from './assets/journey_agriculture.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [regionOpen, setRegionOpen] = useState(false)
  const [activeRegion, setActiveRegion] = useState('Nigeria')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: '',
  })

  const faqs = [
    {
      question: 'What services does SafeTransact provide?',
      answer:
        'We provide payment infrastructure, transaction switching, card schemes, merchant solutions, and developer APIs that help businesses accept and process digital payments securely across Africa.',
    },
    {
      question: 'Which countries do you operate in?',
      answer:
        'We operate across multiple African markets including Nigeria, Kenya, and Uganda, with regional support teams and localized payment capabilities for each market.',
    },
    {
      question: 'How do I integrate SafeTransact APIs?',
      answer:
        'Developers can sign up for our sandbox environment, review API documentation, generate test credentials, and integrate using REST endpoints and webhooks. Production access is granted after compliance and technical review.',
    },
    {
      question: 'Is SafeTransact PCI-DSS compliant?',
      answer:
        'Yes. Our platforms are built with industry-standard security controls, encryption, and compliance frameworks to protect cardholder data and transaction integrity.',
    },
    {
      question: 'How long does merchant onboarding take?',
      answer:
        'Onboarding timelines vary by business type and documentation readiness. Most merchants complete KYC review and go live within a few business days after submitting required documents.',
    },
    {
      question: 'How can I get support?',
      answer:
        'You can reach our support team via the toll-free line (+234 1 628 3888), developer documentation portal, or by contacting us through the footer contact links.',
    },
  ]

  const openContactModal = () => {
    setIsContactOpen(true)
    setNavDropdown(null)
    setIsMenuOpen(false)
    setRegionOpen(false)
  }

  const closeContactModal = () => {
    setIsContactOpen(false)
    setContactSubmitted(false)
  }

  // Track scroll position for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      setNavDropdown(null)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isContactOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContactModal()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isContactOpen])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactForm.name.trim() && contactForm.email.includes('@') && contactForm.message.trim()) {
      setContactSubmitted(true)
      setTimeout(() => {
        setContactSubmitted(false)
        setContactForm({
          name: '',
          email: '',
          phone: '',
          topic: 'General Inquiry',
          message: '',
        })
        setIsContactOpen(false)
      }, 3000)
    }
  }

  const regions = [
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'United Kingdom', flag: '🇬🇧' }
  ]

  const [navDropdown, setNavDropdown] = useState<string | null>(null)

  const solutionsMenu = [
    {
      title: 'Payment Infrastructure',
      description: 'Secure processing and transaction routing across payment networks.',
      href: '#industries',
      iconBg: 'bg-amber-100',
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Financial Sector',
      description: 'Transforming bank operations, branches, and digital banking experiences.',
      href: '#industries',
      iconBg: 'bg-blue-100',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2-16h14" />
        </svg>
      ),
    },
  ]

  const resourcesMenu = [
    {
      title: 'FAQ',
      description: 'Answers about integrations, compliance, onboarding, and support.',
      href: '#faq',
      iconBg: 'bg-teal-100',
      icon: (
        <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'API Documentation',
      description: 'REST resources, SDKs, sandbox credentials, and webhook guides.',
      href: '#developer',
      iconBg: 'bg-violet-100',
      icon: (
        <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Help Center',
      description: 'Guides, status updates, and troubleshooting for merchants.',
      href: '#developer',
      iconBg: 'bg-emerald-100',
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Contact Us',
      description: 'Reach our teams across Lagos, Abuja, Nairobi, and London.',
      opensContact: true,
      iconBg: 'bg-rose-100',
      icon: (
        <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const navLinkClass = (isLight: boolean) =>
    `hover:text-brand-teal transition duration-200 ${isLight ? 'text-brand-blue' : 'text-white/95'}`

  const closeNavDropdown = () => setNavDropdown(null)

  const contactTopics = [
    'General Inquiry',
    'Merchant Onboarding',
    'API & Developer Support',
    'Partnerships',
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || navDropdown
            ? 'bg-white/95 backdrop-blur-md shadow-md py-4' 
            : 'bg-transparent text-white py-6'
        }`}
        onMouseLeave={() => setNavDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none cursor-pointer">
            <svg viewBox="0 0 100 100" className="w-7 h-7 text-brand-teal fill-current transition-transform duration-300 hover:rotate-12">
              <path d="M10 20 L60 50 L10 80 L35 80 L85 50 L35 20 Z" />
            </svg>
            <span className={`font-display font-bold text-2xl tracking-tight ${isScrolled || navDropdown ? 'text-brand-blue' : 'text-white'}`}>
              safetransact<span className="text-brand-teal">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            {/* Solutions mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setNavDropdown('solutions')}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navLinkClass(!!(isScrolled || navDropdown))} ${navDropdown === 'solutions' ? 'text-brand-teal' : ''}`}
              >
                Solutions
                <svg className={`w-3.5 h-3.5 transition-transform ${navDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <a href="#developer" className={navLinkClass(!!(isScrolled || navDropdown))}>Products</a>
            <a href="#about" className={navLinkClass(!!(isScrolled || navDropdown))}>Company</a>
            <a href="#explore" className={navLinkClass(!!(isScrolled || navDropdown))}>Insights</a>

            {/* Resources mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setNavDropdown('resources')}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navLinkClass(!!(isScrolled || navDropdown))} ${navDropdown === 'resources' ? 'text-brand-teal' : ''}`}
              >
                Resources
                <svg className={`w-3.5 h-3.5 transition-transform ${navDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Icon */}
            <button className={`p-2 rounded-full hover:bg-slate-100/10 transition ${isScrolled || navDropdown ? 'text-brand-blue' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={openContactModal}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isScrolled || navDropdown
                  ? 'bg-brand-teal text-white hover:bg-brand-teal/90'
                  : 'bg-white text-brand-blue hover:bg-slate-100'
              }`}
            >
              Contact
            </button>

            {/* Developer Console Button */}
            <a 
              href="#developer" 
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                isScrolled || navDropdown
                  ? 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-brand-blue'
              }`}
            >
              Developer Console
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100/10 transition focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className={`w-6 h-6 ${isScrolled || navDropdown ? 'text-brand-blue' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={`w-6 h-6 ${isScrolled || navDropdown ? 'text-brand-blue' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop mega menu panel */}
        {navDropdown && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full pt-3 px-6 pb-6 z-10"
            onMouseEnter={() => setNavDropdown(navDropdown)}
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(10,37,64,0.25)] border border-slate-100 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[5rem]">
                {(navDropdown === 'solutions' ? solutionsMenu : resourcesMenu).map((item) => {
                  const itemClass = 'group flex gap-4 rounded-xl p-3 -m-3 hover:bg-slate-50 transition duration-200 w-full text-left'
                  const itemContent = (
                    <>
                      <div className={`shrink-0 w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h4 className="font-bold text-brand-blue text-sm group-hover:text-brand-teal transition">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )
                  return 'opensContact' in item && item.opensContact ? (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => {
                        openContactModal()
                        closeNavDropdown()
                      }}
                      className={itemClass}
                    >
                      {itemContent}
                    </button>
                  ) : (
                    <a
                      key={item.title}
                      href={'href' in item ? item.href : '#'}
                      onClick={closeNavDropdown}
                      className={itemClass}
                    >
                      {itemContent}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[68px] bg-brand-dark/95 backdrop-blur-md z-40 flex flex-col p-8 text-white space-y-6">
            <nav className="flex flex-col gap-4 text-lg font-semibold">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-teal font-bold">Solutions</span>
                {solutionsMenu.map((item) => (
                  <a key={item.title} href={item.href} onClick={() => setIsMenuOpen(false)} className="block pl-2 text-base font-medium hover:text-brand-teal transition">
                    {item.title}
                  </a>
                ))}
              </div>
              <a href="#developer" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-teal transition">Products</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-teal transition">Company</a>
              <a href="#explore" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-teal transition">Insights</a>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-teal font-bold">Resources</span>
                {resourcesMenu.map((item) =>
                  'opensContact' in item && item.opensContact ? (
                    <button
                      key={item.title}
                      type="button"
                      onClick={openContactModal}
                      className="block pl-2 text-base font-medium hover:text-brand-teal transition text-left"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <a
                      key={item.title}
                      href={'href' in item ? item.href : '#'}
                      onClick={() => setIsMenuOpen(false)}
                      className="block pl-2 text-base font-medium hover:text-brand-teal transition"
                    >
                      {item.title}
                    </a>
                  )
                )}
              </div>
            </nav>
            <div className="w-full h-px bg-white/10 my-4" />
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={openContactModal}
                className="w-full text-center py-3 rounded-full bg-brand-teal text-white font-medium uppercase tracking-wider hover:bg-brand-teal/90 transition"
              >
                Contact Us
              </button>
              <a 
                href="#developer" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-3 rounded-full border border-white font-medium uppercase tracking-wider hover:bg-white hover:text-brand-blue transition"
              >
                Developer Console
              </a>
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                <span className="text-sm font-medium">Select Region:</span>
                <div className="flex gap-2">
                  {regions.map(r => (
                    <button 
                      key={r.name}
                      onClick={() => {
                        setActiveRegion(r.name)
                        setIsMenuOpen(false)
                      }}
                      title={r.name}
                      className={`text-xl p-1.5 rounded-lg transition ${activeRegion === r.name ? 'bg-white/20' : 'opacity-60'}`}
                    >
                      {r.flag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mega menu backdrop (desktop) */}
      {navDropdown && (
        <div
          className="hidden lg:block fixed inset-0 top-20 z-40 bg-brand-blue/15 backdrop-blur-[3px]"
          onClick={closeNavDropdown}
          aria-hidden
        />
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-10000 hover:scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-teal">Building the Future</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              Building The Rails Of <br/>
              <span className="font-extrabold text-white">Africa's Digital</span> <br/>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-400">Future</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              SafeTransact provides secure, reliable, and scalable payment processing networks to power transactions, commerce, and digital growth across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#explore"
                className="mb-8 px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-full shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Turning Possibilities Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Turning Possibilities Into Everyday Impact
              </h2>
              <div className="w-16 h-1 bg-brand-teal rounded-full" />
              <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                We empower businesses and individuals across Africa with payment infrastructure, switching networks, and digital financial solutions that stimulate growth.
              </p>
              <p className="text-slate-500 leading-relaxed font-light text-sm">
                For over two decades, we have continuously innovated to connect merchants, banks, and users, building pathways to financial freedom and digital commerce opportunities.
              </p>
              <div className="pt-2">
                <a href="#explore" className="inline-flex items-center gap-2 font-semibold text-brand-teal hover:text-brand-teal/80 hover:underline transition duration-300 group">
                  <span>Learn more about our journey</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Video Mockup Column */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-slate-900 border border-slate-100">
                <img 
                  src={impactVideo} 
                  alt="Celebrating Success" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-brand-blue/20 transition-all duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-white/20 animate-ping" />
                    <div className="absolute w-14 h-14 rounded-full bg-white/30 animate-pulse-slow" />
                    
                    <div className="w-14 h-14 rounded-full bg-white text-brand-teal flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
              Shaping the Future
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
              Explore how SafeTransact is Shaping Africa's Future
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-lg cursor-pointer bg-brand-blue flex flex-col justify-end">
              <img 
                src={exploreAfrica} 
                alt="Reports & Insights" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent" />
              <div className="relative p-8 space-y-3 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Reports & Insights</span>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-brand-teal transition-colors duration-300">
                  Africa's digital payment prospects: Driving inclusion
                </h3>
                <div className="w-8 h-1 bg-brand-teal group-hover:w-16 transition-all duration-300" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-lg cursor-pointer bg-brand-blue flex flex-col justify-end">
              <img 
                src={exploreBanking} 
                alt="Press Release" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent" />
              <div className="relative p-8 space-y-3 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Press Release</span>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-brand-teal transition-colors duration-300">
                  SafeTransact receives Payment Service Bank License from CBN
                </h3>
                <div className="w-8 h-1 bg-brand-teal group-hover:w-16 transition-all duration-300" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-lg cursor-pointer bg-brand-blue flex flex-col justify-end">
              <img 
                src={exploreDeveloper} 
                alt="Innovation" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent" />
              <div className="relative p-8 space-y-3 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Developer Console</span>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-brand-teal transition-colors duration-300">
                  Developer Sandbox APIs: Build payment solutions
                </h3>
                <div className="w-8 h-1 bg-brand-teal group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Decades of Growth Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
                Two Decades Of Growth & Innovation
              </h2>
              <p className="text-slate-500 font-light text-base">
                From a pioneer in transaction switching to an integrated billing, scaling, and digital payment company.
              </p>
            </div>
            <a href="#about" className="mt-4 md:mt-0 px-6 py-3 bg-brand-blue hover:bg-brand-dark text-white font-medium rounded-full transition duration-300 text-center text-sm">
              Our Journey
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Journey Card 1 */}
            <div className="group space-y-4 cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[4/3] shadow-md bg-slate-100">
                <img 
                  src={journeyAtm} 
                  alt="Card Services" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-teal transition duration-300">Card Services</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">Secure card networks across West Africa.</p>
              </div>
            </div>

            {/* Journey Card 2 */}
            <div className="group space-y-4 cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[4/3] shadow-md bg-slate-100">
                <img 
                  src={journeyEnergy} 
                  alt="Clean Energy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-teal transition duration-300">Clean Energy</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">Integrated meters & smart collection grids.</p>
              </div>
            </div>

            {/* Journey Card 3 */}
            <div className="group space-y-4 cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[4/3] shadow-md bg-slate-100">
                <img 
                  src={journeyTransit} 
                  alt="Transit & Infrastructure" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-teal transition duration-300">Transit Systems</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">Contactless transit fare ticket platforms.</p>
              </div>
            </div>

            {/* Journey Card 4 */}
            <div className="group space-y-4 cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[4/3] shadow-md bg-slate-100">
                <img 
                  src={journeyAgriculture} 
                  alt="AgriTech Solutions" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-teal transition duration-300">AgriTech Solutions</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">Smart payment methods for micro-farmers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Industries Section */}
      <section id="industries" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
              Industry Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
              Transforming industries through innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutionsMenu.map((solution, index) => (
              <div
                key={solution.title}
                className={`group rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative ${
                  index === 0
                    ? 'bg-white border border-slate-100'
                    : 'bg-brand-blue border border-brand-blue'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    index === 0
                      ? 'bg-brand-teal/10 group-hover:bg-brand-teal/15'
                      : 'absolute top-6 right-6 w-11 h-11 bg-brand-teal/20 group-hover:bg-brand-teal/30 mb-0'
                  }`}
                >
                  {index === 0 ? (
                    <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2-16h14" />
                    </svg>
                  )}
                </div>

                <div className={index === 1 ? 'pr-14' : ''}>
                  <h3
                    className={`text-lg font-bold mb-3 leading-snug ${
                      index === 0 ? 'text-brand-blue' : 'text-white'
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className={`text-sm font-light leading-relaxed ${
                      index === 0 ? 'text-slate-500' : 'text-slate-300'
                    }`}
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer API Marketplace Section */}
      <section id="developer" className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-brand-blue to-brand-dark opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/20 px-4 py-1.5 rounded-full border border-brand-teal/35">
              Developer Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Build Faster, Smarter, and More Securely with Our API Marketplace
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: API Marketplace */}
            <div className="group bg-[#041629]/90 border border-slate-700/30 rounded-3xl p-8 sm:p-12 hover:border-brand-teal/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl group-hover:bg-brand-teal/15 transition-all duration-500" />
              
              <div className="space-y-6">
                {/* Brand Accent */}
                <div className="flex justify-between items-center">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 text-brand-teal fill-current">
                    <path d="M10 20 L60 50 L10 80 L35 80 L85 50 L35 20 Z" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Explore API docs</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">API Marketplace</h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Access dozens of production-ready payment APIs. Easily integrate web checkouts, direct billing, cards creation, collections, identity verification, and multi-currency transaction operations.
                  </p>
                </div>
              </div>

              {/* Graphical representation of API Node Grid */}
              <div className="my-6 border border-slate-800 bg-slate-900/50 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="text-brand-teal">checkout.js</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-yellow-500">200 OK</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="font-semibold text-sm group-hover:text-brand-teal transition duration-300">Browse API Registry</span>
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover:bg-brand-teal transition duration-300">
                  <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: API Documentation */}
            <div className="group bg-[#041629]/90 border border-slate-700/30 rounded-3xl p-8 sm:p-12 hover:border-brand-teal/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl group-hover:bg-brand-teal/15 transition-all duration-500" />
              
              <div className="space-y-6">
                {/* Brand Accent */}
                <div className="flex justify-between items-center">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 text-brand-teal fill-current">
                    <path d="M10 20 L60 50 L10 80 L35 80 L85 50 L35 20 Z" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Developer Sandbox</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">API Documentation</h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Accelerate integration with standard REST resources. Utilize software development kits (SDKs), sandbox testing dashboards, mock credentials, and fully documented webhooks payloads.
                  </p>
                </div>
              </div>

              {/* Code Console Mockup */}
              <div className="my-6 border border-slate-800 bg-[#020a12] rounded-2xl p-6 font-mono text-[11px] sm:text-xs text-slate-400 space-y-2">
                <div className="flex justify-between text-slate-600 border-b border-slate-800 pb-2 mb-2">
                  <span>POST /v1/transactions</span>
                  <span>curl</span>
                </div>
                <div className="text-brand-teal"><span className="text-slate-500">"amount":</span> 150000,</div>
                <div className="text-brand-teal"><span className="text-slate-500">"currency":</span> "NGN",</div>
                <div className="text-brand-teal"><span className="text-slate-500">"email":</span> "customer@safetransact.com"</div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="font-semibold text-sm group-hover:text-brand-teal transition duration-300">Read API Reference</span>
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover:bg-brand-teal transition duration-300">
                  <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-light text-sm sm:text-base max-w-xl mx-auto">
              Quick answers about our payment solutions, integrations, and support.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-brand-teal/40 bg-brand-light shadow-sm'
                      : 'border-slate-200 bg-white hover:border-brand-teal/25'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-brand-blue text-sm sm:text-base pr-2">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-brand-teal text-white rotate-180'
                          : 'bg-slate-100 text-brand-blue'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-sm text-slate-500 font-light mt-10">
            Still have questions?{' '}
            <button
              type="button"
              onClick={openContactModal}
              className="font-semibold text-brand-teal hover:underline"
            >
              Contact our team
            </button>
          </p>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl bg-brand-blue overflow-hidden shadow-2xl p-8 sm:p-16 text-center space-y-6">
            {/* Soft Purple/Teal Background meshes */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-teal/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Catch New Updates Instantly
              </h2>
              <p className="text-slate-300 font-light text-sm sm:text-base">
                Subscribe to our newsletter to receive the latest updates, announcements, and prospects regarding digital payments in Africa.
              </p>
            </div>

            {/* Newsletter input form */}
            <div className="relative z-10 max-w-md mx-auto">
              {subscribed ? (
                <div className="p-4 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs sm:text-sm font-semibold animate-pulse">
                  🎉 Subscribed successfully! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-full py-3.5 px-6 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 backdrop-blur-sm"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3.5 bg-white text-brand-blue font-bold text-sm rounded-full shadow-lg hover:bg-slate-100 hover:scale-102 transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#05111c] text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Logo & Social Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 select-none cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-brand-teal fill-current">
                <path d="M10 20 L60 50 L10 80 L35 80 L85 50 L35 20 Z" />
              </svg>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                safetransact<span className="text-brand-teal">.</span>
              </span>
            </div>
            <p className="text-sm font-light text-slate-400 leading-relaxed">
              We facilitate electronic transactions and build payment systems across Africa. Transforming businesses, powering dreams.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3c-3 0-4 1.4-4 3.5V8z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.2 2.4h3.3L14.3 11l8.5 11.3H16L11 15.8l-6 6.5H1.6l7.7-8.6L1 2.4h6.9l4.5 6 5.8-6z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5s-2.48-1.12-2.48-2.5S1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.02 23h4.96V8H.02v15zM23.98 23h-4.96v-7.75c0-1.85-.04-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.09V23H8.5V8h4.76v2.05h.07c.66-1.25 2.27-2.56 4.67-2.56 5 0 5.92 3.29 5.92 7.57V23z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <div className="pt-2 text-xs font-semibold text-slate-500">
              📞 Toll Free: +234 1 628 3888
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Features</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#explore" className="hover:text-white transition">Rotating group savings</a></li>
              <li><a href="#explore" className="hover:text-white transition">Thrift contributions</a></li>
              <li><a href="#explore" className="hover:text-white transition">Personal savings</a></li>
              <li><a href="#explore" className="hover:text-white transition">Investment clan</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li>
                <button type="button" onClick={openContactModal} className="hover:text-white transition text-left">
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of service</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Platforms</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#industries" className="hover:text-white transition">Become an Agent</a></li>
              <li><a href="#developer" className="hover:text-white transition">Developers</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-slate-500 gap-4">
          <span>© 2026 SafeTransact Limited. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Preferences</a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div
            className="absolute inset-0 bg-brand-blue/50 backdrop-blur-sm"
            onClick={closeContactModal}
          />

          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-white border-b border-slate-100 px-6 py-5 rounded-t-2xl">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-1">Get in touch</p>
                <h2 id="contact-modal-title" className="text-xl sm:text-2xl font-extrabold text-brand-blue">
                  Contact Us
                </h2>
                <p className="text-sm text-slate-500 font-light mt-1">
                  Our team typically responds within 1–2 business days.
                </p>
              </div>
              <button
                type="button"
                onClick={closeContactModal}
                className="shrink-0 w-9 h-9 rounded-full bg-slate-100 text-brand-blue flex items-center justify-center hover:bg-slate-200 transition"
                aria-label="Close contact form"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-5">
              {contactSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue">Message sent!</h3>
                  <p className="text-sm text-slate-500 font-light">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                        Full name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                        Phone <span className="text-slate-400 font-normal normal-case">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-topic" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                      Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={contactForm.topic}
                      onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-white"
                    >
                      {contactTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold text-sm rounded-full transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500">
                <span className="font-semibold">📞 Toll Free: +234 1 628 3888</span>
                <span className="font-light">Lagos · Abuja · Nairobi · London</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
