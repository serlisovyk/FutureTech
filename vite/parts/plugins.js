import { pluginImage, pluginSprite, pluginSsg, pluginSvg } from 'minista'
import { siteFiles } from '../plugins/site-files.js'
import { sourceType } from '../plugins/source-type.js'
import { getImageOptions } from './image.js'

export function getPlugins() {
  return [
    pluginSsg(),
    pluginImage(getImageOptions()),
    pluginSprite(),
    pluginSvg(),
    sourceType(),
    siteFiles(),
  ]
}
