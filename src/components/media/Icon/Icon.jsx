import { Sprite } from 'minista/assets'
import { clsx } from 'clsx'
import './Icon.css'

export function Icon({ name, title, className, size = 24 }) {
  const isDecorative = !title
  const role = title && 'img'

  return (
    <Sprite
      src={`/src/assets/icons/${name}.svg`}
      className={clsx('icon', className)}
      width={size}
      height={size}
      title={title}
      role={role}
      aria-hidden={isDecorative || undefined}
    />
  )
}
