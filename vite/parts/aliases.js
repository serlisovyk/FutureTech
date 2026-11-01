import { resolve } from 'node:path'
import { SRC } from '../paths.js'

export function getAliases() {
  return {
    '@components': resolve(SRC, 'components'),
    '@sections': resolve(SRC, 'sections'),
    '@data': resolve(SRC, 'data'),
    '@styles': resolve(SRC, 'styles'),
    '@scripts': resolve(SRC, 'scripts'),
    '@assets': resolve(SRC, 'assets'),
    '@utils': resolve(SRC, 'utils'),
    '@constants': resolve(SRC, 'constants'),
  }
}
