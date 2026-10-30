import { site } from '@data/site.js'
import { getAbsoluteUrl } from './get-absolute-url.js'

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: getAbsoluteUrl('/'),
    logo: getAbsoluteUrl(site.icons.apple),
  }
}
