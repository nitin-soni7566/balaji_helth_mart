import type { Product } from '../types'

/**
 * SAMPLE product data – replace with the client's real catalogue.
 *
 * Images live in /public/images/products. To use real product photos, drop the
 * files into that folder and update the `image` path. Categories must match a
 * name in `data/categories.ts`; brands should match `data/brands.ts`.
 */
export const products: Product[] = [
  {
    id: 'mb-whey-protein',
    name: 'Whey Protein',
    brand: 'MuscleBlaze',
    category: 'Protein Supplements',
    image: '/images/products/whey-protein.svg',
    description:
      'Popular whey protein range for gyms and supplement stores. Multiple flavours and pack sizes – enquire for current stock.',
    featured: true,
  },
  {
    id: 'mb-raw-whey',
    name: 'Raw Whey Protein',
    brand: 'MuscleBlaze',
    category: 'Protein Supplements',
    image: '/images/products/raw-whey.svg',
    description:
      'Unflavoured whey protein concentrate, a steady seller for value-focused fitness customers.',
  },
  {
    id: 'mb-creatine',
    name: 'Creatine Monohydrate',
    brand: 'MuscleBlaze',
    category: 'Sports Nutrition',
    image: '/images/products/creatine.svg',
    description:
      'Micronised creatine for strength and performance-focused customers. Available in bulk cartons.',
  },
  {
    id: 'mb-protein-bar',
    name: 'Protein Bars',
    brand: 'MuscleBlaze',
    category: 'Protein Bars & Snacks',
    image: '/images/products/protein-bar.svg',
    description:
      'Grab-and-go protein bars in assorted flavours – ideal for gym counters, cafés and retail shelves.',
    featured: true,
  },
  {
    id: 'hk-multivitamin',
    name: 'Multivitamin Tablets',
    brand: 'HK Vitals',
    category: 'Fitness Supplements',
    image: '/images/products/multivitamin.svg',
    description:
      'Daily multivitamin range suited to pharmacies, wellness stores and supplement retailers.',
    featured: true,
  },
  {
    id: 'hk-fish-oil',
    name: 'Fish Oil Capsules',
    brand: 'HK Vitals',
    category: 'Fitness Supplements',
    image: '/images/products/fish-oil.svg',
    description:
      'Omega-3 fish oil capsules – a consistent everyday wellness product for retail counters.',
  },
  {
    id: 'alpino-peanut-butter',
    name: 'High Protein Peanut Butter',
    brand: 'Alpino',
    category: 'Peanut Butter',
    image: '/images/products/alpino-peanut-butter.svg',
    description:
      'High-protein peanut butter in crunchy and smooth variants. Multiple jar sizes available on request.',
    featured: true,
  },
  {
    id: 'alpino-oats',
    name: 'High Protein Oats',
    brand: 'Alpino',
    category: 'High Protein Oats',
    image: '/images/products/alpino-oats.svg',
    description:
      'Protein-rich rolled oats for breakfast and pre-workout meals – suited to gyms and grocery retail.',
    featured: true,
  },
  {
    id: 'pintola-peanut-butter',
    name: 'All Natural Peanut Butter',
    brand: 'Pintola',
    category: 'Peanut Butter',
    image: '/images/products/pintola-peanut-butter.svg',
    description:
      'Natural peanut butter range in crunchy and creamy textures for health-food and fitness retail.',
  },
  {
    id: 'pintola-oats',
    name: 'High Protein Oats',
    brand: 'Pintola',
    category: 'High Protein Oats',
    image: '/images/products/pintola-oats.svg',
    description:
      'Flavoured high-protein oats in resealable pouches. Enquire for available flavours and cartons.',
  },
  {
    id: 'electrolyte-powder',
    name: 'Electrolyte Powder',
    brand: 'Other Brands',
    category: 'Electrolytes & Hydration',
    image: '/images/products/electrolyte.svg',
    description:
      'Electrolyte drink mixes in tubs and sachets for gyms, sports academies and outdoor events.',
    featured: true,
  },
  {
    id: 'pre-workout',
    name: 'Pre-Workout',
    brand: 'Other Brands',
    category: 'Sports Nutrition',
    image: '/images/products/pre-workout.svg',
    description:
      'Pre-workout formulas from multiple brands for performance-focused gym members.',
  },
  {
    id: 'mass-gainer',
    name: 'Mass Gainer',
    brand: 'Other Brands',
    category: 'Protein Supplements',
    image: '/images/products/mass-gainer.svg',
    description:
      'Weight and mass gainer range in large tubs – a regular reorder item for gyms and retailers.',
  },
  {
    id: 'bulk-cartons',
    name: 'Mixed Bulk Cartons',
    brand: 'Other Brands',
    category: 'Bulk / Institutional Supply',
    image: '/images/products/bulk-carton.svg',
    description:
      'Mixed-product cartons for distributors, corporate wellness programmes and institutional buyers.',
  },
]

export const featuredProducts = products.filter((p) => p.featured)
