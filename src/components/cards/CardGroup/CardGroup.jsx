import { Children } from 'react'
import './CardGroup.css'

export function CardGroup({ id, children, isRegion = false }) {
  const region = isRegion || undefined

  return (
    <ul className="card-group" id={id} data-disclosure-region={region}>
      {Children.map(children, (card) => (
        <li className="card-group__item">{card}</li>
      ))}
    </ul>
  )
}
