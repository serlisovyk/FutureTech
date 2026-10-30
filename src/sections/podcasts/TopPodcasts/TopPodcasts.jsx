import { Heading } from '@components'
import { podcasts, topPodcasts } from '@data/podcasts.js'
import { PodcastShow } from './PodcastShow.jsx'

export function TopPodcasts() {
  const { id, titleId, title } = topPodcasts

  return (
    <section className="top-podcasts" id={id} aria-labelledby={titleId}>
      <Heading level={2} size="h2" id={titleId} className="visually-hidden">
        {title}
      </Heading>

      {podcasts.map((podcast) => {
        const {
          id: podcastId,
          titleId: podcastTitleId,
          icon,
          title: podcastTitle,
          rating,
          ratingLabel,
          host,
          tagline,
          text,
          image,
          videoId,
          stats,
        } = podcast

        return (
          <PodcastShow
            key={podcastId}
            titleId={podcastTitleId}
            icon={icon}
            title={podcastTitle}
            rating={rating}
            ratingLabel={ratingLabel}
            host={host}
            tagline={tagline}
            text={text}
            image={image}
            videoId={videoId}
            stats={stats}
          />
        )
      })}
    </section>
  )
}
