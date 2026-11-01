import { AvatarGroup, Heading } from '@components'
import { avatarDemo } from '@data'

export function AvatarDemo() {
  const { title, caption, avatars } = avatarDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{caption}</p>

        <div className="ui-kit__panel">
          <AvatarGroup avatars={avatars} />
        </div>

        <div className="ui-kit__row">
          <AvatarGroup avatars={avatars} isCapsule />
        </div>
      </div>
    </section>
  )
}
