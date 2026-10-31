import { site } from './site.js'

export const footer = {
  newLabel: 'New',
  columns: [
    {
      title: 'Home',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Blogs', href: '/#blogs' },
        { label: 'Resources', href: '/#resources', isNew: true },
        { label: 'Testimonials', href: '/#testimonials' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Newsletter', href: '/contact' },
      ],
    },
    {
      title: 'News',
      links: [
        { label: 'Trending Stories', href: '/news#trending-stories' },
        { label: 'Featured Videos', href: '/news#featured-videos' },
        { label: 'Technology', href: '/news#news-hub' },
        { label: 'Health', href: '/news#news-hub' },
        { label: 'Politics', href: '/news#news-hub' },
        { label: 'Environment', href: '/news#news-hub' },
      ],
    },
    {
      title: 'Blogs',
      links: [
        { label: 'Quantum Computing', href: '/#blogs' },
        { label: 'AI Ethics', href: '/#blogs' },
        { label: 'Space Exploration', href: '/#blogs' },
        { label: 'Biotechnology', href: '/#blogs', isNew: true },
        { label: 'Renewable Energy', href: '/#blogs' },
        { label: 'Biohacking', href: '/#blogs' },
      ],
    },
    {
      title: 'Podcasts',
      links: [
        { label: 'Latest Episodes', href: '/podcasts#latest-podcasts' },
        { label: 'AI Revolution', href: '/podcasts#top-podcasts', isNew: true },
        { label: 'TechTalk AI', href: '/podcasts#top-podcasts' },
        { label: 'AI Conversations', href: '/podcasts#top-podcasts' },
      ],
    },
    {
      title: 'Resources',
      isButtons: true,
      links: [
        { label: 'Whitepapers', href: '/resources#whitepapers' },
        { label: 'Ebooks', href: '/resources#ebooks' },
        { label: 'Reports', href: '/resources#reports' },
        { label: 'Research Papers', href: '/resources' },
      ],
    },
  ],
  legal: [{ label: 'Terms & Conditions' }, { label: 'Privacy Policy' }],
  copyright: `${site.name}. All rights reserved.`,
  author: 'Serhii Lisovyk',
  sourceCode: {
    href: 'https://github.com/serlisovyk/FutureTech',
    label: 'Source code on GitHub (opens in a new tab)',
    icon: 'social/github',
  },
}
