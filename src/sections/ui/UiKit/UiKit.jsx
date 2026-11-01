import { Heading } from '@components'
import { uiKit } from '@data'
import { AvatarDemo } from './AvatarDemo'
import { BadgeDemo } from './BadgeDemo'
import { ButtonDemo } from './ButtonDemo'
import { CounterDemo } from './CounterDemo'
import { FeedDemo } from './FeedDemo'
import { MetaDemo } from './MetaDemo'
import { NewsCardDemo } from './NewsCardDemo'
import { SectionHeadingDemo } from './SectionHeadingDemo'
import { StatDemo } from './StatDemo'
import { TagDemo } from './TagDemo'
import { VideoCardDemo } from './VideoCardDemo'
import './UiKit.css'

export function UiKit() {
  const { title, intro } = uiKit

  return (
    <div className="ui-kit">
      <div className="container">
        <Heading level={1} size="display">
          {title}
        </Heading>
        <p className="ui-kit__intro">{intro}</p>
      </div>

      <ButtonDemo />

      <TagDemo />

      <SectionHeadingDemo />

      <StatDemo />

      <MetaDemo />

      <CounterDemo />

      <BadgeDemo />

      <AvatarDemo />

      <NewsCardDemo />

      <VideoCardDemo />

      <FeedDemo />
    </div>
  )
}
