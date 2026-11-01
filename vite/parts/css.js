import { breakpoints } from '../postcss/breakpoints.js'
import { fluid } from '../postcss/fluid.js'
import { hover } from '../postcss/hover.js'

export function getCss() {
  return {
    postcss: {
      plugins: [breakpoints(), hover(), fluid()],
    },
  }
}
