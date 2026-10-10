import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SITE } from '../config/site'
import { categories } from '../data/categories'
import { navItems } from '../data/navigation'
import { Logo } from './Logo'
import { WhatsAppButton } from './WhatsAppButton'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 text-lg font-semibold text-white">{SITE.name}</p>
          <p className="mt-1 text-white/60">{SITE.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            Bulk supply of protein, oats, peanut butter, supplements and hydration products for gyms, retailers and
            distributors.
          </p>
          <WhatsAppButton label="Chat on WhatsApp" className="btn-whatsapp mt-6" />
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-white/40 uppercase">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/75 transition hover:text-lime-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-white/40 uppercase">
            Product Categories
          </h2>
          <ul className="mt-5 space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/products?category=${c.slug}`} className="text-white/75 transition hover:text-lime-400">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-white/40 uppercase">Contact</h2>
          <ul className="mt-5 space-y-4 text-white/75">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-lime-400" aria-hidden="true" />
              <a href={`tel:${SITE.phoneDial}`} className="transition hover:text-lime-400">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-lime-400" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="break-all transition hover:text-lime-400">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-lime-400" aria-hidden="true" />
              <address className="not-italic">
                {SITE.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-lime-400" aria-hidden="true" />
              <span>{SITE.hours.join(' · ')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {SITE.name}. All rights reserved.
          </p>
          <p>Brand names and trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  )
}
