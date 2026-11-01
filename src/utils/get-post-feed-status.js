import { getPostFeedTemplate } from './get-post-feed-template.js'

export function getPostFeedStatus(count, categoryName) {
  const template = getPostFeedTemplate(count)

  const withCategory = template.replace('{category}', categoryName)

  return withCategory.replace('{count}', String(count))
}
