import { CountUp } from './components/CountUp.js'
import { Disclosure } from './components/Disclosure.js'
import { Reveal } from './components/Reveal.js'
import { Tabs } from './components/Tabs.js'
import { Toggle } from './components/Toggle.js'
import { ArticleController } from './controllers/ArticleController.js'
import { ContactFormController } from './controllers/ContactFormController.js'
import { HeaderController } from './controllers/HeaderController.js'
import { PostFeedController } from './controllers/PostFeedController.js'
import { VideoModalController } from './controllers/VideoModalController.js'

const ROOTS = [
  { selector: '[data-tabs]', Component: Tabs },
  { selector: '[data-disclosure]', Component: Disclosure },
  { selector: '[data-toggle]', Component: Toggle },
  { selector: '[data-count-up]', Component: CountUp },
  { selector: '[data-reveal-root]', Component: Reveal },
  { selector: '[data-article]', Component: ArticleController },
  { selector: '[data-header]', Component: HeaderController },
  { selector: '[data-contact-form]', Component: ContactFormController },
  { selector: '[data-post-feed]', Component: PostFeedController },
  { selector: '[data-video-modal]', Component: VideoModalController },
]

for (const { selector, Component } of ROOTS) {
  for (const root of document.querySelectorAll(selector)) {
    new Component(root).start()
  }
}
