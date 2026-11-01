import { Stat } from '@components'
import { resourceStats, stats } from '@data'
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
        {stats.map(({ id, ...stat }) => (
          <li key={id} className="resource-stats__item" data-reveal>
            <Stat {...stat} isLarge />
          </li>
        ))}
      </ul>
    </section>
  )
}
