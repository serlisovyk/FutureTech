import {
  HTML_ENTITIES,
  NO_INDEX,
  NOT_FOUND_PAGE,
  PAGE_EXTENSION,
} from '../constants.js'

function isPage(file) {
  return file.fileName.endsWith(PAGE_EXTENSION)
}

function getPath(fileName) {
  const path = `/${fileName.slice(0, -PAGE_EXTENSION.length)}`

  return path.replace(/\/index$/, '') || '/'
}

function decode(text) {
  return text.replace(/&(amp|lt|gt|quot|#x27);/g, (entity) => HTML_ENTITIES[entity])
}

function readMeta(source, attribute, key) {
  const meta = new RegExp(`<meta ${attribute}="${key}" content="([^"]*)"`)
  const match = source.match(meta)

  if (!match) return ''

  return decode(match[1])
}

function readPage(file) {
  const source = String(file.source)
  const robots = readMeta(source, 'name', 'robots')

  return {
    path: getPath(file.fileName),
    title: readMeta(source, 'property', 'og:title'),
    description: readMeta(source, 'name', 'description'),
    publishedTime: readMeta(source, 'property', 'article:published_time'),
    isIndexable: file.fileName !== NOT_FOUND_PAGE && !robots.includes(NO_INDEX),
  }
}

function compareByPath(a, b) {
  return a.path.localeCompare(b.path)
}

export function readPages(bundle) {
  return Object.values(bundle).filter(isPage).map(readPage).sort(compareByPath)
}
