import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-ink-950 px-4 py-24 text-center text-white">
      <Seo title="Page not found" description="The page you are looking for could not be found." noIndex />
      <div>
        <p className="font-display text-8xl font-extrabold text-lime-400">404</p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase sm:text-5xl">Page not found</h1>
        <p className="mt-3 text-white/60">The page you are looking for has moved or does not exist.</p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  )
}
