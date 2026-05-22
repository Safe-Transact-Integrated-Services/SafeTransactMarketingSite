import { useState } from 'react'
import { faqs } from '../data/faqs'
import Icon from './Icons'

type FAQSectionProps = {
  onOpenContact: () => void
}

export default function FAQSection({ onOpenContact }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
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
                    <Icon name="chevronDown" className="w-4 h-4" />
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
            onClick={onOpenContact}
            className="font-semibold text-brand-teal hover:underline"
          >
            Contact our team
          </button>
        </p>
      </div>
    </section>
  )
}
