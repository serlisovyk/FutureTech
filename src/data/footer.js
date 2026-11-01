import { blogs } from './blogs.js'
import { blogCategories, newsCategories } from './categories.js'
import { featuresSection } from './features.js'
import { navigationAction } from './navigation.js'
import { featuredVideos, newsHub, trendingStories } from './news.js'
import { latestPodcasts, podcasts } from './podcasts.js'
import { resourceTabs, resourcesSection } from './resources.js'
import { site } from './site.js'
import { testimonialsSection } from './testimonials.js'

const [, technology, politics, health, environment] = newsCategories

const [, quantumComputing, aiEthics, spaceExploration, biotechnology] =
  blogCategories

const [aiRevolution, aiConversations] = podcasts

const [whitepapers, ebooks, reports] = resourceTabs

export const footer = {
  newLabel: 'New',
  columns: [
    {
      title: 'Home',
      links: [
        { label: 'Features', path: '/', id: featuresSection.id },
        { label: 'Blogs', path: '/', id: blogs.id },
        { label: 'Resources', path: '/', id: resourcesSection.id, isNew: true },
        { label: 'Testimonials', path: '/', id: testimonialsSection.id },
        { label: navigationAction.label, path: navigationAction.href },
        { label: 'Newsletter', path: navigationAction.href },
      ],
    },
    {
      title: 'News',
      links: [
        { label: 'Trending Stories', path: '/news', id: trendingStories.id },
        { label: 'Featured Videos', path: '/news', id: featuredVideos.id },
        {
          label: technology.name,
          path: '/news',
          feedId: newsHub.feedId,
          categorySlug: technology.slug,
        },
        {
          label: health.name,
          path: '/news',
          feedId: newsHub.feedId,
          categorySlug: health.slug,
        },
        {
          label: politics.name,
          path: '/news',
          feedId: newsHub.feedId,
          categorySlug: politics.slug,
        },
        {
          label: environment.name,
          path: '/news',
          feedId: newsHub.feedId,
          categorySlug: environment.slug,
        },
      ],
    },
    {
      title: 'Blogs',
      links: [
        {
          label: quantumComputing.name,
          path: '/',
          feedId: blogs.feedId,
          categorySlug: quantumComputing.slug,
        },
        {
          label: aiEthics.name,
          path: '/',
          feedId: blogs.feedId,
          categorySlug: aiEthics.slug,
        },
        {
          label: spaceExploration.name,
          path: '/',
          feedId: blogs.feedId,
          categorySlug: spaceExploration.slug,
        },
        {
          label: biotechnology.name,
          path: '/',
          feedId: blogs.feedId,
          categorySlug: biotechnology.slug,
          isNew: true,
        },
      ],
    },
    {
      title: 'Podcasts',
      links: [
        { label: 'Latest Episodes', path: '/podcasts', id: latestPodcasts.id },
        {
          label: aiRevolution.title,
          path: '/podcasts',
          id: aiRevolution.titleId,
          isNew: true,
        },
        {
          label: aiConversations.title,
          path: '/podcasts',
          id: aiConversations.titleId,
        },
      ],
    },
    {
      title: 'Resources',
      isButtons: true,
      links: [
        { label: whitepapers.label, path: '/resources', id: whitepapers.id },
        { label: ebooks.label, path: '/resources', id: ebooks.id },
        { label: reports.label, path: '/resources', id: reports.id },
        { label: 'All Resources', path: '/resources' },
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
