import { MEDIA } from '@constants'

export function isReducedMotion() {
  const query = window.matchMedia(MEDIA.reducedMotion)

  return query.matches
}
