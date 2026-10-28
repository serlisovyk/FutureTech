const types = {
  avif: 'image/avif',
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png',
}

export function pluginSourceType() {
  return {
    name: 'futuretech:source-type',
    enforce: 'post',
    apply: 'build',
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type !== 'asset' || !file.fileName.endsWith('.html')) continue
          file.source = String(file.source).replace(
            /<source\b(?![^>]*\stype=)([^>]*\ssrcset="\S+?\.(avif|webp|jpg|png)[\s"][^>]*)>/g,
            (_, attributes, extension) =>
              `<source type="${types[extension]}"${attributes}>`,
          )
        }
      },
    },
  }
}
