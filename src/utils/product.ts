import type { Product } from '../types'

/** Brand value used for products sold under various / unnamed brands. */
export const GENERIC_BRAND = 'Other Brands'

/** "MuscleBlaze Whey Protein", or just "Electrolyte Powder" for generic-brand items. */
export function productDisplayName(product: Product): string {
  return product.brand === GENERIC_BRAND ? product.name : `${product.brand} ${product.name}`
}
