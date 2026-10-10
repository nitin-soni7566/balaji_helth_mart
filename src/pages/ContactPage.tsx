import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { EnquiryForm } from '../components/EnquiryForm'
import { PageHero } from '../components/PageHero'
import { PlaceholderNote } from '../components/PlaceholderNote'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { SITE, whatsappLink } from '../config/site'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us – Wholesale Protein & Supplement Enquiries"
        description="Contact our wholesale team by phone, WhatsApp or email for bulk protein supplements, sports nutrition products and wholesale pricing."
      />
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title={
          <>
            Talk to our <span className="text-lime-400">wholesale team</span>
          </>
        }
        description="Questions about products, pricing or delivery? Reach us on WhatsApp for the fastest response, or use the form below."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard icon={<Phone className="size-6" />} title="Phone">
              <a href={`tel:${SITE.phoneDial}`} className="hover:text-lime-600">
                {SITE.phoneDisplay}
              </a>
            </ContactCard>
            <ContactCard icon={<WhatsAppIcon className="size-6" />} title="WhatsApp" accent>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-whatsapp-dark">
                Chat with us
              </a>
            </ContactCard>
            <ContactCard icon={<Mail className="size-6" />} title="Email">
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-lime-600">
                {SITE.email}
              </a>
            </ContactCard>
            <ContactCard icon={<Clock className="size-6" />} title="Business Hours">
              {SITE.hours.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </ContactCard>
          </ul>
          <div className="mt-6">
            <PlaceholderNote>
              The email address and business hours are sample values. Update them in{' '}
              <code className="font-mono text-xs">src/config/site.ts</code>.
            </PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-24" aria-labelledby="contact-form-heading">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-900/5 sm:p-10">
            <h2 id="contact-form-heading" className="text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl">
              Send us a message
            </h2>
            <p className="mt-3 mb-8 text-ink-900/60">
              For a detailed wholesale quote, use the{' '}
              <Link
                to="/wholesale#enquiry"
                className="font-semibold text-ink-900 underline decoration-lime-500 underline-offset-4"
              >
                wholesale enquiry form
              </Link>
              .
            </p>
            <EnquiryForm variant="contact" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-[2rem] bg-ink-950 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold uppercase">Fastest reply on WhatsApp</h2>
                <p className="mt-1 text-white/60">Get the catalogue and wholesale price list.</p>
              </div>
              <WhatsAppButton label="WhatsApp Us" className="btn-whatsapp shrink-0 py-4" />
            </div>

            <div className="flex flex-1 flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink-900/5">
              <div className="flex items-start gap-3 p-6">
                <MapPin className="mt-0.5 size-5 shrink-0 text-lime-600" aria-hidden="true" />
                <div>
                  <h2 className="font-sans text-base font-semibold">Business Address</h2>
                  <address className="mt-1 text-ink-900/65 not-italic">
                    {SITE.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
              {SITE.mapEmbedUrl ? (
                <iframe
                  src={SITE.mapEmbedUrl}
                  title={`${SITE.name} location on Google Maps`}
                  className="min-h-72 w-full flex-1 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative grid min-h-72 flex-1 place-items-center overflow-hidden bg-[#e9ece4]">
                  <svg className="absolute inset-0 size-full text-ink-900/[0.07]" aria-hidden="true">
                    <defs>
                      <pattern id="map-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M48 0H0v48" fill="none" stroke="currentColor" strokeWidth="2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#map-grid)" />
                    <path d="M-20 180 C 120 120, 220 260, 420 160 S 700 120, 900 220" stroke="currentColor" strokeWidth="18" fill="none" />
                    <path d="M260 -20 C 240 120, 330 240, 300 420" stroke="currentColor" strokeWidth="12" fill="none" />
                  </svg>
                  <div className="relative flex flex-col items-center text-center">
                    <span className="grid size-14 place-items-center rounded-full bg-ink-900 text-lime-400 shadow-xl">
                      <MapPin className="size-6" aria-hidden="true" />
                    </span>
                    <p className="mt-3 font-semibold">Google Map placeholder</p>
                    <p className="max-w-60 text-sm text-ink-900/55">Map will appear once the business address is added.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  icon,
  title,
  accent = false,
  children,
}: {
  icon: ReactNode
  title: string
  accent?: boolean
  children: ReactNode
}) {
  return (
    <li className="rounded-3xl border border-ink-900/10 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
      <span
        className={`grid size-12 place-items-center rounded-2xl ${accent ? 'bg-whatsapp text-white' : 'bg-ink-900 text-lime-400'}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <h2 className="mt-5 font-sans text-sm font-semibold tracking-[0.15em] text-ink-900/45 uppercase">{title}</h2>
      <div className="mt-1 text-lg font-semibold text-ink-900">{children}</div>
    </li>
  )
}
