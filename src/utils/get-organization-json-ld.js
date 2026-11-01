import { site } from '@data'
import { getAbsoluteUrl } from './get-absolute-url.js'

export function getOrganizationJsonLd() {
  const { name, logo } = site

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url: getAbsoluteUrl('/'),
    logo: getAbsoluteUrl(logo),
  }
}
