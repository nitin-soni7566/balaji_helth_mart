import {
  BadgeIndianRupee,
  Building2,
  Dumbbell,
  Handshake,
  Layers,
  MessageSquareText,
  PackageCheck,
  ShieldCheck,
  Store,
  Truck,
  Users,
  Warehouse,
  ClipboardList,
  FileText,
  type LucideIcon,
} from 'lucide-react'

type Item = { title: string; description: string; icon: LucideIcon }

export const reasons: Item[] = [
  {
    title: 'Genuine Products',
    description: 'Sealed, original packs from the brands we deal in, with batch and expiry details visible on every unit.',
    icon: ShieldCheck,
  },
  {
    title: 'Competitive Wholesale Pricing',
    description: 'Business pricing based on product and order volume, so you can maintain healthy retail margins.',
    icon: BadgeIndianRupee,
  },
  {
    title: 'Bulk Order Supply',
    description: 'From a few cartons to recurring monthly orders – we plan supply around your requirement.',
    icon: PackageCheck,
  },
  {
    title: 'Multiple Brands',
    description: 'Protein, oats, peanut butter, vitamins and hydration from several brands in a single order.',
    icon: Layers,
  },
  {
    title: 'Reliable Delivery',
    description: 'Careful packing and clear dispatch communication, so you know when stock will arrive.',
    icon: Truck,
  },
  {
    title: 'Support for Retailers & Gyms',
    description: 'Help choosing fast-moving products, pack sizes and flavours for your customers.',
    icon: Handshake,
  },
]

export const audiences: Item[] = [
  { title: 'Gyms', description: 'Stock supplements for your members and front-desk counter.', icon: Dumbbell },
  { title: 'Fitness Centres', description: 'Studios, CrossFit boxes, sports clubs and academies.', icon: Users },
  { title: 'Retail Stores', description: 'Grocery, health food and general retail outlets.', icon: Store },
  { title: 'Supplement Shops', description: 'Dedicated nutrition stores looking for multi-brand supply.', icon: Warehouse },
  { title: 'Distributors', description: 'Regional distributors and sub-distributors buying in volume.', icon: Truck },
  {
    title: 'Corporate / Institutional',
    description: 'Corporate wellness, hostels, canteens and institutions.',
    icon: Building2,
  },
]

export const orderSteps: Item[] = [
  {
    title: 'Share your requirement',
    description: 'Send the products, brands and approximate quantities you need through the form or WhatsApp.',
    icon: ClipboardList,
  },
  {
    title: 'Receive your quote',
    description: 'We confirm availability, pack sizes and wholesale pricing for your order.',
    icon: FileText,
  },
  {
    title: 'Confirm the order',
    description: 'Finalise quantities, payment terms and delivery details directly with our team.',
    icon: MessageSquareText,
  },
  {
    title: 'Dispatch & delivery',
    description: 'Your order is packed and dispatched, with updates shared along the way.',
    icon: Truck,
  },
]

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is the minimum order quantity?',
    answer:
      'Minimum order quantities depend on the product and brand. Share your requirement and we will confirm the MOQ along with your quote.',
  },
  {
    question: 'Can I order products from multiple brands together?',
    answer: 'Yes. You can combine products from different brands and categories in a single wholesale order.',
  },
  {
    question: 'Do you supply outside my city?',
    answer:
      'Tell us your delivery city in the enquiry form and we will confirm delivery options and timelines for your location.',
  },
  {
    question: 'How do I get the wholesale price list?',
    answer:
      'Submit the enquiry form or message us on WhatsApp. Pricing depends on product, quantity and current stock, so we share a quote for your specific requirement.',
  },
  {
    question: 'Can I buy online on this website?',
    answer:
      'This website is for wholesale enquiries only. Orders, payment and delivery are confirmed directly with our team after you receive a quote.',
  },
]
