import { Photo } from './Photo.jsx'
import './AvatarGroup.css'

export function AvatarGroup({ avatars }) {
  return (
    <div className="avatar-group">
      {avatars.map((src) => (
        <Photo
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          sizes="50px"
          breakpoints={[150, 225]}
          className="avatar-group__photo"
        />
      ))}
    </div>
  )
}
