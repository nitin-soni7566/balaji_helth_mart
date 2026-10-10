import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Category } from '../types'

type Props = {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: Props) {
  const Icon = category.icon
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink-900 hover:bg-ink-900 hover:shadow-2xl hover:shadow-ink-900/20"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-lime-400/20 text-lime-600 transition duration-300 group-hover:bg-lime-400 group-hover:text-ink-950">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-bold text-ink-900/25 transition group-hover:text-white/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-8 text-2xl leading-tight font-bold text-ink-900 uppercase transition group-hover:text-white">
        {category.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-900/60 transition group-hover:text-white/65">
        {category.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink-900 transition group-hover:text-lime-400">
        View products
        <ArrowUpRight
          className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
