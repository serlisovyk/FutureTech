import { SectionHeading, VideoCard } from '@components'
import { featuredVideos } from '@data/news.js'
import { videos } from '@data/videos.js'
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
        {videos.map(({ id, title, text, duration, poster, videoId }) => (
          <li key={id} className="featured-videos__item">
            <VideoCard
              title={title}
              text={text}
              duration={duration}
              image={poster}
              videoId={videoId}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
