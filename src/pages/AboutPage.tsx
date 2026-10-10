import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { BrandSection } from '../components/BrandSection'
import { PageHero } from '../components/PageHero'
import { PlaceholderNote } from '../components/PlaceholderNote'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { WholesaleCTA } from '../components/WholesaleCTA'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { SITE } from '../config/site'

const focusAreas = [
  'Protein supplements, mass gainers and creatine',
  'High-protein oats and peanut butter',
  'Vitamins, fish oil and daily wellness supplements',
  'Electrolytes and hydration products',
  'Protein bars and healthy snacks',
  'Mixed-brand bulk and institutional orders',
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us – Wholesale Sports Nutrition Supplier"
        description={`${SITE.name} is a B2B wholesale supplier of protein supplements, sports nutrition and fitness products for gyms, retailers and distributors.`}
      />
      <PageHero
        crumb="About"
        eyebrow="About us"
        title={
          <>
            Your wholesale partner for <span className="text-lime-400">sports nutrition</span>
          </>
        }
        description="We help fitness businesses stock the protein, supplements and health foods their customers ask for – in bulk, from one dependable source."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl">
              Built around the needs of business buyers
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-900/70">
              <p>
                {SITE.name} supplies sports nutrition and fitness products to gyms, fitness centres, supplement stores,
                retailers and distributors. We work only with businesses, so everything we do is shaped around bulk
                orders, repeat supply and clear communication.
              </p>
              <p>
                Instead of juggling multiple suppliers for protein, oats, peanut butter and supplements, our customers
                can source from several popular brands in a single wholesale order.
              </p>
            </div>
            <div className="mt-8">
              <PlaceholderNote>
                Add the company story here – when the business started, where it is based, the team, and any
                authorisations or registrations the client can verify.
              </PlaceholderNote>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-ink-950 p-8 text-white sm:p-10">
              <h3 className="text-3xl font-bold uppercase">What we supply</h3>
              <ul className="mt-6 space-y-4">
                {focusAreas.map((item) => (
                  <li key={item} className="flex gap-3 text-white/80">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lime-400 text-ink-950">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="btn-primary mt-8">
                Explore products
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <BrandSection />
      <WholesaleCTA />
    </>
  )
}
