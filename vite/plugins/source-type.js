import { IMAGE_TYPES, PAGE_EXTENSION, UNTYPED_SOURCE } from '../constants.js'

function isPage(file) {
  return file.fileName.endsWith(PAGE_EXTENSION)
}

function addSourceType(_, attributes, format) {
  return `<source type="${IMAGE_TYPES[format]}"${attributes}>`
}

function addSourceTypes(page) {
  page.source = String(page.source).replace(UNTYPED_SOURCE, addSourceType)
}

export function sourceType() {
  return {
    name: 'source-type',
    apply: 'build',
    enforce: 'post',
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        Object.values(bundle).filter(isPage).forEach(addSourceTypes)
      },
    },
  }
}
