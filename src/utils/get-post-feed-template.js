import { postFeed } from '@data'

export function getPostFeedTemplate(count) {
  const {
    status: { none, one, other },
  } = postFeed

  if (count === 0) return none
  if (count === 1) return one

  return other
}
