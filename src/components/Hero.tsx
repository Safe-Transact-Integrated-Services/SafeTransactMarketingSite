import heroBg from '../assets/hero_bg.png'

type HeroProps = {
  onOpenContact: () => void
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
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
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-teal">SafeTransact Group · Nigeria</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Building The Rails Of <br />
            Nigeria&apos;s Digital <br />
            <span className="text-brand-teal">Future</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            We power <strong className="font-semibold text-white">Arobo</strong> for secure escrow transactions and{' '}
            <strong className="font-semibold text-white">AjoVault</strong> for community savings — helping Nigerians transact and save with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 mb-8">
            <a
              href="#industries"
              className="px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-full shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Explore Solutions
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-8 py-4 border border-white/40 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
