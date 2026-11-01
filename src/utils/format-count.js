import { COUNT_FORMAT } from '@constants'

export function formatCount(count) {
  if (count < COUNT_FORMAT.thousand) return String(count)

  const thousands = Number(
    (count / COUNT_FORMAT.thousand).toFixed(COUNT_FORMAT.decimals),
  )

  return `${thousands}k`
}
