import { site } from '@data/site.js'

export function getPageTitle(title) {
  if (!title) return site.name

  return `${title} | ${site.name}`
}
