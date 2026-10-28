const THOUSAND = 1000
const DECIMALS = 1

export function formatCount(count) {
  if (count < THOUSAND) return String(count)

  const thousands = Number((count / THOUSAND).toFixed(DECIMALS))

  return `${thousands}k`
}
