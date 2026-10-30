export function serializeJsonLd(data) {
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}
