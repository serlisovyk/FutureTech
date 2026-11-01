import { Heading, VideoCard } from '@components'
import { videoCardDemo } from '@data'

export function VideoCardDemo() {
  const { title, videoCaption, videos, episodeCaption, episodes } = videoCardDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{videoCaption}</p>

        <div className="ui-kit__grid ui-kit__grid--video">
          {videos.map(({ id, ...video }) => (
            <VideoCard key={id} {...video} />
          ))}
        </div>

        <p className="ui-kit__caption">{episodeCaption}</p>

        <div className="ui-kit__grid ui-kit__grid--episode">
          {episodes.map(({ id, ...episode }) => (
            <VideoCard key={id} {...episode} isEpisode />
          ))}
        </div>
      </div>
    </section>
  )
}
