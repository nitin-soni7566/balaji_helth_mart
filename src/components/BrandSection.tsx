import { Link } from 'react-router-dom'
import { brands } from '../data/brands'
import { GENERIC_BRAND } from '../utils/product'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function BrandSection() {
  return (
    <section className="bg-mist py-20 sm:py-24" aria-labelledby="brands-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Brands we deal in"
          id="brands-heading"
          title="Popular brands, one wholesale supplier"
          description="Stock trusted sports nutrition and health food brands without managing multiple suppliers. Availability varies – ask us for the current brand list."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, i) => {
            const isOther = brand.name === GENERIC_BRAND
            return (
              <li key={brand.name} className={isOther ? 'col-span-2 sm:col-span-1' : ''}>
                <Reveal delay={i * 70} className="h-full">
                  <Link
                    to={`/products?brand=${encodeURIComponent(brand.name)}`}
                    className={`group flex h-full flex-col items-center justify-center rounded-3xl p-6 text-center transition duration-300 hover:-translate-y-1 ${
                      isOther
                        ? 'bg-ink-900 text-white hover:shadow-2xl hover:shadow-ink-900/30'
                        : 'bg-white ring-1 ring-ink-900/10 hover:shadow-xl hover:shadow-ink-900/10 hover:ring-ink-900/20'
                    }`}
                  >
                    {brand.logo ? (
                      <img src={brand.logo} alt={`${brand.name} logo`} className="h-14 w-auto object-contain" />
                    ) : (
                      // Text placeholder – replace with an authorised logo via `logo` in data/brands.ts
                      <span
                        className={`grid size-14 place-items-center rounded-2xl font-display text-2xl font-extrabold transition ${
                          isOther
                            ? 'bg-lime-400 text-ink-950'
                            : 'bg-ink-900 text-lime-400 group-hover:bg-lime-400 group-hover:text-ink-950'
                        }`}
                        aria-hidden="true"
                      >
                        {brand.initials}
                      </span>
                    )}
                    <span className="mt-4 font-display text-2xl font-bold tracking-wide uppercase">{brand.name}</span>
                    <span className={`mt-1 text-xs ${isOther ? 'text-white/60' : 'text-ink-900/55'}`}>
                      {brand.focus}
                    </span>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <p className="mt-6 text-xs text-ink-900/45">
          Brand names are trademarks of their respective owners and are shown to indicate the products we supply.
        </p>
      </div>
    </section>
  )
}
