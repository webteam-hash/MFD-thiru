import { useEffect } from 'react'
import { useLocation } from 'react-router'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  type?: string
  schema?: object
}

const DEFAULT_TITLE = 'MFDThiru | AMFI Registered Mutual Fund Distributor (ARN 26890)'
const DEFAULT_DESC = 'MFDThiru — AMFI-registered Mutual Fund Distributor (ARN 26890) led by J. C. Thirumurugan with 20+ years experience. SIP, Lump Sum, Retirement & Goal-Based Mutual Fund planning in Chennai.'
const BASE_URL = 'https://mfdthiru.in'

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical,
  type = 'website',
  schema,
}: SEOProps) {
  const location = useLocation()
  const currentUrl = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${location.pathname}`

  useEffect(() => {
    // 1. Update Title
    document.title = title.includes('MFDThiru') ? title : `${title} | MFDThiru`

    // 2. Update or Create Meta Tags
    const metaTags: Array<{ name?: string; property?: string; content: string }> = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:site_name', content: 'MFDThiru' },
      { property: 'og:image', content: `${BASE_URL}/logo.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${BASE_URL}/logo.png` },
    ]

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (name) el.setAttribute('name', name)
        if (property) el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    })

    // 3. Update Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', currentUrl)

    // 4. Inject Schema.org JSON-LD
    if (schema) {
      let scriptEl = document.querySelector('script[type="application/ld+json"]#seo-schema')
      if (!scriptEl) {
        scriptEl = document.createElement('script')
        scriptEl.setAttribute('type', 'application/ld+json')
        scriptEl.setAttribute('id', 'seo-schema')
        document.head.appendChild(scriptEl)
      }
      scriptEl.textContent = JSON.stringify(schema)
    }
  }, [title, description, currentUrl, type, schema])

  return null
}

// Default Organization & FinancialService Schema
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'MFDThiru',
  legalName: 'J. C. Thirumurugan',
  description: 'AMFI Registered Mutual Fund Distributor (ARN 26890) offering personal mutual fund distribution, goal-based planning, and retirement corpus deployment.',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  telephone: '+919841026890',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 8/1, 3rd Cross Street, Unique Sterling Apartment, Ground Floor, Sterling Road, Nungambakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600034',
    addressCountry: 'IN',
  },
  identifier: {
    '@type': 'PropertyValue',
    name: 'AMFI ARN',
    value: '26890',
  },
  founder: {
    '@type': 'Person',
    name: 'J. C. Thirumurugan',
    jobTitle: 'Founder & AMFI Registered Mutual Fund Distributor',
  },
}
