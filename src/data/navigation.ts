import type { NavItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Wholesale', to: '/wholesale' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

/** Where every "Get Wholesale Quote" button points. */
export const QUOTE_PATH = '/wholesale#enquiry'

export function quotePathForProduct(product: string): string {
  return `/wholesale?product=${encodeURIComponent(product)}#enquiry`
}
