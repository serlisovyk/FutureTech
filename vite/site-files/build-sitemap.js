import { site } from '../../src/data/site.js'

function toUrl({ path, publishedTime }) {
  const loc = `<loc>${site.url}${path}</loc>`

  if (!publishedTime) return `  <url>${loc}</url>`

  return `  <url>${loc}<lastmod>${publishedTime}</lastmod></url>`
}

export function buildSitemap(pages) {
  const indexable = pages.filter(({ isIndexable }) => isIndexable)

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexable.map(toUrl),
    '</urlset>',
    '',
  ].join('\n')
}
