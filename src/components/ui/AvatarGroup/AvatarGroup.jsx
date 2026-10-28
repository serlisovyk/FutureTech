import { Photo } from '@components/media/Photo'
import './AvatarGroup.css'

export function AvatarGroup({ avatars }) {
  return (
    <div className="avatar-group">
      {avatars.map((src) => (
        <Photo
          key={src}
          src={src}
          alt=""
          ariaHidden="true"
          sizes="50px"
          breakpoints={[150, 225]}
          className="avatar-group__photo"
        />
      ))}
    </div>
  )
}
