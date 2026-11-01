import { SectionHeading, VideoCard } from '@components'
import { featuredVideos, videos } from '@data'
import './FeaturedVideos.css'

export function FeaturedVideos() {
  const { id, titleId, tag, title, link } = featuredVideos

  return (
    <section className="featured-videos" id={id} aria-labelledby={titleId}>
      <SectionHeading tag={tag} title={title} titleId={titleId} link={link} />

      <ul className="featured-videos__list container">
        {videos.map(({ id: videoItemId, ...video }) => (
          <li key={videoItemId} className="featured-videos__item">
            <VideoCard {...video} />
          </li>
        ))}
      </ul>
    </section>
  )
}
