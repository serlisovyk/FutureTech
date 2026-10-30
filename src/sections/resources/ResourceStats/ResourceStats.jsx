import { Stat } from '@components'
import { resourceStats } from '@data/resources.js'
import { stats } from '@data/stats.js'
import './ResourceStats.css'

export function ResourceStats() {
  return (
    <section
      className="resource-stats"
      id={resourceStats.id}
      aria-labelledby={resourceStats.titleId}
    >
      <h2 className="visually-hidden" id={resourceStats.titleId}>
        {resourceStats.title}
      </h2>

      <ul className="resource-stats__list container">
        {stats.map(({ id, value, label }) => (
          <li key={id} className="resource-stats__item" data-reveal>
            <Stat value={value} label={label} isLarge />
          </li>
        ))}
      </ul>
    </section>
  )
}
