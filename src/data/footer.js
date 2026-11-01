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
        { label: 'Technology', href: '/news#news-hub-feed-tab-technology' },
        { label: 'Health', href: '/news#news-hub-feed-tab-health' },
        { label: 'Politics', href: '/news#news-hub-feed-tab-politics' },
        { label: 'Environment', href: '/news#news-hub-feed-tab-environment' },
      ],
    },
    {
      title: 'Blogs',
      links: [
        { label: 'Quantum Computing', href: '/#blogs-feed-tab-quantum-computing' },
        { label: 'AI Ethics', href: '/#blogs-feed-tab-ai-ethics' },
        { label: 'Space Exploration', href: '/#blogs-feed-tab-space-exploration' },
        {
          label: 'Biotechnology',
          href: '/#blogs-feed-tab-biotechnology',
          isNew: true,
        },
      ],
    },
    {
      title: 'Podcasts',
      links: [
        { label: 'Latest Episodes', href: '/podcasts#latest-podcasts' },
        {
          label: 'AI Revolution',
          href: '/podcasts#ai-revolution-title',
          isNew: true,
        },
        { label: 'AI Conversations', href: '/podcasts#ai-conversations-title' },
      ],
    },
    {
      title: 'Resources',
      isButtons: true,
      links: [
        { label: 'Whitepapers', href: '/resources#whitepapers' },
        { label: 'Ebooks', href: '/resources#ebooks' },
        { label: 'Reports', href: '/resources#reports' },
        { label: 'All Resources', href: '/resources' },
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
