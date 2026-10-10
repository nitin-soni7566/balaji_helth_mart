import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE } from '../config/site'

type Props = {
  title: string
  description: string
  /** Set false to use `title` as-is without appending the business name. */
  appendSiteName?: boolean
  noIndex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

/** Per-page title, description, canonical and Open Graph / Twitter tags. */
export function Seo({ title, description, appendSiteName = true, noIndex = false }: Props) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = appendSiteName ? `${title} | ${SITE.name}` : title
    const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertCanonical(url)
  }, [title, description, appendSiteName, noIndex, pathname])

  return null
}
