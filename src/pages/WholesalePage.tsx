import { useSearchParams } from 'react-router-dom'
import { ChevronDown, Clock, MessageSquareText, PackageCheck } from 'lucide-react'
import { EnquiryForm } from '../components/EnquiryForm'
import { OrderSteps } from '../components/OrderSteps'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { audiences, faqs } from '../data/content'
import { categories } from '../data/categories'

export function WholesalePage() {
  const [params] = useSearchParams()
  const product = params.get('product') ?? ''

  return (
    <>
      <Seo
        title="Bulk Sports Nutrition Supply for Gyms, Retailers & Distributors"
        description="Wholesale protein supplier for gyms, fitness centres, supplement shops, retailers and distributors. Request a quote for bulk supplements, oats, peanut butter and hydration products."
      />
      <PageHero
        crumb="Wholesale"
        eyebrow="Bulk orders"
        title={
          <>
            Bulk sports nutrition supply for <span className="text-lime-400">your business</span>
          </>
        }
        description="Whether you run a single gym or supply an entire region, we provide wholesale protein, oats, peanut butter, supplements and hydration products in the quantities you need."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#enquiry" className="btn-primary px-7 py-4 text-base">
            Request Wholesale Quote
          </a>
          <WhatsAppButton label="Contact on WhatsApp" className="btn-outline-light px-7 py-4 text-base" />
        </div>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="audiences-heading">
        <div className="container-x">
          <SectionHeading
            id="audiences-heading"
            eyebrow="Who we supply"
            title="Wholesale supply for every fitness business"
            description="Bulk supply is available for:"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ title, description, icon: Icon }, i) => (
              <li key={title}>
                <Reveal
                  delay={(i % 3) * 80}
                  className="group flex h-full gap-5 rounded-3xl border border-ink-900/10 p-6 transition hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/10"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime-400/20 text-lime-600 transition group-hover:bg-lime-400 group-hover:text-ink-950">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span>
                    <h3 className="text-2xl font-bold uppercase">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-900/60">{description}</p>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink-950 py-16 text-white">
        <div className="container-x">
          <h2 className="font-sans text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">
            Products available in bulk
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {categories.map(({ slug, name, icon: Icon }) => (
              <li
                key={slug}
                className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm text-white/85 ring-1 ring-white/10"
              >
                <Icon className="size-4 text-lime-400" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-20 bg-mist py-20 sm:py-24" aria-labelledby="enquiry-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-900/5 sm:p-10">
            <p className="eyebrow text-lime-600">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              Wholesale enquiry
            </p>
            <h2 id="enquiry-heading" className="mt-3 text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl">
              Get your wholesale quote
            </h2>
            <p className="mt-3 mb-8 text-ink-900/60">
              Tell us what you need. The more detail you share, the more accurate your quote will be.
            </p>
            <EnquiryForm variant="wholesale" defaultProduct={product} />
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[2rem] bg-ink-900 p-8 text-white">
              <h3 className="text-2xl font-bold uppercase">Prefer WhatsApp?</h3>
              <p className="mt-2 text-white/65">
                Message us directly for the product catalogue and wholesale price list.
              </p>
              <WhatsAppButton label="Chat on WhatsApp" className="btn-whatsapp mt-6 w-full py-4" />
            </div>
            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-ink-900/5">
              <h3 className="text-2xl font-bold uppercase">Helpful to include</h3>
              <ul className="mt-4 space-y-4 text-sm text-ink-900/70">
                <li className="flex gap-3">
                  <PackageCheck className="size-5 shrink-0 text-lime-600" aria-hidden="true" />
                  Brands, flavours and pack sizes you are looking for
                </li>
                <li className="flex gap-3">
                  <MessageSquareText className="size-5 shrink-0 text-lime-600" aria-hidden="true" />
                  Approximate quantity per product, or a monthly estimate
                </li>
                <li className="flex gap-3">
                  <Clock className="size-5 shrink-0 text-lime-600" aria-hidden="true" />
                  When you need the stock delivered
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <OrderSteps />

      <section className="pb-20 sm:pb-28" aria-labelledby="faq-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Wholesale questions"
            description="Quick answers about ordering in bulk."
          />
          <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-ink-900/40 transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 pr-8 leading-relaxed text-ink-900/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
