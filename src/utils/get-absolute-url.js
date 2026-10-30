import { site } from '@data/site.js'

export function getAbsoluteUrl(path) {
  return `${site.url}${path}`
}
