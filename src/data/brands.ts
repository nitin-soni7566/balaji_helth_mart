import type { Brand } from '../types'

/**
 * Brands the business deals in. Logos are intentionally text placeholders –
 * add a `logo` path only for artwork the client is permitted to use.
 */
export const brands: Brand[] = [
  { name: 'MuscleBlaze', initials: 'MB', focus: 'Protein & sports nutrition' },
  { name: 'HK Vitals', initials: 'HK', focus: 'Vitamins & daily wellness' },
  { name: 'Alpino', initials: 'AL', focus: 'Peanut butter & oats' },
  { name: 'Pintola', initials: 'PT', focus: 'Peanut butter & oats' },
  { name: 'Other Brands', initials: '+', focus: 'More sports nutrition brands' },
]

export const brandNames = brands.map((b) => b.name)
