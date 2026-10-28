import { DATE_FORMAT } from './constants.js'

export function formatDate(isoDate) {
  const formatter = new Intl.DateTimeFormat(DATE_FORMAT.locale, DATE_FORMAT.options)

  return formatter.format(new Date(isoDate))
}
