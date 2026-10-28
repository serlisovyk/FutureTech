export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Podcasts', href: '/podcasts' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact', isAction: true },
]

export const navigationLinks = navigation.filter((item) => !item.isAction)
export const navigationAction = navigation.find((item) => item.isAction)
