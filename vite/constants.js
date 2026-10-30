export const PAGE_EXTENSION = '.html'

export const IMAGE_TYPES = {
  avif: 'image/avif',
  webp: 'image/webp',
}

export const UNTYPED_SOURCE =
  /<source(?![^>]*\stype=)([^>]*\.(avif|webp)[\s"][^>]*)>/g

export const NOT_FOUND_PAGE = '404.html'

export const NO_INDEX = 'noindex'

export const SITE_FILES = {
  robots: 'robots.txt',
  sitemap: 'sitemap.xml',
  llms: 'llms.txt',
}

export const HTML_ENTITIES = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#x27;': "'",
}
