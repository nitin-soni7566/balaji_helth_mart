import { whatsappLink } from '../config/site'
import { WhatsAppIcon } from './WhatsAppIcon'

type Props = {
  /** Pre-filled message. Defaults to the site-wide enquiry message. */
  message?: string
  label?: string
  className?: string
  /** Render as an icon-only button (label is still used for screen readers). */
  iconOnly?: boolean
}

/** Inline WhatsApp call-to-action that opens a chat with a pre-filled message. */
export function WhatsAppButton({
  message,
  label = 'WhatsApp Us',
  className = 'btn-whatsapp',
  iconOnly = false,
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={iconOnly ? label : undefined}
      title={iconOnly ? label : undefined}
    >
      <WhatsAppIcon className={iconOnly ? 'size-5' : 'size-[18px]'} />
      {!iconOnly && <span>{label}</span>}
    </a>
  )
}

/** Floating WhatsApp button shown on every page. */
export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Get catalogue & pricing
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-ink-950/25 transition duration-300 group-hover:scale-105 group-hover:bg-whatsapp-dark">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-whatsapp/50" aria-hidden="true" />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  )
}
