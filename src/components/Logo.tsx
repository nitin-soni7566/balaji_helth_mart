import { Link } from 'react-router-dom'
import { SITE } from '../config/site'

type Props = {
  tone?: 'light' | 'dark'
}

/** Text-based logo placeholder – swap the mark for the client's logo file when available. */
export function Logo({ tone = 'dark' }: Props) {
  const light = tone === 'light'
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${SITE.name} – home`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime-400 text-ink-950 transition group-hover:rotate-[-6deg]">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" strokeLinejoin="round" />
          <path d="M4 5h16v3H4z" strokeLinejoin="round" />
          <path d="M9.5 14.5l2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-wide uppercase ${light ? 'text-white' : 'text-ink-900'}`}>
          {SITE.logoMain}
        </span>
        <span className={`text-[10px] font-semibold tracking-[0.28em] uppercase ${light ? 'text-lime-400' : 'text-lime-600'}`}>
          {SITE.logoSub}
        </span>
      </span>
    </Link>
  )
}
