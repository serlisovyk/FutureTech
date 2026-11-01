import {
  HOVER_PSEUDO,
  HOVER_QUERY,
  NEGATED_HOVER,
  WHITESPACE,
} from '../constants.js'

function isHoverQuery(node) {
  const isMedia = node.type === 'atrule' && node.name === 'media'
  if (!isMedia) return false

  const compactParams = node.params.replace(WHITESPACE, '')
  const compactQuery = HOVER_QUERY.replace(WHITESPACE, '')

  return compactParams === compactQuery
}

function isInsideHoverQuery(rule) {
  let ancestor = rule.parent

  while (ancestor) {
    if (isHoverQuery(ancestor)) return true

    ancestor = ancestor.parent
  }

  return false
}

function isHoverSelector(selector) {
  return HOVER_PSEUDO.test(selector.replace(NEGATED_HOVER, ''))
}

export function hover() {
  return {
    postcssPlugin: 'futuretech-hover',
    Rule(rule, { AtRule }) {
      if (isInsideHoverQuery(rule)) return

      const hoverSelectors = rule.selectors.filter(isHoverSelector)
      if (hoverSelectors.length === 0) return

      const otherSelectors = rule.selectors.filter(
        (selector) => !isHoverSelector(selector),
      )
      const query = new AtRule({ name: 'media', params: HOVER_QUERY })

      if (otherSelectors.length === 0) {
        rule.replaceWith(query)
        query.append(rule)
        return
      }

      query.append(rule.clone({ selectors: hoverSelectors }))
      rule.selectors = otherSelectors
      rule.after(query)
    },
  }
}
