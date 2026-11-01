import { ORIGINAL_PHOTO, PAGE_EXTENSION } from '../constants.js'

function isPage(file) {
  return file.fileName.endsWith(PAGE_EXTENSION)
}

export function unusedOriginals() {
  return {
    name: 'unused-originals',
    apply: 'build',
    enforce: 'post',
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        const pages = Object.values(bundle)
          .filter(isPage)
          .map((page) => String(page.source))

        if (pages.length === 0) return

        Object.keys(bundle)
          .filter((fileName) => ORIGINAL_PHOTO.test(fileName))
          .filter((fileName) => !pages.some((page) => page.includes(fileName)))
          .forEach((fileName) => delete bundle[fileName])
      },
    },
  }
}
