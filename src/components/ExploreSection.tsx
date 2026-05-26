import { exploreCards } from '../data/exploreCards'

export default function ExploreSection() {
  return (
    <section id="explore" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
            Shaping the Future
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Explore how SafeTransact is Shaping Nigeria&apos;s Future
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exploreCards.map((card) => (
            <div
              key={card.title}
              className="relative group rounded-2xl overflow-hidden aspect-[16/10] shadow-lg bg-brand-blue flex flex-col justify-end"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent" />
              <div className="relative p-6 sm:p-7 space-y-2.5 z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">{card.label}</span>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-brand-teal transition-colors duration-300">
                  {card.title}
                </h3>
                <div className="w-8 h-1 bg-brand-teal group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
