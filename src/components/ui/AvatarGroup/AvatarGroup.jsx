import { clsx } from 'clsx'
import { Photo } from '@components/media/Photo'
import { avatarGroupPhotoBreakpoints, avatarGroupPhotoSizes } from '@data'
import './AvatarGroup.css'

export function AvatarGroup({ avatars, isCapsule = false }) {
  return (
    <div className={clsx('avatar-group', isCapsule && 'avatar-group--capsule')}>
      {avatars.map((src) => (
        <Photo
          key={src}
          src={src}
          alt=""
          ariaHidden="true"
          sizes={avatarGroupPhotoSizes}
          breakpoints={avatarGroupPhotoBreakpoints}
          className="avatar-group__photo"
        />
      ))}
    </div>
  )
}
