import { Svg } from 'minista/assets'
import { Button, Icon } from '@components'
import { navigationAction, navigationLinks, newsletter } from '@data/navigation.js'
import { site } from '@data/site.js'
import { getAriaCurrent } from '@utils'
import './Header.css'

export function Header({ currentPath }) {
  return (
    <header className="header" data-header>
      <Button className="header__skip" href="#main">
        Skip to content
      </Button>

      <a className="header__banner" href={newsletter.href}>
        <span>
          {newsletter.lead}{' '}
          <span className="header__banner-extra">{newsletter.extra} </span>
          {newsletter.tail}
        </span>
        <Icon name="ui/arrow-up-right" className="header__banner-icon" />
      </a>

      <div className="header__bar">
        <div className="container header__inner">
          <a className="header__logo" href="/">
            <Svg
              className="header__logo-image"
              src="/src/assets/logos/logo.svg"
              title={site.name}
            />
          </a>

          <button
            className="header__burger"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="header-menu"
            data-toggle-button
          >
            <Icon name="ui/menu" size={34} />
          </button>

          <div className="header__menu" id="header-menu" data-toggle-target hidden>
            <div className="header__backdrop" data-toggle-dismiss></div>

            <div className="header__drawer">
              <button
                className="header__close"
                type="button"
                aria-label="Close menu"
                data-toggle-dismiss
                data-header-close
              >
                <Icon name="ui/close" size={34} />
              </button>

              <nav className="header__nav" aria-label="Main">
                <ul className="header__list">
                  {navigationLinks.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        className="header__link"
                        href={href}
                        aria-current={getAriaCurrent(href, currentPath)}
                        data-toggle-dismiss
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                className="header__action"
                href={navigationAction.href}
                ariaCurrent={getAriaCurrent(navigationAction.href, currentPath)}
                isToggleDismiss
              >
                {navigationAction.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
