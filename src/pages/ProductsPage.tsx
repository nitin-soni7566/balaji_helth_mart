import { useSearchParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { ProductGrid } from '../components/ProductGrid'
import { Seo } from '../components/Seo'
import { WholesaleCTA } from '../components/WholesaleCTA'
import { getCategoryBySlug } from '../data/categories'
import { products } from '../data/products'

export function ProductsPage() {
  const [params] = useSearchParams()
  const category = getCategoryBySlug(params.get('category'))

  return (
    <>
      <Seo
        title={category ? `Wholesale ${category.name}` : 'Wholesale Protein & Sports Nutrition Products'}
        description={
          category
            ? `Buy ${category.name.toLowerCase()} in bulk for gyms, retailers and distributors. ${category.description} Request a wholesale quote.`
            : 'Browse bulk protein products, high-protein oats, peanut butter, electrolytes and fitness supplements from MuscleBlaze, HK Vitals, Alpino, Pintola and more.'
        }
      />
      <PageHero
        crumb="Products"
        eyebrow="Wholesale catalogue"
        title={
          <>
            Sports nutrition <span className="text-lime-400">wholesale</span> products
          </>
        }
        description="Search and filter our range of bulk supplements and health foods. Prices are shared on request, based on quantity and current stock."
      />
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <h2 className="sr-only">Product list</h2>
          <ProductGrid products={products} filterable />
        </div>
      </section>
      <WholesaleCTA
        title="Can't find a product?"
        description="Our stock changes regularly and not every item is listed. Send us your list and we will check availability."
      />
    </>
  )
}
