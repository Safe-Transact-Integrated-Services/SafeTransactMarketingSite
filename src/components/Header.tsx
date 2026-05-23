import { useState, useEffect } from 'react'
import { solutionsMenu, resourcesMenu } from '../data/navMenus'
import Icon from './Icons'

type HeaderProps = {
  onOpenContact: () => void
}


export default function Header({ onOpenContact }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [navDropdown, setNavDropdown] = useState<string | null>(null)

  const navLinkClass = (isLight: boolean) =>
    `hover:text-brand-teal transition duration-200 ${isLight ? 'text-brand-blue' : 'text-white/95'}`

  const closeNavDropdown = () => setNavDropdown(null)

  const openContactModal = () => {
    onOpenContact()
    setNavDropdown(null)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setNavDropdown(null)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock page scroll on mobile/tablet when menu is open; menu panel scrolls independently
  useEffect(() => {
    if (!isMenuOpen) return

    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    const syncBodyScroll = () => {
      if (desktopQuery.matches) {
        document.body.style.overflow = ''
        return
      }
      document.body.style.overflow = 'hidden'
    }

    syncBodyScroll()
    desktopQuery.addEventListener('change', syncBodyScroll)

    return () => {
      desktopQuery.removeEventListener('change', syncBodyScroll)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isLightNav = !!(isScrolled || navDropdown)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || navDropdown
            ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
            : 'bg-transparent text-white py-6'
        }`}
        onMouseLeave={() => setNavDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none cursor-pointer">
            <Icon name="logo" className="w-7 h-7 text-brand-teal transition-transform duration-300 hover:rotate-12" />
            <span className={`font-display font-bold text-2xl tracking-tight ${isLightNav ? 'text-brand-blue' : 'text-white'}`}>
              safetransact<span className="text-brand-teal">.</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            <div
              className="relative"
              onMouseEnter={() => setNavDropdown('solutions')}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navLinkClass(isLightNav)} ${navDropdown === 'solutions' ? 'text-brand-teal' : ''}`}
              >
                Solutions
                <Icon name="chevronDown" className={`w-3.5 h-3.5 transition-transform ${navDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <a href="#developer" className={navLinkClass(isLightNav)}>Products</a>
            <a href="#about" className={navLinkClass(isLightNav)}>Company</a>
            <a href="#explore" className={navLinkClass(isLightNav)}>Insights</a>

            <div
              className="relative"
              onMouseEnter={() => setNavDropdown('resources')}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navLinkClass(isLightNav)} ${navDropdown === 'resources' ? 'text-brand-teal' : ''}`}
              >
                Resources
                <Icon name="chevronDown" className={`w-3.5 h-3.5 transition-transform ${navDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100/10 transition focus:outline-none"
          >
            {isMenuOpen ? (
              <Icon name="close" className={`w-6 h-6 ${isLightNav ? 'text-brand-blue' : 'text-white'}`} />
            ) : (
              <Icon name="menu" className={`w-6 h-6 ${isLightNav ? 'text-brand-blue' : 'text-white'}`} />
            )}
          </button>
        </div>

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
                        <Icon name={item.iconName} className={`w-5 h-5 ${item.iconClassName}`} />
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
                      target={'external' in item && item.external ? '_blank' : undefined}
                      rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
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

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[68px] z-40 flex flex-col overflow-hidden bg-brand-dark/95 backdrop-blur-md">
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-8 text-white space-y-6">
            <nav className="flex flex-col gap-4 text-lg font-semibold">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-teal font-bold">Solutions</span>
                {solutionsMenu.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-2 text-base font-medium hover:text-brand-teal transition"
                  >
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
            </div>
            </div>
          </div>
        )}
      </header>

      {navDropdown && (
        <div
          className="hidden lg:block fixed inset-0 top-20 z-40 bg-brand-blue/15 backdrop-blur-[3px]"
          onClick={closeNavDropdown}
          aria-hidden
        />
      )}
    </>
  )
}
