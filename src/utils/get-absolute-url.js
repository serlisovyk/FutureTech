import { site } from '@data'

export function getAbsoluteUrl(path) {
  return `${site.url}${path}`
}
