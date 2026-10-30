import { site } from '../../src/data/site.js'
import { SITE_FILES } from '../constants.js'

export function buildRobots() {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${site.url}/${SITE_FILES.sitemap}`,
    '',
  ].join('\n')
}
