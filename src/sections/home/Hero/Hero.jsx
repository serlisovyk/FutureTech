import { AvatarGroup, Button, Heading, Photo, Stat } from '@components'
import { heroFeatures, heroStats, hero } from '@data'
import { HeroFeature } from './HeroFeature'
import './Hero.css'

export function Hero() {
  const {
    titleId,
    eyebrow,
    title,
    text,
    decor: { src, sizes, breakpoints },
    aside: {
      title: asideTitle,
      text: asideText,
      link: { label, href },
      avatars,
    },
  } = hero

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__main">
        <div className="hero__content">
          <div className="hero__intro">
            <p className="hero__eyebrow">{eyebrow}</p>
            <div className="hero__text">
              <Heading level={1} size="hero" id={titleId}>
                {title}
              </Heading>
              <p className="hero__lead">{text}</p>
            </div>
          </div>
          <ul className="hero__stats">
            {heroStats.map(({ id, ...stat }) => (
              <li key={id} className="hero__stat">
                <Stat {...stat} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__aside">
          <div className="hero__decor">
            <Photo
              src={src}
              alt=""
              ariaHidden="true"
              sizes={sizes}
              breakpoints={breakpoints}
              loading="eager"
              fetchPriority="high"
              className="hero__decor-image"
            />
          </div>
          <AvatarGroup avatars={avatars} isCapsule />
          <div className="hero__aside-text">
            <p className="hero__aside-title">{asideTitle}</p>
            <p>{asideText}</p>
          </div>
          <Button
            variant="outline"
            icon="ui/arrow-up-right"
            href={href}
            className="hero__aside-button"
          >
            {label}
          </Button>
        </div>
      </div>

      <div className="hero__strip">
        <ul className="hero__features container">
          {heroFeatures.map(({ id, ...feature }) => (
            <HeroFeature key={id} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  )
}
