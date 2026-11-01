import { formatDate } from './format-date.js'
import { getCategoryName } from './get-category-name.js'
import { getReadingTime } from './get-reading-time.js'

export function getArticleMeta(post, labels) {
  const {
    category,
    date,
    author: { name: authorName },
    body,
  } = post

  const {
    date: dateLabel,
    category: categoryLabel,
    readingTime: readingTimeLabel,
    minutes: minutesLabel,
    author: authorLabel,
  } = labels

  const readingTime = `${getReadingTime(body)} ${minutesLabel}`

  return [
    { label: dateLabel, value: formatDate(date) },
    { label: categoryLabel, value: getCategoryName(category) },
    { label: readingTimeLabel, value: readingTime },
    { label: authorLabel, value: authorName },
  ]
}
