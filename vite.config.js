import {
  defineConfig,
  pluginImage,
  pluginSprite,
  pluginSsg,
  pluginSvg,
} from 'minista'
import { pluginSourceType } from './vite/source-type.js'

export default defineConfig({
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
