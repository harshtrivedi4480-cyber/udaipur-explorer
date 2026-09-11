import { useEffect } from 'react'

interface Crumb {
  label: string
  href?: string
}

interface SEOOptions {
  title: string
  description: string
  image?: string
  path: string
  /** Same shape as the items passed to <Breadcrumbs>. When provided, a matching BreadcrumbList JSON-LD block is emitted. */
  breadcrumbs?: Crumb[]
  /** Extra JSON-LD to merge in for this page (e.g. an Article schema on a story). Only include fields backed by real data. */
  schema?: Record<string, unknown>
}

const SITE_NAME = 'Udaipur Explorer'
const SITE_URL = 'https://udaipurexplorer.example.com'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setJsonLd(id: string, data: Record<string, unknown> | null) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function useSEO({ title, description, image, path, breadcrumbs, schema }: SEOOptions) {
  useEffect(() => {
    const fullTitle = `${title}  ${SITE_NAME}`
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', `${SITE_URL}${path}`)
    if (image) {
      const isAbsolute = /^https?:\/\//.test(image)
      setMeta('property', 'og:image', isAbsolute ? image : `${SITE_URL}${image}`)
    }
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`)

    // Every page is at least a WebPage, plus an optional page-specific schema
    // (e.g. Article for a story) merged on top.
    setJsonLd('ld-page', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
      ...schema,
    })

    setJsonLd(
      'ld-breadcrumb',
      breadcrumbs && breadcrumbs.length > 0
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: crumb.label,
              ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
            })),
          }
        : null
    )

    return () => {
      setJsonLd('ld-page', null)
      setJsonLd('ld-breadcrumb', null)
    }
  }, [title, description, image, path, breadcrumbs, schema])
}

