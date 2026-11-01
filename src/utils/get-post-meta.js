import { formatDate } from './format-date.js'
import { getCategoryName } from './get-category-name.js'

export function getPostMeta(post, labels) {
  const {
    category,
    date,
    author: { name: authorName },
  } = post

  const { category: categoryLabel, date: dateLabel, author: authorLabel } = labels

  return [
    { label: categoryLabel, value: getCategoryName(category) },
    { label: dateLabel, value: formatDate(date) },
    { label: authorLabel, value: authorName },
  ]
}
