import { AvatarGroup, Button, Heading, Photo, Stat } from '@components'
import { heroFeatures } from '@data/features.js'
import { hero } from '@data/hero.js'
import { stats } from '@data/stats.js'
import { HeroFeature } from './HeroFeature.jsx'
import './Hero.css'

export function Hero() {
  const { decor, aside } = hero
  const heroStats = stats.slice(0, 3)

  return (
    <section className="hero" aria-labelledby={hero.titleId}>
      <div className="hero__main">
        <div className="hero__content">
          <div className="hero__intro">
            <p className="hero__eyebrow">{hero.eyebrow}</p>
            <div className="hero__text">
              <Heading level={1} size="hero" id={hero.titleId}>
                {hero.title}
              </Heading>
              <p className="hero__lead">{hero.text}</p>
            </div>
          </div>
          <ul className="hero__stats">
            {heroStats.map(({ id, value, label }) => (
              <li key={id} className="hero__stat">
                <Stat value={value} label={label} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__aside">
          <div className="hero__decor">
            <Photo
              src={decor.src}
              alt=""
              ariaHidden="true"
              sizes={decor.sizes}
              breakpoints={decor.breakpoints}
              loading="eager"
              fetchPriority="high"
              className="hero__decor-image"
            />
          </div>
          <AvatarGroup avatars={aside.avatars} isCapsule />
          <div className="hero__aside-text">
            <h2 className="hero__aside-title">{aside.title}</h2>
            <p>{aside.text}</p>
          </div>
          <Button
            variant="outline"
            icon="ui/arrow-up-right"
            href={aside.link.href}
            className="hero__aside-button"
          >
            {aside.link.label}
          </Button>
        </div>
      </div>
      <div className="hero__strip">
        <ul className="hero__features container">
          {heroFeatures.map(({ id, href, icon, title, subtitle, text }) => (
            <HeroFeature
              key={id}
              href={href}
              icon={icon}
              title={title}
              subtitle={subtitle}
              text={text}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
