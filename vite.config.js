import {
  defineConfig,
  pluginImage,
  pluginSprite,
  pluginSsg,
  pluginSvg,
} from 'minista'
import { fileURLToPath } from 'node:url'
import { pluginSourceType } from './vite/source-type.js'

const src = (folder) => fileURLToPath(new URL(`./src/${folder}`, import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@components': src('components'),
      '@sections': src('sections'),
      '@layouts': src('layouts'),
      '@data': src('data'),
      '@styles': src('styles'),
      '@scripts': src('scripts'),
      '@assets': src('assets'),
    },
  },
  plugins: [
    pluginSsg(),
    pluginImage({
      optimize: {
        breakpoints: [360, 720, 1080, 1440, 1920],
        formatOptions: { avif: { quality: 60 }, webp: { quality: 78 } },
      },
    }),
    pluginSprite(),
    pluginSvg(),
    pluginSourceType(),
  ],
  build: { assetsInlineLimit: 0 },
})
