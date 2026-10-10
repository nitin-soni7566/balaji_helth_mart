/**
 * Central business configuration.
 *
 * Every value marked PLACEHOLDER must be replaced with the client's real
 * details before going live. Changing a value here updates it everywhere
 * on the website (header, footer, contact page, WhatsApp links, SEO tags).
 */
export const SITE = {
  /** Business / trading name shown in header, footer and page titles. */
  name: 'Balaji Health Mart',
  /** Logo text: main word + smaller second line. */
  logoMain: 'Balaji',
  logoSub: 'Health Mart',
  tagline: 'Wholesale Sports Nutrition & Fitness Products',

  /** PLACEHOLDER – public URL of the deployed website (no trailing slash). Used for canonical + Open Graph tags. */
  url: 'https://www.example.com',

  /**
   * WhatsApp number in international format, digits only.
   * Example for India: 91 + 10-digit mobile number → '919876543210'.
   */
  whatsappNumber: '916388121006',

  /** Default message pre-filled when a visitor opens WhatsApp. */
  whatsappDefaultMessage:
    'Hi, I am interested in your wholesale sports nutrition products. Please share your product catalogue and wholesale pricing.',

  /** Phone number as displayed, and the dialable version. */
  phoneDisplay: '+91 63881 21006',
  phoneDial: '+916388121006',

  /** PLACEHOLDER – sales email. */
  email: 'test@example.com',

  /** Business address lines. */
  address: ['Balaji Health Mart', 'Nati Imli', 'Varanasi, Uttar Pradesh, India'],

  /** PLACEHOLDER – business hours. */
  hours: ['Business hours to be confirmed'],

  /**
   * Optional Google Maps embed URL (Google Maps → Share → Embed a map → copy the src).
   * Leave empty to show the map placeholder.
   */
  mapEmbedUrl: 'https://maps.google.com/maps?q=Balaji+Health+Mart+Nati+Imli+Varanasi&z=15&output=embed',

  /** Set to true once the placeholders above have been replaced with real details. */
  detailsConfirmed: false,
} as const

/** Builds a wa.me click-to-chat link with an optional pre-filled message. */
export function whatsappLink(message: string = SITE.whatsappDefaultMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Pre-filled WhatsApp message for a specific product. */
export function productWhatsappMessage(productName: string): string {
  return `Hi, I am interested in wholesale supply of ${productName}. Please share available pack sizes, minimum order quantity and wholesale pricing.`
}
