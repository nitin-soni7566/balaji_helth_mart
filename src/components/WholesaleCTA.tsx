import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { QUOTE_PATH } from '../data/navigation'
import { WhatsAppButton } from './WhatsAppButton'

type Props = {
  title?: string
  description?: string
}

export function WholesaleCTA({
  title = 'Ready to stock up for your business?',
  description = 'Share your product list and quantities. We will get back with availability, pack sizes and wholesale pricing.',
}: Props) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-lime-400 px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
          <div
            className="absolute -top-24 -right-24 -z-10 size-96 rounded-full border-[56px] border-ink-950/[0.06]"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 left-1/3 -z-10 size-72 rounded-full border-[40px] border-ink-950/[0.05]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl leading-[0.95] font-extrabold text-ink-950 uppercase sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-ink-950/70">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to={QUOTE_PATH} className="btn-dark px-7 py-4 text-base">
                Get Wholesale Quote
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <WhatsAppButton label="Contact on WhatsApp" className="btn-whatsapp px-7 py-4 text-base" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
