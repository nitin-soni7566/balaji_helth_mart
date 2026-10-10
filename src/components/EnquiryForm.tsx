import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, Loader2, Mail, RotateCcw, Send } from 'lucide-react'
import { categoryNames } from '../data/categories'
import { products } from '../data/products'
import {
  emptyEnquiry,
  enquiryMailtoLink,
  enquiryWhatsappLink,
  isRequired,
  submitEnquiry,
  validateEnquiry,
  type EnquiryData,
  type EnquiryErrors,
  type EnquiryVariant,
} from '../utils/enquiry'
import { productDisplayName } from '../utils/product'
import { WhatsAppIcon } from './WhatsAppIcon'

type Props = {
  variant?: EnquiryVariant
  /** Pre-selects the "Product interested in" field (e.g. from a product card). */
  defaultProduct?: string
}

const productOptions = products.map(productDisplayName)
const OTHER_OPTIONS = ['Multiple products / mixed order', 'Other – mention in message']

export function EnquiryForm({ variant = 'wholesale', defaultProduct = '' }: Props) {
  const [data, setData] = useState<EnquiryData>({ ...emptyEnquiry, product: defaultProduct })
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const formId = useId()

  // Keep the product field in sync when the visitor arrives from a different product card.
  const [lastDefault, setLastDefault] = useState(defaultProduct)
  if (defaultProduct !== lastDefault) {
    setLastDefault(defaultProduct)
    setData((d) => ({ ...d, product: defaultProduct }))
  }

  const isWholesale = variant === 'wholesale'
  const extraProduct =
    data.product && ![...productOptions, ...categoryNames, ...OTHER_OPTIONS].includes(data.product)
      ? data.product
      : null

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name as keyof EnquiryData]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validateEnquiry(data, variant)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid}`)?.focus()
      return
    }
    setStatus('submitting')
    await submitEnquiry(data, variant)
    setStatus('done')
  }

  const reset = () => {
    setData({ ...emptyEnquiry })
    setErrors({})
    setStatus('idle')
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-start" role="status" aria-live="polite">
        <span className="grid size-14 place-items-center rounded-2xl bg-lime-400 text-ink-950">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-3xl font-extrabold uppercase sm:text-4xl">
          Thanks, {data.name.trim().split(' ')[0]}! Your enquiry is ready.
        </h3>
        <p className="mt-3 max-w-lg text-ink-900/65">
          Send it to our team in one tap. Your details are already filled in – we will reply with availability{' '}
          {isWholesale ? 'and wholesale pricing' : 'and next steps'}.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={enquiryWhatsappLink(data, variant)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-7 py-4 text-base"
          >
            <WhatsAppIcon className="size-5" />
            Send on WhatsApp
          </a>
          <a href={enquiryMailtoLink(data, variant)} className="btn-dark px-7 py-4 text-base">
            <Mail className="size-5" aria-hidden="true" />
            Send by Email
          </a>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900/60 hover:text-ink-900"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Start a new enquiry
        </button>
      </div>
    )
  }

  const field = (name: keyof EnquiryData) => ({
    id: `${formId}-${name}`,
    name,
    value: data[name],
    onChange,
    required: isRequired(variant, name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${formId}-${name}-error` : undefined,
    className: 'field',
  })

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id={`${formId}-name`} label="Your Name" required error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Full name" {...field('name')} />
      </Field>

      {isWholesale && (
        <Field id={`${formId}-businessName`} label="Business Name" required error={errors.businessName}>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Gym / store / company name"
            {...field('businessName')}
          />
        </Field>
      )}

      <Field id={`${formId}-phone`} label="Phone Number" required error={errors.phone}>
        <input type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" {...field('phone')} />
      </Field>

      <Field id={`${formId}-email`} label="Email" error={errors.email}>
        <input type="email" autoComplete="email" placeholder="you@business.com" {...field('email')} />
      </Field>

      {isWholesale && (
        <>
          <Field id={`${formId}-city`} label="City" required error={errors.city}>
            <input type="text" autoComplete="address-level2" placeholder="Delivery city" {...field('city')} />
          </Field>

          <Field id={`${formId}-product`} label="Product Interested In" required error={errors.product}>
            <select {...field('product')}>
              <option value="">Select a product or category</option>
              {extraProduct && <option value={extraProduct}>{extraProduct}</option>}
              <optgroup label="Categories">
                {categoryNames.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Products">
                {productOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Other">
                {OTHER_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </optgroup>
            </select>
          </Field>

          <Field id={`${formId}-quantity`} label="Approximate Quantity" className="sm:col-span-2" error={errors.quantity}>
            <input type="text" placeholder="e.g. 20 units, 5 cartons, monthly supply" {...field('quantity')} />
          </Field>
        </>
      )}

      <Field id={`${formId}-message`} label="Message" required={!isWholesale} className="sm:col-span-2" error={errors.message}>
        <textarea
          rows={4}
          placeholder={
            isWholesale
              ? 'Flavours, pack sizes, brands or anything else we should know'
              : 'How can we help?'
          }
          {...field('message')}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-900/50">
          Fields marked <span className="text-red-600">*</span> are required. We only use your details to respond to
          this enquiry.
        </p>
        <button type="submit" className="btn-primary px-8 py-4 text-base" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-5" aria-hidden="true" />
          )}
          {isWholesale ? 'Request Wholesale Quote' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  error,
  className = '',
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && (
          <span className="ml-0.5 text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
