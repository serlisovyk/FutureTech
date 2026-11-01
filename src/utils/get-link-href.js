import { getPostFeedTabId } from './get-post-feed-tab-id.js'

export function getLinkHref(link) {
  const { path, id, feedId, categorySlug } = link

  if (feedId) return `${path}#${getPostFeedTabId(feedId, categorySlug)}`

  if (id) return `${path}#${id}`

  return path
}
