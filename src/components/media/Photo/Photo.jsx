import { Picture } from 'minista/assets'

export function Photo({
  src,
  alt,
  sizes,
  breakpoints,
  ariaHidden,
  className,
  formats = ['avif', 'webp'],
  loading = 'lazy',
}) {
  return (
    <Picture
      src={src}
      alt={alt}
      sizes={sizes}
      breakpoints={breakpoints}
      formats={formats}
      loading={loading}
      aria-hidden={ariaHidden}
      className={className}
    />
  )
}
