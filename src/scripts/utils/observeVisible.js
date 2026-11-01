import { canObserveVisible } from '@scripts/utils/canObserveVisible.js'

export function observeVisible(elements, onVisible, options = {}) {
  if (!canObserveVisible()) return () => {}

  const observer = new IntersectionObserver((entries) => {
    const visibleElements = entries
      .filter((entry) => entry.isIntersecting)
      .map((entry) => entry.target)
    const isNoneVisible = visibleElements.length === 0
    if (isNoneVisible) return

    visibleElements.forEach((element) => observer.unobserve(element))
    onVisible(visibleElements)
  }, options)

  elements.forEach((element) => observer.observe(element))

  return () => observer.disconnect()
}
