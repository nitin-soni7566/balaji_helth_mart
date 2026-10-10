import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BrandSection } from '../components/BrandSection'
import { CategoryCard } from '../components/CategoryCard'
import { Hero } from '../components/Hero'
import { OrderSteps } from '../components/OrderSteps'
import { ProductGrid } from '../components/ProductGrid'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { WholesaleCTA } from '../components/WholesaleCTA'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { categories } from '../data/categories'
import { featuredProducts } from '../data/products'

export function HomePage() {
  return (
    <>
      <Seo
        title="Wholesale Protein Supplements & Sports Nutrition Supplier"
        description="Wholesale protein supplements, high-protein oats, peanut butter and hydration products in bulk for gyms, retailers and distributors. Request a wholesale quote today."
      />
      <Hero />

      <section className="py-20 sm:py-28" aria-labelledby="categories-heading">
        <div className="container-x">
          <SectionHeading
            id="categories-heading"
            eyebrow="Product categories"
            title="Bulk protein products & sports nutrition"
            description="Everything a gym counter, supplement shop or retail shelf needs – supplied in wholesale quantities."
            action={
              <Link to="/products" className="btn-dark">
                View all products
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, i) => (
              <li key={category.slug}>
                <Reveal delay={(i % 4) * 70} className="h-full">
                  <CategoryCard category={category} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />

      <BrandSection />

      <section className="py-20 sm:py-28" aria-labelledby="featured-heading">
        <div className="container-x">
          <SectionHeading
            id="featured-heading"
            eyebrow="Featured products"
            title="Fast-moving products for your shelves"
            description="A selection of what we supply. Ask for the full catalogue with current pack sizes and flavours."
            action={
              <Link to="/products" className="btn-dark">
                Browse catalogue
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-12">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>

      <div className="bg-mist">
        <OrderSteps />
      </div>

      <WholesaleCTA />
    </>
  )
}
