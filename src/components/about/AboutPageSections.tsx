import type { ReactNode } from 'react'
import Icon from '../Icons'
import {
  aboutIntro,
  closingSection,
  ecosystemSection,
  leadershipSection,
  securitySection,
  visionSection,
  whyChooseSection,
} from '../../data/aboutContent'

function SectionShell({
  children,
  className = 'bg-white',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">{children}</p>
  )
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight mb-6">
      {children}
    </h2>
  )
}

function ProseParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 max-w-3xl">
      {paragraphs.map((text) => (
        <p key={text.slice(0, 32)} className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
          {text}
        </p>
      ))}
    </div>
  )
}

export function AboutPageHero() {
  return (
    <div className="pt-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6 pb-10 sm:pb-12">
        <Eyebrow>{aboutIntro.eyebrow}</Eyebrow>
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight max-w-4xl">
          {aboutIntro.title}
        </h1>
        <div className="w-16 h-1 bg-brand-teal rounded-full mt-5 mb-5" />
        <div className="space-y-3 max-w-3xl">
          {aboutIntro.paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className="text-slate-300 leading-relaxed font-light text-base">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AboutSecuritySection() {
  return (
    <SectionShell className="bg-brand-light">
      <SectionHeading>{securitySection.title}</SectionHeading>
      <ProseParagraphs paragraphs={securitySection.paragraphs} />
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {securitySection.markets.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-700 font-light">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-slate-600 leading-relaxed font-light text-base sm:text-lg max-w-3xl">
        {securitySection.closing}
      </p>
    </SectionShell>
  )
}

export function AboutVisionSection() {
  return (
    <SectionShell>
      <SectionHeading>{visionSection.title}</SectionHeading>
      <ProseParagraphs paragraphs={visionSection.paragraphs} />
    </SectionShell>
  )
}

export function AboutLeadershipSection() {
  return (
    <SectionShell className="bg-brand-light" id="leadership">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading>{leadershipSection.title}</SectionHeading>
          <ProseParagraphs paragraphs={leadershipSection.paragraphs} />
          <div className="pt-2">
            <p className="text-sm font-semibold text-brand-blue mb-4">{leadershipSection.commitmentsLabel}</p>
            <ul className="space-y-3">
              {leadershipSection.commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 font-light">
                  <Icon name="shield" className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-blue/10 via-brand-light to-brand-teal/10 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-brand-blue/10 border-2 border-dashed border-brand-teal/40 flex items-center justify-center mb-4">
                <Icon name="users" className="w-10 h-10 text-brand-teal/70" />
              </div>
              <p className="text-lg font-bold text-brand-blue">{leadershipSection.founderName}</p>
              <p className="text-sm text-slate-500 font-light mt-1">{leadershipSection.founderRole}</p>
              <p className="text-xs text-slate-400 mt-4 max-w-[14rem] leading-relaxed">
                Founder photo will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

export function AboutEcosystemSection() {
  return (
    <SectionShell>
      <SectionHeading>{ecosystemSection.title}</SectionHeading>
      <ProseParagraphs paragraphs={ecosystemSection.intro} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {ecosystemSection.products.map((product, index) => {
          const isDark = index === 1
          return (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? 'bg-brand-blue border border-brand-blue text-white'
                  : 'bg-white border border-slate-100'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-3 group-hover:text-brand-teal transition ${
                  isDark ? 'text-white group-hover:text-brand-teal' : 'text-brand-blue'
                }`}
              >
                {product.name}
                <Icon
                  name="arrowForward"
                  className="inline-block w-4 h-4 ml-1 -translate-y-px opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </h3>
              <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {product.description}
              </p>
            </a>
          )
        })}
      </div>
      <p className="mt-8 text-slate-600 leading-relaxed font-light text-base sm:text-lg max-w-3xl">
        {ecosystemSection.closing}
      </p>
    </SectionShell>
  )
}

export function AboutWhyChooseSection() {
  return (
    <SectionShell className="bg-brand-light">
      <SectionHeading>{whyChooseSection.title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseSection.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-brand-blue mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export function AboutClosingSection() {
  return (
    <SectionShell className="bg-brand-blue text-white pb-20">
      <SectionHeading>
        <span className="text-white">{closingSection.title}</span>
      </SectionHeading>
      <div className="space-y-4 max-w-3xl">
        {closingSection.paragraphs.map((text) => (
          <p key={text.slice(0, 32)} className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
            {text}
          </p>
        ))}
      </div>
      <p className="mt-8 text-xl sm:text-2xl font-display font-semibold text-brand-teal max-w-2xl leading-snug">
        {closingSection.tagline}
      </p>
    </SectionShell>
  )
}
