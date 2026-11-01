import { SectionHeading, VideoCard } from '@components'
import { featuredVideos, videos } from '@data'
import './FeaturedVideos.css'

export function FeaturedVideos() {
  return (
    <section
      className="featured-videos"
      id={featuredVideos.id}
      aria-labelledby={featuredVideos.titleId}
    >
      <SectionHeading
        tag={featuredVideos.tag}
        title={featuredVideos.title}
        titleId={featuredVideos.titleId}
        link={featuredVideos.link}
      />

      <ul className="featured-videos__list container">
        {videos.map(({ id, ...video }) => (
          <li key={id} className="featured-videos__item">
            <VideoCard {...video} />
          </li>
        ))}
      </ul>
    </section>
  )
}
