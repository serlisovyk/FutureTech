export function getPhoneError(template, country, digits) {
  return template.replace('{digits}', String(digits)).replace('{country}', country)
}
