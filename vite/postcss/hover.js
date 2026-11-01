import {
  AT_RULE_NODE,
  HOVER_CONDITION,
  HOVER_IN_LOGICAL_PSEUDO,
  HOVER_PSEUDO,
  HOVER_QUERY,
  MEDIA_AT_RULE,
  NEGATED_HOVER,
  NON_AND_QUERY,
} from '../constants.js'

function isHoverQuery(node) {
  const isMedia = node.type === AT_RULE_NODE && node.name === MEDIA_AT_RULE
  if (!isMedia) return false

  const hasHoverCondition = HOVER_CONDITION.test(node.params)
  const isSingleQuery = !NON_AND_QUERY.test(node.params)

  return hasHoverCondition && isSingleQuery
}

function isInsideHoverQuery(rule) {
  let ancestor = rule.parent

  while (ancestor) {
    if (isHoverQuery(ancestor)) return true

    ancestor = ancestor.parent
  }

  return false
}

function getBareSelector(selector) {
  return selector.replace(NEGATED_HOVER, '')
}

function isHoverSelector(selector) {
  const bareSelector = getBareSelector(selector)

  return HOVER_PSEUDO.test(bareSelector)
}

function hasHoverInsideLogicalPseudo(selector) {
  const bareSelector = getBareSelector(selector)

  return HOVER_IN_LOGICAL_PSEUDO.test(bareSelector)
}

function assertHoverStandsAlone(rule) {
  const nestedSelector = rule.selectors.find(hasHoverInsideLogicalPseudo)
  if (!nestedSelector) return

  throw rule.error(
    `:hover inside :is(), :where() or :not() cannot be wrapped in ${HOVER_QUERY}: "${nestedSelector}". List the hover selector on its own, e.g. ".card:hover, .card:focus-visible"`,
  )
}

export function hover() {
  return {
    postcssPlugin: 'futuretech-hover',
    Rule(rule, { AtRule }) {
      if (isInsideHoverQuery(rule)) return

      assertHoverStandsAlone(rule)

      const hoverSelectors = rule.selectors.filter(isHoverSelector)
      if (hoverSelectors.length === 0) return

      const otherSelectors = rule.selectors.filter(
        (selector) => !isHoverSelector(selector),
      )
      const query = new AtRule({ name: MEDIA_AT_RULE, params: HOVER_QUERY })

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
