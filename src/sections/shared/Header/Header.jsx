import { Svg } from 'minista/assets'
import { Button, Icon } from '@components'
import { navigationAction, navigationLinks, newsletter, site } from '@data'
import { getAriaCurrent } from '@utils'
import './Header.css'

export function Header({ currentPath }) {
  const { href: bannerHref, lead, extra, tail } = newsletter
  const { name: siteName } = site
  const { href: actionHref, label: actionLabel } = navigationAction

  return (
    <header className="header" data-header>
      <Button className="header__skip" href="#main">
        Skip to content
      </Button>

      <a className="header__banner" href={bannerHref}>
        <span>
          {lead} <span className="header__banner-extra">{extra} </span>
          {tail}
        </span>
        <Icon name="ui/arrow-up-right" className="header__banner-icon" />
      </a>

      <div className="header__bar">
        <div className="container header__inner">
          <a className="header__logo" href="/">
            <Svg
              className="header__logo-image"
              src="/src/assets/logos/logo.svg"
              title={siteName}
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
                        data-label={label}
                        aria-current={getAriaCurrent(href, currentPath)}
                        data-toggle-dismiss
                        data-header-link
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                className="header__action"
                href={actionHref}
                ariaCurrent={getAriaCurrent(actionHref, currentPath)}
                isToggleDismiss
              >
                {actionLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
