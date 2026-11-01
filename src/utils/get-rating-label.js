import { rating } from '@data'

export function getRatingLabel(value) {
  const { label, max } = rating

  const withValue = label.replace('{value}', String(value))

  return withValue.replace('{max}', String(max))
}
