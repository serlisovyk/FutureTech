import { BREAKPOINTS } from '../constants.js'

function getMediaConverter(width) {
  return (atRule) => {
    const extraConditions = atRule.params.trim()
    const query = `(width < ${width}px)`

    atRule.name = 'media'
    atRule.params = `${query} ${extraConditions}`.trim()
  }
}

export function breakpoints() {
  return {
    postcssPlugin: 'futuretech-breakpoints',
    AtRule: Object.fromEntries(
      Object.entries(BREAKPOINTS).map(([name, width]) => [
        name,
        getMediaConverter(width),
      ]),
    ),
  }
}
