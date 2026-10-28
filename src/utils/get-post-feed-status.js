import { postFeed } from '@data/post-feed.js'

export function getPostFeedStatus(count, categoryName) {
  const { none, one, other } = postFeed.status
  const isEmpty = count === 0
  const isSingle = count === 1
  let template = other

  if (isEmpty) template = none
  if (isSingle) template = one

  return template
    .replace('{category}', categoryName)
    .replace('{count}', String(count))
}
