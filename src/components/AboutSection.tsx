import impactVideo from '../assets/impact_video.png'
import Icon from './Icons'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight">
              Turning Possibilities Into Everyday Impact
            </h2>
            <div className="w-16 h-1 bg-brand-teal rounded-full" />
            <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
              SafeTransact is committed to making commerce and savings secure across Nigeria. We built{' '}
              <a href="https://arobo.ng/" target="_blank" rel="noopener noreferrer" className="text-brand-teal font-medium hover:underline">Arobo</a>{' '}
              to eliminate online payment fraud with escrow protection, and{' '}
              <a href="https://www.ajovault.ng/" target="_blank" rel="noopener noreferrer" className="text-brand-teal font-medium hover:underline">AjoVault</a>{' '}
              to bring trust and transparency to community savings groups.
            </p>
            <p className="text-slate-500 leading-relaxed font-light text-sm">
              From secure buyer–seller transactions to rotating thrift and cooperative finance, our platforms help individuals and businesses grow with confidence.
            </p>
            <div className="pt-2">
              <a href="#explore" className="inline-flex items-center gap-2 font-semibold text-brand-teal hover:text-brand-teal/80 hover:underline transition duration-300 group">
                <span>Learn more about our journey</span>
                <Icon name="arrowForward" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-slate-900 border border-slate-100">
              <img
                src={impactVideo}
                alt="Celebrating Success"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-brand-blue/30 group-hover:bg-brand-blue/20 transition-all duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-white/20 animate-ping" />
                  <div className="absolute w-14 h-14 rounded-full bg-white/30 animate-pulse-slow" />

                  <div className="w-14 h-14 rounded-full bg-white text-brand-teal flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Icon name="play" className="w-5 h-5 translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
