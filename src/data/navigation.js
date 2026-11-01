import { blogs } from './blogs.js'

export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Podcasts', href: '/podcasts' },
  { label: 'Resources', href: '/resources' },
]

export const navigationAction = { label: 'Contact Us', href: '/contact' }

export const menuIconSize = 34

export const banner = {
  path: '/',
  id: blogs.id,
  lead: 'Explore our',
  extra: 'New & latest',
  tail: 'Blogs and Resources',
}
