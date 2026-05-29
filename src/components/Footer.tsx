import { Link } from 'react-router-dom'
import Icon from './Icons'
import {
  FooterUnavailableText,
  footerLinkClass,
  footerSocialIconClass,
} from './FooterUnavailable'

type FooterProps = {
  onOpenContact: () => void
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="footer" className="bg-[#05111c] text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-x-20 lg:gap-y-12 pb-16 border-b border-slate-800">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-2 select-none">
            <Icon name="logo" className="w-8 h-8 text-brand-teal" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              safetransact<span className="text-brand-teal">.</span>
            </span>
          </div>
          <p className="text-sm font-light text-slate-400 leading-relaxed max-w-md">
            SafeTransact powers Arobo escrow payments and AjoVault community savings across Nigeria. Transforming businesses, powering dreams.
          </p>
          <div className="flex gap-4 pt-2">
            <button type="button" aria-label="Facebook" className={footerSocialIconClass}>
              <Icon name="facebook" className="w-4 h-4" />
            </button>
            <button type="button" aria-label="X" className={footerSocialIconClass}>
              <Icon name="twitter" className="w-4 h-4" />
            </button>
            <a
              href="https://www.linkedin.com/company/safe-transact-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Safe Transact Ltd on LinkedIn"
              className={footerSocialIconClass}
            >
              <Icon name="linkedin" className="w-4 h-4" />
            </a>
            <button type="button" aria-label="Instagram" className={footerSocialIconClass}>
              <Icon name="instagram" className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-4 text-xs font-semibold text-slate-500">
            📞 Toll Free: +234 1 628 3888
          </div>
        </div>

        <div className="space-y-6 md:pt-2">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase">About Us</h4>
          <ul className="space-y-3.5 text-sm font-light">
            <li><Link to="/about" className={footerLinkClass}>About Us</Link></li>
            <li>
              <button type="button" onClick={onOpenContact} className={`${footerLinkClass} text-left`}>
                Contact
              </button>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/safe-transact-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClass}
              >
                LinkedIn
              </a>
            </li>
            <li><FooterUnavailableText>Privacy policy</FooterUnavailableText></li>
            <li><FooterUnavailableText>Terms of service</FooterUnavailableText></li>
          </ul>
        </div>

        <div className="space-y-6 md:pt-2">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase">Platforms</h4>
          <ul className="space-y-3.5 text-sm font-light">
            <li>
              <a href="https://arobo.ng/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                Arobo
              </a>
            </li>
            <li>
              <a href="https://www.ajovault.ng/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                AjoVault
              </a>
            </li>
            <li>
              <a href="https://www.ajovault.ng/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                Become an Agent
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-slate-400 gap-6">
        <span>© 2026 SafeTransact Limited. All Rights Reserved.</span>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <FooterUnavailableText>Privacy Policy</FooterUnavailableText>
          <FooterUnavailableText>Terms of Service</FooterUnavailableText>
          <FooterUnavailableText>Cookie Preferences</FooterUnavailableText>
        </div>
      </div>
    </footer>
  )
}
