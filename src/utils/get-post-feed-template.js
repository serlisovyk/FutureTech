import { postFeed } from '@data'

export function getPostFeedTemplate(count) {
  const { none, one, other } = postFeed.status

  if (count === 0) return none
  if (count === 1) return one

  return other
}
