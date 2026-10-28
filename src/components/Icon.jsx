import { Sprite } from 'minista/assets'
import { clsx } from 'clsx'
import '../styles/icon.css'

export function Icon({ name, title, size = 24, className, ...props }) {
  const isDecorative = !title

  return (
    <Sprite
      src={`/src/assets/icons/${name}.svg`}
      className={clsx('icon', className)}
      width={size}
      height={size}
      title={title}
      role={isDecorative ? undefined : 'img'}
      aria-hidden={isDecorative}
      {...props}
    />
  )
}
