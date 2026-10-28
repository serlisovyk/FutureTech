import { Disclosure } from './components/Disclosure.js'
import { Tabs } from './components/Tabs.js'
import { Toggle } from './components/Toggle.js'
import { HeaderController } from './controllers/HeaderController.js'
import { PostFeedController } from './controllers/PostFeedController.js'
import { VideoModalController } from './controllers/VideoModalController.js'

const ROOTS = [
  { selector: '[data-tabs]', Component: Tabs },
  { selector: '[data-disclosure]', Component: Disclosure },
  { selector: '[data-toggle]', Component: Toggle },
  { selector: '[data-header]', Component: HeaderController },
  { selector: '[data-post-feed]', Component: PostFeedController },
  { selector: '[data-video-modal]', Component: VideoModalController },
]

for (const { selector, Component } of ROOTS) {
  for (const root of document.querySelectorAll(selector)) {
    new Component(root).start()
  }
}
