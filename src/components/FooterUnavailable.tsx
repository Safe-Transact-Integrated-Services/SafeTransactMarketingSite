import type { ReactNode } from 'react'

export const footerLinkClass = 'text-slate-400 hover:text-white transition'

/** Plain text styled like a footer link — use when there is no destination yet. */
export function FooterUnavailableText({ children }: { children: ReactNode }) {
  return (
    <span className="text-slate-400 cursor-default" aria-disabled="true">
      {children}
    </span>
  )
}

export const footerSocialIconClass =
  'p-2 rounded-full bg-slate-800/40 text-slate-400 transition duration-300 cursor-default'
