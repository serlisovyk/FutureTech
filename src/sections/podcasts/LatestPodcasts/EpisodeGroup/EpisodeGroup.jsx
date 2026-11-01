import { VideoCard } from '@components'
import './EpisodeGroup.css'

export function EpisodeGroup({ items, id, isRegion = false }) {
  const region = isRegion || undefined

  return (
    <ul className="episode-group" id={id} data-disclosure-region={region}>
      {items.map(({ id: itemId, ...episode }) => (
        <li key={itemId} className="episode-group__item">
          <VideoCard {...episode} isEpisode />
        </li>
      ))}
    </ul>
  )
}
