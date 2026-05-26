import type { IconName } from '../components/Icons'

export type SolutionMenuItem = {
  title: string
  tagline: string
  description: string
  href: string
  external: boolean
  iconBg: string
  iconName: IconName
  iconClassName: string
}

export type ResourceMenuItem =
  | {
      title: string
      description: string
      href: string
      iconBg: string
      iconName: IconName
      iconClassName: string
    }
  | {
      title: string
      description: string
      opensContact: true
      iconBg: string
      iconName: IconName
      iconClassName: string
    }

export const solutionsMenu: SolutionMenuItem[] = [
  {
    title: 'Arobo',
    tagline: 'Secure Online Transactions, Guaranteed!',
    description:
      'Escrow payment platform that protects buyers and sellers — funds held securely until delivery is confirmed.',
    href: 'https://arobo.ng/',
    external: true,
    iconBg: 'bg-amber-100',
    iconName: 'shield',
    iconClassName: 'text-amber-600',
  },
  {
    title: 'AjoVault',
    tagline: 'Save Together. Safe Together.',
    description:
      'Digitizing community savings with group thrift, rotating savings, and transparent fund management.',
    href: 'https://www.ajovault.ng/',
    external: true,
    iconBg: 'bg-blue-100',
    iconName: 'users',
    iconClassName: 'text-blue-600',
  },
]

export const resourcesMenu: ResourceMenuItem[] = [
  {
    title: 'FAQ',
    description: 'Answers about integrations, compliance, onboarding, and support.',
    href: '/#faq',
    iconBg: 'bg-teal-100',
    iconName: 'questionCircle',
    iconClassName: 'text-brand-teal',
  },
  {
    title: 'Contact Us',
    description: 'Reach our teams in Lagos and Abuja.',
    opensContact: true,
    iconBg: 'bg-rose-100',
    iconName: 'mail',
    iconClassName: 'text-rose-600',
  },
]
