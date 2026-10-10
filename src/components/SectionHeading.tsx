import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  /** Heading level – keep the page hierarchy correct (one h1 per page). */
  as?: 'h1' | 'h2'
  action?: ReactNode
  /** id for the heading element, e.g. for aria-labelledby on the section. */
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  action,
  id,
}: Props) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <div
      className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}
    >
      <div className="max-w-2xl">
        <p className={`eyebrow ${dark ? 'text-lime-400' : 'text-lime-600'}`}>
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <Heading
          id={id}
          className={`mt-3 text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl ${dark ? 'text-white' : 'text-ink-900'}`}
        >
          {title}
        </Heading>
        {description && (
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/65' : 'text-ink-900/65'}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
