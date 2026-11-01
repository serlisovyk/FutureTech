export const PAGE_EXTENSION = '.html'

export const IMAGE_TYPES = {
  avif: 'image/avif',
  webp: 'image/webp',
}

export const UNTYPED_SOURCE =
  /<source(?![^>]*\stype=)([^>]*\.(avif|webp)[\s"][^>]*)>/g

export const ORIGINAL_PHOTO = /^assets\/.+\.jpg$/

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

export const AT_RULE_NODE = 'atrule'

export const MEDIA_AT_RULE = 'media'

export const NAME_LIST_TAIL = /,.*$/s

export const BREAKPOINT_CONDITIONS =
  /^and\s+\((?:[^()]|\([^()]*\))+\)(?:\s+and\s+\((?:[^()]|\([^()]*\))+\))*$/i

export const RAMP_PROPERTIES = {
  mobileToLaptop: '--ramp-390-1440',
  laptopToDesktop: '--ramp-1440-1920',
}

export const RAMP_STEP_DIGITS = 4

export const HOVER_QUERY = '(hover: hover)'

export const FLUID_NAME = 'fluid('

export const FLUID_CALL =
  /(?<![\w-])fluid\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g

export const HOVER_CONDITION = /\(\s*hover\s*:\s*hover\s*\)/i

export const NON_AND_QUERY = /,|\bnot\b|\bor\b/i

export const HOVER_PSEUDO = /:hover\b/i

export const NEGATED_HOVER = /:not\(\s*:hover\s*\)/gi

export const HOVER_IN_LOGICAL_PSEUDO =
  /:(?:is|where|not|matches)\((?:[^()]|\([^()]*\))*:hover\b/i
