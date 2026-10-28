import { Picture } from 'minista/assets'

export function Photo(props) {
  const {
    src,
    alt,
    sizes,
    breakpoints,
    ariaHidden,
    fetchPriority,
    className,
    formats = ['avif', 'webp'],
    loading = 'lazy',
  } = props

  return (
    <Picture
      src={src}
      alt={alt}
      sizes={sizes}
      breakpoints={breakpoints}
      formats={formats}
      loading={loading}
      aria-hidden={ariaHidden}
      fetchPriority={fetchPriority}
      className={className}
    />
  )
}
