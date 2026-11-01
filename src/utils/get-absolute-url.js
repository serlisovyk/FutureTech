import { site } from '@data'

export function getAbsoluteUrl(path) {
  const { url } = site

  return `${url}${path}`
}
