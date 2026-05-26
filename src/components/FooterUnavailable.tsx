import type { MouseEvent, ReactNode } from 'react'

export const footerLinkClass = 'text-slate-400 hover:text-white transition'

/** Plain text styled like a footer link — use when there is no destination yet. */
export function FooterUnavailableText({ children }: { children: ReactNode }) {
  return (
    <span className={`${footerLinkClass} cursor-default`} aria-disabled="true">
      {children}
    </span>
  )
}

export const footerSocialIconClass =
  'p-2 rounded-full bg-slate-800/40 text-slate-400 hover:bg-brand-teal hover:text-white transition duration-300'

export function scrollToTop(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
