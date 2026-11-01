import { site } from '@data'

export function getPageTitle(title) {
  const { name } = site

  if (!title) return name

  return `${title} | ${name}`
}
