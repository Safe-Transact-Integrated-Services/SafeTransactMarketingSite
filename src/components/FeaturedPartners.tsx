import paystackLogo from '../assets/paystack.svg'
import opayLogo from '../assets/opay.png'

export default function FeaturedPartners() {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-slate-100" aria-labelledby="featured-partners-heading">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          id="featured-partners-heading"
          className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-10 sm:mb-12"
        >
          Trusted Payment Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-14 sm:gap-20 md:gap-28">
          <a
            href="https://paystack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            aria-label="Paystack"
          >
            <img src={paystackLogo} alt="Paystack" className="h-7 sm:h-8 w-auto" width={157} height={28} />
          </a>
          <a
            href="https://opayweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            aria-label="OPay"
          >
            <img src={opayLogo} alt="OPay" className="h-8 sm:h-10 w-auto object-contain" />
          </a>
        </div>
      </div>
    </section>
  )
}
