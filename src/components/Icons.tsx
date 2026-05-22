import type { SVGProps } from 'react'

export const iconNames = [
  'logo',
  'chevronDown',
  'close',
  'menu',
  'shield',
  'users',
  'questionCircle',
  'code',
  'book',
  'mail',
  'arrowRight',
  'arrowForward',
  'play',
  'facebook',
  'twitter',
  'linkedin',
  'instagram',
] as const

export type IconName = (typeof iconNames)[number]

type IconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
} & Omit<SVGProps<SVGSVGElement>, 'name'>

const paths: Record<IconName, SVGProps<SVGSVGElement>> = {
  logo: {
    viewBox: '0 0 100 100',
    fill: 'currentColor',
    children: <path d="M10 20 L60 50 L10 80 L35 80 L85 50 L35 20 Z" />,
  },
  chevronDown: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />,
  },
  close: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />,
  },
  menu: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />,
  },
  shield: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  users: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  questionCircle: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  code: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  },
  book: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  mail: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  arrowRight: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />,
  },
  arrowForward: {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />,
  },
  play: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    children: <path d="M8 5v14l11-7z" />,
  },
  facebook: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    children: <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3c-3 0-4 1.4-4 3.5V8z" />,
  },
  twitter: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    children: <path d="M18.2 2.4h3.3L14.3 11l8.5 11.3H16L11 15.8l-6 6.5H1.6l7.7-8.6L1 2.4h6.9l4.5 6 5.8-6z" />,
  },
  linkedin: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    children: (
      <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5s-2.48-1.12-2.48-2.5S1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.02 23h4.96V8H.02v15zM23.98 23h-4.96v-7.75c0-1.85-.04-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.09V23H8.5V8h4.76v2.05h.07c.66-1.25 2.27-2.56 4.67-2.56 5 0 5.92 3.29 5.92 7.57V23z" />
    ),
  },
  instagram: {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    children: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
}

const defaultStrokeWidth: Partial<Record<IconName, number>> = {
  chevronDown: 2.5,
  arrowRight: 2.5,
  close: 2,
  menu: 2,
  shield: 2,
  users: 2,
  questionCircle: 2,
  code: 2,
  book: 2,
  mail: 2,
  arrowForward: 2,
}

export default function Icon({ name, className = '', strokeWidth, ...props }: IconProps) {
  const config = paths[name]
  const isStroke = config.stroke === 'currentColor'
  const width = strokeWidth ?? defaultStrokeWidth[name] ?? (isStroke ? 2 : undefined)

  return (
    <svg
      className={className}
      viewBox={config.viewBox}
      fill={config.fill}
      stroke={config.stroke}
      strokeWidth={width}
      {...props}
    >
      {config.children}
    </svg>
  )
}
