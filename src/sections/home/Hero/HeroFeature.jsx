import { Icon } from '@components'

export function HeroFeature({ href, icon, title, subtitle, text }) {
  return (
    <li className="hero__feature">
      <a className="hero__feature-card" href={href}>
        <div className="hero__feature-body">
          <Icon name={icon} className="hero__feature-icon" />
          <div className="hero__feature-head">
            <div className="hero__feature-titles">
              <h2 className="hero__feature-title">{title}</h2>
              <p className="hero__feature-subtitle">{subtitle}</p>
            </div>
            <span className="hero__feature-arrow">
              <Icon name="ui/arrow-up-right" className="hero__feature-arrow-icon" />
            </span>
          </div>
        </div>
        <p className="hero__feature-text">{text}</p>
      </a>
    </li>
  )
}
