import { journeyCards } from '../data/journeyCards'

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 max-w-2xl mb-16">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyCards.map((card) => (
            <div key={card.title} className="group space-y-4">
              <div className="overflow-hidden rounded-xl aspect-[4/3] shadow-md bg-slate-100">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-teal transition duration-300">{card.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
