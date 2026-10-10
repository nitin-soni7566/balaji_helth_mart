import { SITE, whatsappLink } from '../config/site'

export type EnquiryVariant = 'wholesale' | 'contact'

export type EnquiryData = {
  name: string
  businessName: string
  phone: string
  email: string
  city: string
  product: string
  quantity: string
  message: string
}

export const emptyEnquiry: EnquiryData = {
  name: '',
  businessName: '',
  phone: '',
  email: '',
  city: '',
  product: '',
  quantity: '',
  message: '',
}

export type EnquiryErrors = Partial<Record<keyof EnquiryData, string>>

const REQUIRED: Record<EnquiryVariant, (keyof EnquiryData)[]> = {
  wholesale: ['name', 'businessName', 'phone', 'city', 'product'],
  contact: ['name', 'phone', 'message'],
}

export function isRequired(variant: EnquiryVariant, field: keyof EnquiryData): boolean {
  return REQUIRED[variant].includes(field)
}

export function validateEnquiry(data: EnquiryData, variant: EnquiryVariant): EnquiryErrors {
  const errors: EnquiryErrors = {}

  for (const field of REQUIRED[variant]) {
    if (!data[field].trim()) errors[field] = 'This field is required.'
  }

  const digits = data.phone.replace(/\D/g, '')
  if (data.phone.trim() && (digits.length < 10 || digits.length > 13)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  return errors
}

const LABELS: [keyof EnquiryData, string][] = [
  ['name', 'Name'],
  ['businessName', 'Business'],
  ['phone', 'Phone'],
  ['email', 'Email'],
  ['city', 'City'],
  ['product', 'Product interested in'],
  ['quantity', 'Approx. quantity'],
  ['message', 'Message'],
]

/** Formats the enquiry as plain text for WhatsApp / email. */
export function formatEnquiry(data: EnquiryData, variant: EnquiryVariant): string {
  const heading =
    variant === 'wholesale' ? 'Hi, I would like a wholesale quote.' : 'Hi, I have an enquiry from your website.'
  const lines = LABELS.filter(([key]) => data[key].trim()).map(([key, label]) => `${label}: ${data[key].trim()}`)
  return [heading, '', ...lines].join('\n')
}

export function enquiryWhatsappLink(data: EnquiryData, variant: EnquiryVariant): string {
  return whatsappLink(formatEnquiry(data, variant))
}

export function enquiryMailtoLink(data: EnquiryData, variant: EnquiryVariant): string {
  const subject =
    variant === 'wholesale'
      ? `Wholesale quote request – ${data.businessName || data.name}`
      : `Website enquiry – ${data.name}`
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formatEnquiry(data, variant))}`
}

/**
 * Hook point for a real backend (e.g. an API route, Formspree, or a CRM).
 * The site currently has no server, so this resolves immediately and the
 * visitor is offered WhatsApp / email to deliver the enquiry.
 */
export async function submitEnquiry(data: EnquiryData, variant: EnquiryVariant): Promise<void> {
  void data
  void variant
}
