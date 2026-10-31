export const COUNT_FORMAT = Object.freeze({
  thousand: 1000,
  decimals: 1,
})

export const PHONE_PATTERN = Object.freeze({
  separators: '[\\s\\(\\)\\-.]',
})

export const DATE_FORMAT = Object.freeze({
  locale: 'en-US',
  options: Object.freeze({ dateStyle: 'long', timeZone: 'UTC' }),
})

export const READING_SPEED = Object.freeze({
  wordsPerMinute: 200,
})
