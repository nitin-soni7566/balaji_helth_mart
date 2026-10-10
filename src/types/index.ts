import type { LucideIcon } from 'lucide-react'

export type Product = {
  id: string
  name: string
  brand: string
  category: string
  image: string
  description: string
  /** Show in the "Featured Products" section on the home page. */
  featured?: boolean
}

export type Category = {
  slug: string
  name: string
  description: string
  icon: LucideIcon
}

export type Brand = {
  name: string
  /** Short initials used in the text-based logo placeholder. */
  initials: string
  focus: string
  /** Optional path to a logo the client has rights to use (e.g. '/images/brands/brand.svg'). */
  logo?: string
}

export type NavItem = {
  label: string
  to: string
}
