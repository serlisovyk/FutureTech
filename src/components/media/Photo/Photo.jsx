import { Picture } from 'minista/assets'

export function Photo({ formats = ['avif', 'webp'], loading = 'lazy', ...props }) {
  return <Picture formats={formats} loading={loading} {...props} />
}
