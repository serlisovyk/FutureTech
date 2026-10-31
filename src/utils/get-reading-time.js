import { READING_SPEED } from './constants.js'

export function getReadingTime(body) {
  const text = body.flatMap(({ paragraphs }) => paragraphs).join(' ')
  const wordCount = text.split(/\s+/).filter(Boolean).length

  return Math.ceil(wordCount / READING_SPEED.wordsPerMinute)
}
