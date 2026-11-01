import { site } from '@data'
import { getAbsoluteUrl } from './get-absolute-url.js'

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: getAbsoluteUrl('/'),
    logo: getAbsoluteUrl(site.logo),
  }
}
