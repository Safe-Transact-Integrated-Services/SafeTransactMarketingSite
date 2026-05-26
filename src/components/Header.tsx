import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { solutionsMenu, resourcesMenu } from '../data/navMenus'
import Icon from './Icons'

type HeaderProps = {
  onOpenContact: () => void
}


export default function Header({ onOpenContact }: HeaderProps) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const headerRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [navDropdown, setNavDropdown] = useState<string | null>(null)
  const [headerHeight, setHeaderHeight] = useState(72)

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
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setIsMenuOpen(false)
    setNavDropdown(null)
  }, [pathname])

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

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [isScrolled, isMenuOpen, navDropdown])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setIsMenuOpen(false)
    }
    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  const isSolidHeader = !isHome || isScrolled || !!navDropdown

  const closeMobileMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolidHeader
            ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
            : 'bg-transparent text-white py-6'
        }`}
        onMouseLeave={() => setNavDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 select-none"
            aria-label="SafeTransact home"
          >
            <Icon name="logo" className="w-7 h-7 text-brand-teal transition-transform duration-300 hover:rotate-12" />
            <span className={`font-display font-bold text-2xl tracking-tight ${isSolidHeader ? 'text-brand-blue' : 'text-white'}`}>
              safetransact<span className="text-brand-teal">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            <div
              className="relative"
              onMouseEnter={() => setNavDropdown('solutions')}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navLinkClass(isSolidHeader)} ${navDropdown === 'solutions' ? 'text-brand-teal' : ''}`}
              >
                Solutions
                <Icon name="chevronDown" className={`w-3.5 h-3.5 transition-transform ${navDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link to="/#industries" className={navLinkClass(isSolidHeader)}>Products</Link>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkClass(isSolidHeader)}${isActive ? ' text-brand-teal' : ''}`
              }
            >
              About Us
            </NavLink>
            <Link to="/#explore" className={navLinkClass(isSolidHeader)}>Insights</Link>

            <div
              className="relative"
              onMouseEnter={() => setNavDropdown('resources')}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navLinkClass(isSolidHeader)} ${navDropdown === 'resources' ? 'text-brand-teal' : ''}`}
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
                isSolidHeader
                  ? 'bg-brand-teal text-white hover:bg-brand-teal/90'
                  : 'bg-white text-brand-blue hover:bg-slate-100'
              }`}
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100/10 transition focus:outline-none"
          >
            {isMenuOpen ? (
              <Icon name="close" className={`w-6 h-6 ${isSolidHeader ? 'text-brand-blue' : 'text-white'}`} />
            ) : (
              <Icon name="menu" className={`w-6 h-6 ${isSolidHeader ? 'text-brand-blue' : 'text-white'}`} />
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
                  ) : 'href' in item && 'external' in item && item.external ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeNavDropdown}
                      className={itemClass}
                    >
                      {itemContent}
                    </a>
                  ) : 'href' in item ? (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeNavDropdown}
                      className={itemClass}
                    >
                      {itemContent}
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          </div>
        )}

      </header>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 z-40 flex flex-col overflow-hidden bg-brand-dark backdrop-blur-md"
          style={{ top: headerHeight }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
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
              <Link to="/#industries" onClick={closeMobileMenu} className="hover:text-brand-teal transition">Products</Link>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `hover:text-brand-teal transition${isActive ? ' text-brand-teal' : ''}`
                }
              >
                About Us
              </NavLink>
              <Link to="/#explore" onClick={closeMobileMenu} className="hover:text-brand-teal transition">Insights</Link>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-teal font-bold">Resources</span>
                {resourcesMenu.map((item) =>
                  'opensContact' in item && item.opensContact ? (
                    <button
                      key={item.title}
                      type="button"
                      onClick={openContactModal}
                      className="block pl-2 text-base font-medium hover:text-brand-teal transition text-left w-full"
                    >
                      {item.title}
                    </button>
                  ) : 'href' in item ? (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className="block pl-2 text-base font-medium hover:text-brand-teal transition"
                    >
                      {item.title}
                    </Link>
                  ) : null
                )}
              </div>
            </nav>
            <div className="w-full h-px bg-white/10 my-4" />
            <button
              type="button"
              onClick={openContactModal}
              className="w-full text-center py-3 rounded-full bg-brand-teal text-white font-medium uppercase tracking-wider hover:bg-brand-teal/90 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

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
