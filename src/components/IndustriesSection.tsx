import { solutionsMenu } from '../data/navMenus'
import Icon from './Icons'

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Secure transactions &amp; community savings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {solutionsMenu.map((solution, index) => {
            const isLight = index === 0
            return (
              <a
                key={solution.title}
                href={solution.href}
                target={solution.external ? '_blank' : undefined}
                rel={solution.external ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                  isLight
                    ? 'bg-white border border-slate-100'
                    : 'bg-brand-blue border border-brand-blue'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    isLight
                      ? 'bg-brand-teal/10 group-hover:bg-brand-teal/15'
                      : 'bg-brand-teal/20 group-hover:bg-brand-teal/30'
                  }`}
                >
                    <Icon name={solution.iconName} className={`w-5 h-5 ${solution.iconClassName}`} />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-teal mb-2">
                  {solution.tagline}
                </p>
                <h3
                  className={`text-xl font-bold mb-3 leading-snug ${
                    isLight ? 'text-brand-blue' : 'text-white'
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`text-sm font-light leading-relaxed ${
                    isLight ? 'text-slate-500' : 'text-slate-300'
                  }`}
                >
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-brand-teal group-hover:gap-2 transition-all">
                  Visit {solution.title}
                  <Icon name="arrowForward" className="w-4 h-4" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
