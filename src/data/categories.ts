import {
  Boxes,
  Cookie,
  Droplets,
  Dumbbell,
  Nut,
  Pill,
  Trophy,
  Wheat,
} from 'lucide-react'
import type { Category } from '../types'

export const categories: Category[] = [
  {
    slug: 'protein-supplements',
    name: 'Protein Supplements',
    description: 'Whey, raw whey, isolate and plant protein in multiple pack sizes.',
    icon: Dumbbell,
  },
  {
    slug: 'protein-bars-snacks',
    name: 'Protein Bars & Snacks',
    description: 'Ready-to-eat protein bars and snacks for counters and gym cafés.',
    icon: Cookie,
  },
  {
    slug: 'high-protein-oats',
    name: 'High Protein Oats',
    description: 'Rolled and flavoured high-protein oats for everyday nutrition.',
    icon: Wheat,
  },
  {
    slug: 'electrolytes-hydration',
    name: 'Electrolytes & Hydration',
    description: 'Electrolyte powders and hydration mixes for training and sport.',
    icon: Droplets,
  },
  {
    slug: 'peanut-butter',
    name: 'Peanut Butter',
    description: 'Natural, crunchy, creamy and high-protein peanut butter variants.',
    icon: Nut,
  },
  {
    slug: 'fitness-supplements',
    name: 'Fitness Supplements',
    description: 'Multivitamins, fish oil, creatine and daily wellness supplements.',
    icon: Pill,
  },
  {
    slug: 'sports-nutrition',
    name: 'Sports Nutrition',
    description: 'Pre-workout, BCAA, mass gainers and performance nutrition.',
    icon: Trophy,
  },
  {
    slug: 'bulk-institutional-supply',
    name: 'Bulk / Institutional Supply',
    description: 'Large-volume supply for distributors, corporates and institutions.',
    icon: Boxes,
  },
]

export const categoryNames = categories.map((c) => c.name)

export function getCategoryBySlug(slug: string | null): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
