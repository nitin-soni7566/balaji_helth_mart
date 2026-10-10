import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navItems, QUOTE_PATH } from '../data/navigation'
import { Logo } from './Logo'
import { WhatsAppButton } from './WhatsAppButton'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  const [lastLocation, setLastLocation] = useState(location)
  if (location !== lastLocation) {
    setLastLocation(location)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        // No backdrop-blur while open: it would become the containing block of the fixed mobile menu.
        open
          ? 'border-ink-900/10 bg-white'
          : scrolled
            ? 'border-ink-900/10 bg-white/90 shadow-[0_6px_30px_-12px_rgb(0_0_0/0.15)] backdrop-blur-xl'
            : 'border-transparent bg-white'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-ink-900 text-white' : 'text-ink-900/70 hover:bg-ink-900/5 hover:text-ink-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link to={QUOTE_PATH} className="btn-primary hidden sm:inline-flex">
            Get Wholesale Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton
            iconOnly
            label="Contact on WhatsApp"
            className="grid size-11 place-items-center rounded-full bg-whatsapp text-white transition hover:bg-whatsapp-dark lg:hidden"
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition hover:bg-ink-900/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-white transition duration-300 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex h-full flex-col overflow-y-auto pt-4 pb-8">
          <ul className="divide-y divide-ink-900/10">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 font-display text-3xl font-bold uppercase transition ${
                      isActive ? 'text-lime-600' : 'text-ink-900 hover:text-lime-600'
                    }`
                  }
                >
                  {item.label}
                  <ArrowRight className="size-5 opacity-40" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <Link to={QUOTE_PATH} className="btn-primary w-full py-4">
              Get Wholesale Quote
            </Link>
            <WhatsAppButton label="Contact on WhatsApp" className="btn-whatsapp w-full py-4" />
          </div>
        </nav>
      </div>
    </header>
  )
}
