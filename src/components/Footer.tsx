import Icon from './Icons'

type FooterProps = {
  onOpenContact: () => void
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="footer" className="bg-[#05111c] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 select-none cursor-pointer">
            <Icon name="logo" className="w-8 h-8 text-brand-teal" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              safetransact<span className="text-brand-teal">.</span>
            </span>
          </div>
          <p className="text-sm font-light text-slate-400 leading-relaxed">
            SafeTransact powers Arobo escrow payments and AjoVault community savings across Nigeria. Transforming businesses, powering dreams.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
              <Icon name="facebook" className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
              <Icon name="twitter" className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
              <Icon name="linkedin" className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300">
              <Icon name="instagram" className="w-4 h-4" />
            </a>
          </div>
          <div className="pt-2 text-xs font-semibold text-slate-500">
            📞 Toll Free: +234 1 628 3888
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase">Features</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#explore" className="hover:text-white transition">Rotating group savings</a></li>
            <li><a href="#explore" className="hover:text-white transition">Thrift contributions</a></li>
            <li><a href="#explore" className="hover:text-white transition">Personal savings</a></li>
            <li><a href="#explore" className="hover:text-white transition">Investment clan</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase">Company</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li>
              <button type="button" onClick={onOpenContact} className="hover:text-white transition text-left">
                Contact
              </button>
            </li>
            <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of service</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase">Platforms</h4>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <a href="https://arobo.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Arobo
              </a>
            </li>
            <li>
              <a href="https://www.ajovault.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                AjoVault
              </a>
            </li>
            <li>
              <a href="https://www.ajovault.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Become an Agent
              </a>
            </li>
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
  )
}
