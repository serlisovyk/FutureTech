import { formatDate } from './format-date.js'
import { getCategoryName } from './get-category-name.js'
import { getReadingTime } from './get-reading-time.js'

export function getArticleMeta(post, labels) {
  const { category, date, author, body } = post

  const readingTime = `${getReadingTime(body)} ${labels.minutes}`

  return [
    { label: labels.date, value: formatDate(date) },
    { label: labels.category, value: getCategoryName(category) },
    { label: labels.readingTime, value: readingTime },
    { label: labels.author, value: author.name },
  ]
}
