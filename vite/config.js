import { defineConfig } from 'minista'
import { getAliases } from './parts/aliases.js'
import { getBuild } from './parts/build.js'
import { getPlugins } from './parts/plugins.js'

export default defineConfig({
  resolve: { alias: getAliases() },
  plugins: getPlugins(),
  build: getBuild(),
})
