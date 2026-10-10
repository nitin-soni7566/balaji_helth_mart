import { useMemo, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PackageSearch, Search, SlidersHorizontal, X } from 'lucide-react'
import { brandNames } from '../data/brands'
import { categories, getCategoryBySlug } from '../data/categories'
import type { Product } from '../types'
import { ProductCard } from './ProductCard'
import { WhatsAppButton } from './WhatsAppButton'

type Props = {
  products: Product[]
  /** Show search + brand/category filters (state is kept in the URL). */
  filterable?: boolean
}

export function ProductGrid({ products, filterable = false }: Props) {
  if (!filterable) {
    return (
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <li key={p.id}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    )
  }
  return <FilterableProductGrid products={products} />
}

function FilterableProductGrid({ products }: { products: Product[] }) {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const brand = params.get('brand') ?? ''
  const category = getCategoryBySlug(params.get('category'))

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true, preventScrollReset: true })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      if (brand && p.brand !== brand) return false
      if (category && p.category !== category.name) return false
      if (!q) return true
      return [p.name, p.brand, p.category, p.description].some((field) => field.toLowerCase().includes(q))
    })
  }, [products, query, brand, category])

  const hasFilters = Boolean(query || brand || category)

  return (
    <div>
      <div className="rounded-3xl border border-ink-900/10 bg-mist p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-ink-900/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => update('q', e.target.value)}
              placeholder="Search protein, oats, peanut butter…"
              className="field pl-12"
            />
          </label>
          <label className="relative block">
            <span className="sr-only">Filter by brand</span>
            <SlidersHorizontal className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-900/40" />
            <select value={brand} onChange={(e) => update('brand', e.target.value)} className="field appearance-none pl-11">
              <option value="">All brands</option>
              {brandNames.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="-mx-4 mt-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5 [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max gap-2 md:w-auto md:flex-wrap" aria-label="Filter by category">
            <li>
              <CategoryChip active={!category} onClick={() => update('category', '')}>
                All categories
              </CategoryChip>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <CategoryChip active={category?.slug === c.slug} onClick={() => update('category', c.slug)}>
                  {c.name}
                </CategoryChip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-900/60" aria-live="polite">
          Showing <strong className="text-ink-900">{filtered.length}</strong> of {products.length} products
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={() => setParams({}, { replace: true, preventScrollReset: true })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-lime-600"
          >
            <X className="size-4" aria-hidden="true" />
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 flex flex-col items-center rounded-3xl border border-dashed border-ink-900/20 px-6 py-16 text-center">
          <PackageSearch className="size-10 text-ink-900/30" aria-hidden="true" />
          <h3 className="mt-4 text-2xl font-bold uppercase">No matching products listed</h3>
          <p className="mt-2 max-w-md text-ink-900/60">
            Our catalogue changes often and not every product is listed here. Tell us what you need and we will check
            availability.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/wholesale#enquiry" className="btn-dark">
              Send an enquiry
            </Link>
            <WhatsAppButton
              label="Ask on WhatsApp"
              message={`Hi, I am looking for ${query || 'a product'} in wholesale quantity. Is it available?`}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
        active ? 'bg-ink-900 text-white' : 'bg-white text-ink-900/70 ring-1 ring-ink-900/10 hover:text-ink-900 hover:ring-ink-900/30'
      }`}
    >
      {children}
    </button>
  )
}
