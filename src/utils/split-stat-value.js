import { STAT_FORMAT } from '@constants'

export function splitStatValue(value) {
  const hasPlus = value.endsWith(STAT_FORMAT.plus)

  const number = hasPlus ? value.slice(0, -STAT_FORMAT.plus.length) : value

  return { number, hasPlus }
}
