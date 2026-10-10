import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { productWhatsappMessage } from '../config/site'
import { quotePathForProduct } from '../data/navigation'
import type { Product } from '../types'
import { productDisplayName } from '../utils/product'
import { WhatsAppButton } from './WhatsAppButton'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const fullName = productDisplayName(product)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-900/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-mist to-[#e6e9df]">
        <div className="absolute inset-x-10 bottom-4 h-1/2 rounded-full bg-lime-400/0 blur-2xl transition duration-500 group-hover:bg-lime-400/40" />
        <img
          src={product.image}
          alt={`${fullName} – wholesale ${product.category.toLowerCase()}`}
          loading="lazy"
          width={400}
          height={400}
          className="relative mx-auto h-full w-auto object-contain p-4 transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900 shadow-sm backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-lime-600 uppercase">{product.brand}</p>
        <h3 className="mt-1.5 text-2xl leading-tight font-bold text-ink-900 uppercase">{product.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-900/60">{product.description}</p>

        <div className="mt-auto flex gap-2 pt-6">
          <Link to={quotePathForProduct(fullName)} className="btn-dark flex-1 px-4">
            Wholesale Enquiry
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton
            iconOnly
            label={`Ask about ${fullName} on WhatsApp`}
            message={productWhatsappMessage(fullName)}
            className="grid size-[46px] shrink-0 place-items-center rounded-full bg-whatsapp/10 text-whatsapp-dark transition hover:bg-whatsapp hover:text-white"
          />
        </div>
      </div>
    </article>
  )
}
