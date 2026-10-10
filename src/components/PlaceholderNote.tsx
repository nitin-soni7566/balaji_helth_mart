import type { ReactNode } from 'react'
import { Info } from 'lucide-react'
import { SITE } from '../config/site'

/**
 * Clearly marked note for content the client still needs to provide.
 * Hidden automatically once `SITE.detailsConfirmed` is set to true.
 */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  if (SITE.detailsConfirmed) return null
  return (
    <p className="flex gap-2 rounded-2xl border border-dashed border-ember-500/50 bg-ember-500/5 p-4 text-sm text-ink-900/70">
      <Info className="mt-0.5 size-4 shrink-0 text-ember-500" aria-hidden="true" />
      <span>
        <strong className="text-ember-500">Placeholder:</strong> {children}
      </span>
    </p>
  )
}
