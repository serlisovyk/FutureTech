import { site } from '@data'

export function getPageTitle(title) {
  if (!title) return site.name

  return `${title} | ${site.name}`
}
