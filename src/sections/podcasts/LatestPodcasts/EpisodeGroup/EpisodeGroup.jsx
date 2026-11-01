import { VideoCard } from '@components'
import './EpisodeGroup.css'

export function EpisodeGroup({ items, id, isRegion = false }) {
  const region = isRegion || undefined

  return (
    <ul className="episode-group" id={id} data-disclosure-region={region}>
      {items.map((item) => {
        const { id: itemId, title, text, duration, image, videoId } = item

        return (
          <li key={itemId} className="episode-group__item">
            <VideoCard
              title={title}
              text={text}
              duration={duration}
              image={image}
              videoId={videoId}
              isEpisode
            />
          </li>
        )
      })}
    </ul>
  )
}
