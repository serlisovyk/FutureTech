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

export const BREAKPOINTS = {
  tablet: 1024,
  mobile: 768,
}

export const RAMP_PROPERTIES = {
  mobileToLaptop: '--ramp-390-1440',
  laptopToDesktop: '--ramp-1440-1920',
}

export const HOVER_QUERY = '(hover: hover)'

export const FLUID_NAME = 'fluid('

export const FLUID_CALL =
  /(?<![\w-])fluid\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g

export const HOVER_PSEUDO = /:hover\b/

export const NEGATED_HOVER = /:not\(\s*:hover\s*\)/g

export const WHITESPACE = /\s/g
