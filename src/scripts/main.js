import { Disclosure } from './components/Disclosure.js'
import { Tabs } from './components/Tabs.js'
import { Toggle } from './components/Toggle.js'

const ROOTS = [
  { selector: '[data-tabs]', Component: Tabs },
  { selector: '[data-disclosure]', Component: Disclosure },
  { selector: '[data-toggle]', Component: Toggle },
]

for (const { selector, Component } of ROOTS) {
  for (const root of document.querySelectorAll(selector)) {
    new Component(root).start()
  }
}
