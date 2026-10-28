import { blogCategories, newsCategories } from './categories.js'
import { episodes } from './podcasts.js'
import { videos } from './videos.js'

export const articleMeta = [
  { label: 'Publication Date', value: 'October 15, 2023' },
  { label: 'Category', value: 'Healthcare' },
  { label: 'Reading Time', value: '10 Min' },
  { label: 'Author Name', value: 'Dr. Emily Walker' },
]

export const podcastMeta = [
  { label: 'Total Episodes', value: '50' },
  { label: 'Average Episode Length', value: '30 min' },
  { label: 'Release Frequency', value: 'Weekly' },
]

export const sectionHeadingDemo = {
  tag: 'Learn, Connect, and Innovate',
  title: "Explore FutureTech's In-Depth Blog Posts",
  link: { href: '/news', label: 'View All Blogs' },
}

export const videoCardDemo = videos.slice(0, 2)

export const episodeCardDemo = episodes.slice(0, 3)

export const blogFeedDemo = {
  id: 'ui-blog-feed',
  categories: blogCategories,
  placement: 'blogs',
}

export const newsFeedDemo = {
  id: 'ui-news-feed',
  categories: newsCategories,
  placement: 'headlines',
  limit: 2,
}
