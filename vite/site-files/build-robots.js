import { site } from '../../src/data/site.js'
import { SITE_FILES } from '../constants.js'

function toDisallow({ path }) {
  return `Disallow: ${path}`
}

export function buildRobots(pages) {
  const hidden = pages.filter(({ isIndexable }) => !isIndexable)

  return [
    'User-agent: *',
    ...hidden.map(toDisallow),
    '',
    `Sitemap: ${site.url}/${SITE_FILES.sitemap}`,
    '',
  ].join('\n')
}
