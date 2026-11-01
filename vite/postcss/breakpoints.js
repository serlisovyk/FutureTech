import { BREAKPOINTS } from '../../src/constants/index.js'
import {
  BREAKPOINT_CONDITIONS,
  MEDIA_AT_RULE,
  NAME_LIST_TAIL,
} from '../constants.js'

function getExtraConditions(atRule, breakpointName) {
  const extraConditions = atRule.params.trim()
  const written = `@${atRule.name} ${extraConditions}`.trim()

  const hasQueryList = written.includes(',')
  if (hasQueryList) {
    throw atRule.error(
      `${written} cannot join a query list: write one query, @${breakpointName} and (<condition>)`,
    )
  }

  const isBare = extraConditions === ''
  const isValid = BREAKPOINT_CONDITIONS.test(extraConditions)
  if (isBare || isValid) return extraConditions

  throw atRule.error(
    `${written} is not a valid query: @${breakpointName} takes "and (<condition>)" after its name`,
  )
}

function convertToMedia(atRule, breakpointName) {
  const width = BREAKPOINTS[breakpointName]
  const extraConditions = getExtraConditions(atRule, breakpointName)
  const query = `(width < ${width}px)`

  atRule.name = MEDIA_AT_RULE
  atRule.params = `${query} ${extraConditions}`.trim()
}

export function breakpoints() {
  return {
    postcssPlugin: 'futuretech-breakpoints',
    AtRule(atRule) {
      const lowerName = atRule.name.toLowerCase()
      const breakpointName = lowerName.replace(NAME_LIST_TAIL, '')
      const isBreakpoint = Object.hasOwn(BREAKPOINTS, breakpointName)
      if (!isBreakpoint) return

      convertToMedia(atRule, breakpointName)
    },
  }
}
