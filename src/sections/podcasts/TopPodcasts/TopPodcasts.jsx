import { Heading } from '@components'
import { podcasts, topPodcasts } from '@data'
import { PodcastShow } from './PodcastShow'

export function TopPodcasts() {
  const { id, titleId, title } = topPodcasts

  return (
    <section className="top-podcasts" id={id} aria-labelledby={titleId}>
      <Heading level={2} size="h2" id={titleId} className="visually-hidden">
        {title}
      </Heading>

      {podcasts.map(({ id: podcastId, ...podcast }) => (
        <PodcastShow key={podcastId} {...podcast} />
      ))}
    </section>
  )
}
