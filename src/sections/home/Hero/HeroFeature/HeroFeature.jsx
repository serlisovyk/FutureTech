import { ArrowCircle, Icon, LinkCard } from '@components'

export function HeroFeature({ href, icon, title, subtitle, text }) {
  return (
    <li className="hero__feature">
      <LinkCard href={href} className="hero__feature-card">
        <div className="hero__feature-body">
          <Icon name={icon} className="hero__feature-icon" />
          <div className="hero__feature-head">
            <div className="hero__feature-titles">
              <p className="hero__feature-title">{title}</p>
              <p className="hero__feature-subtitle">{subtitle}</p>
            </div>
            <ArrowCircle />
          </div>
        </div>
        <p className="hero__feature-text">{text}</p>
      </LinkCard>
    </li>
  )
}
