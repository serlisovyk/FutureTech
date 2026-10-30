import { PHONE_PATTERN } from './constants.js'

export function getPhonePattern(digits) {
  const { separators } = PHONE_PATTERN

  return `(?:${separators}*\\d){${digits}}${separators}*`
}
