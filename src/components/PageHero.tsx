import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Props = {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  /** Breadcrumb label for the current page. */
  crumb: string
  children?: ReactNode
}

/** Dark intro band used at the top of inner pages. Renders the page's h1. */
export function PageHero({ eyebrow, title, description, crumb, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_80%_0%,black_10%,transparent_70%)]" />
      <div className="absolute -top-40 right-0 -z-10 size-[480px] rounded-full bg-lime-400/15 blur-[120px]" />
      <div className="container-x py-14 sm:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-white/50">
            <li>
              <Link to="/" className="transition hover:text-lime-400">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4" />
            </li>
            <li aria-current="page" className="text-white/80">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="eyebrow mt-8 text-lime-400">
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl leading-[0.92] font-extrabold uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
        {children}
      </div>
    </section>
  )
}
