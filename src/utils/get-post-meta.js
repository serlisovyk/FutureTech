import { formatDate } from './format-date.js'
import { getCategoryName } from './get-category-name.js'

export function getPostMeta(post, labels) {
  const { category, date, author } = post

  return [
    { label: labels.category, value: getCategoryName(category) },
    { label: labels.date, value: formatDate(date) },
    { label: labels.author, value: author.name },
  ]
}
