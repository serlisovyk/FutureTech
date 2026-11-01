import { Stat } from '@components'
import { resourceStats, stats } from '@data'
import './ResourceStats.css'

export function ResourceStats() {
  const { id, titleId, title } = resourceStats

  return (
    <section className="resource-stats" id={id} aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        {title}
      </h2>

      <ul className="resource-stats__list container">
        {stats.map(({ id: statId, ...stat }) => (
          <li key={statId} className="resource-stats__item" data-reveal>
            <Stat {...stat} isLarge />
          </li>
        ))}
      </ul>
    </section>
  )
}
