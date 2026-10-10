import { Link } from 'react-router-dom'
import { ArrowRight, Layers, PackageCheck } from 'lucide-react'
import { QUOTE_PATH } from '../data/navigation'
import { WhatsAppButton } from './WhatsAppButton'

const audiences = ['Gyms', 'Fitness Centres', 'Retailers', 'Supplement Shops', 'Distributors']

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]" />
      <div className="absolute top-1/3 right-[-10%] -z-10 size-[560px] rounded-full bg-lime-400/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] -z-10 size-[420px] rounded-full bg-ember-500/10 blur-[120px]" />

      <div className="container-x grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-28">
        <div>
          <p className="eyebrow rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-lime-300">
            <span className="size-1.5 rounded-full bg-lime-400" aria-hidden="true" />
            B2B Wholesale Supplier
          </p>

          <h1 className="mt-6 text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Wholesale <span className="text-lime-400">Sports Nutrition</span> &amp; Protein Products
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Bulk supply of protein, oats, supplements and hydration products for gyms, retailers, distributors and
            fitness businesses.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to={QUOTE_PATH} className="btn-primary px-7 py-4 text-base">
              Get Wholesale Quote
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <WhatsAppButton label="WhatsApp Us" className="btn-outline-light px-7 py-4 text-base" />
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Bulk supply for</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {audiences.map((a) => (
                <li key={a} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/75 ring-1 ring-white/10">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-ink-800 to-ink-900 ring-1 ring-white/10">
        <div className="absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_55%,rgb(198_244_50/0.35),transparent_62%)]" />
        <span className="absolute top-6 left-7 font-display text-[7rem] leading-none font-extrabold text-white/[0.04] uppercase sm:text-[9rem]">
          Bulk
        </span>

        <img
          src="/images/products/electrolyte.svg"
          alt=""
          className="absolute top-[14%] right-[6%] w-[34%] rotate-6 opacity-90"
        />
        <img src="/images/products/alpino-oats.svg" alt="" className="absolute top-[22%] left-[4%] w-[36%] -rotate-6" />
        <img
          src="/images/products/whey-protein.svg"
          alt=""
          className="absolute bottom-[8%] left-1/2 w-[58%] -translate-x-1/2 animate-float drop-shadow-2xl"
        />
        <img
          src="/images/products/alpino-peanut-butter.svg"
          alt=""
          className="absolute bottom-[4%] left-[2%] w-[30%]"
        />
        <img src="/images/products/protein-bar.svg" alt="" className="absolute right-[1%] bottom-[20%] w-[34%]" />
      </div>

      <div className="absolute top-[8%] -left-2 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-ink-900 shadow-2xl sm:-left-8">
        <span className="grid size-10 place-items-center rounded-xl bg-lime-400">
          <PackageCheck className="size-5" />
        </span>
        <span>
          <span className="block text-sm font-bold">Bulk Orders</span>
          <span className="block text-xs text-ink-900/60">Cartons &amp; mixed loads</span>
        </span>
      </div>

      <div className="absolute -right-2 -bottom-5 flex items-center gap-3 rounded-2xl bg-ink-900 p-3 pr-5 shadow-2xl ring-1 ring-white/10 sm:-right-6">
        <span className="grid size-10 place-items-center rounded-xl bg-ember-500 text-white">
          <Layers className="size-5" />
        </span>
        <span>
          <span className="block text-sm font-bold text-white">Multiple Brands</span>
          <span className="block text-xs text-white/60">One supplier, one order</span>
        </span>
      </div>
    </div>
  )
}
