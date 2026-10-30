import { SITE_FILES } from '../constants.js'
import { buildLlms } from '../site-files/build-llms.js'
import { buildRobots } from '../site-files/build-robots.js'
import { buildSitemap } from '../site-files/build-sitemap.js'
import { readPages } from '../site-files/read-pages.js'

export function siteFiles() {
  return {
    name: 'site-files',
    apply: 'build',
    enforce: 'post',
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        const pages = readPages(bundle)

        if (pages.length === 0) return

        this.emitFile({
          type: 'asset',
          fileName: SITE_FILES.robots,
          source: buildRobots(pages),
        })
        this.emitFile({
          type: 'asset',
          fileName: SITE_FILES.sitemap,
          source: buildSitemap(pages),
        })
        this.emitFile({
          type: 'asset',
          fileName: SITE_FILES.llms,
          source: buildLlms(pages),
        })
      },
    },
  }
}
