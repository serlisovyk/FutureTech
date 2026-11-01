import { blogCategories, newsCategories } from './categories.js'
import { episodes } from './podcasts.js'
import { resourceShowcases } from './resources.js'
import { stats } from './stats.js'
import { videos } from './videos.js'

const demoTag = 'Learn, Connect, and Innovate'

const [{ meta: ebookMeta, avatars: demoAvatars }] = resourceShowcases

export const uiKit = {
  title: 'UI kit',
  intro: 'Every component of the site in each of its variants.',
}

export const buttonDemo = {
  title: 'Button',
  groups: [
    {
      id: 'primary',
      caption: 'Primary: a link, a button, with each icon',
      buttons: [
        { id: 'link', label: 'Contact Us', href: '/contact' },
        { id: 'button', label: 'Contact Us' },
        {
          id: 'link-icon',
          label: 'Contact Us',
          href: '/contact',
          icon: 'ui/arrow-up-right',
        },
        { id: 'button-icon', label: 'Download', icon: 'ui/arrow-down' },
      ],
    },
    {
      id: 'primary-large',
      caption: 'Primary, large: a button',
      buttons: [{ id: 'button', label: 'Send', isLarge: true }],
    },
    {
      id: 'outline',
      caption: 'Outline: a link, a button, with each icon',
      buttons: [
        { id: 'link', label: 'Read More', variant: 'outline', href: '/news' },
        { id: 'button', label: 'Read More', variant: 'outline' },
        {
          id: 'link-icon',
          label: 'Read More',
          variant: 'outline',
          href: '/news',
          icon: 'ui/arrow-up-right',
        },
        {
          id: 'button-icon',
          label: 'Download',
          variant: 'outline',
          icon: 'ui/arrow-down',
        },
      ],
    },
    {
      id: 'outline-small',
      caption: 'Outline, small: a link and a button',
      buttons: [
        {
          id: 'link',
          label: 'Whitepapers',
          variant: 'outline',
          href: '/resources',
          icon: 'ui/arrow-up-right',
          isSmall: true,
        },
        {
          id: 'button',
          label: 'Whitepapers',
          variant: 'outline',
          icon: 'ui/arrow-up-right',
          isSmall: true,
        },
      ],
    },
    {
      id: 'outline-compact',
      caption: 'Outline, compact: a link and a button',
      buttons: [
        {
          id: 'link',
          label: 'Read Full Blog',
          variant: 'outline',
          href: '/resources',
          icon: 'ui/arrow-down',
          isCompact: true,
        },
        {
          id: 'button',
          label: 'Read Full Blog',
          variant: 'outline',
          icon: 'ui/arrow-down',
          isCompact: true,
        },
      ],
    },
    {
      id: 'ghost',
      caption: 'Ghost: a link and a button',
      buttons: [
        {
          id: 'link',
          label: 'Download Ebooks Now',
          variant: 'ghost',
          href: '/resources',
          icon: 'ui/arrow-up-right',
        },
        {
          id: 'button',
          label: 'Download Ebooks Now',
          variant: 'ghost',
          icon: 'ui/arrow-up-right',
        },
      ],
    },
    {
      id: 'ghost-compact',
      caption: 'Ghost, compact: a link and a button',
      buttons: [
        {
          id: 'link',
          label: 'Contact Us',
          variant: 'ghost',
          href: '/contact',
          icon: 'ui/arrow-up-right',
          isCompact: true,
        },
        {
          id: 'button',
          label: 'Contact Us',
          variant: 'ghost',
          icon: 'ui/arrow-up-right',
          isCompact: true,
        },
      ],
    },
  ],
}

export const tagDemo = {
  title: 'Tag',
  label: demoTag,
}

export const sectionHeadingDemo = {
  title: 'SectionHeading',
  caption: 'With the View All link, then without it',
  heading: {
    tag: demoTag,
    title: "Explore FutureTech's In-Depth Blog Posts",
    link: { href: '/news', label: 'View All Blogs' },
  },
}

export const statDemo = {
  title: 'Stat',
  caption: 'Regular, then large',
  stats,
}

export const metaDemo = {
  title: 'MetaItem and MetaGrid',
  plainCaption: 'Plain pairs',
  plainItems: [
    { label: 'Publication Date', value: 'October 15, 2023' },
    { label: 'Category', value: 'Biotechnology' },
    { label: 'Reading Time', value: '10 Min' },
    { label: 'Author Name', value: 'Dr. Emily Walker' },
  ],
  cardCaption: 'Cards, three and two',
  cards: [
    {
      id: 'podcast',
      items: [
        { label: 'Total Episodes', value: '50' },
        { label: 'Average Episode Length', value: '30 min' },
        { label: 'Release Frequency', value: 'Weekly' },
      ],
    },
    { id: 'ebook', items: ebookMeta },
  ],
}

export const counterDemo = {
  title: 'CounterPill',
  groups: [
    {
      id: 'plain',
      caption: 'Liked, then likes, comments, views and shares',
      pills: [
        {
          id: 'liked',
          icon: 'ui/heart',
          label: 'likes',
          count: '24.5k',
          isLiked: true,
        },
        { id: 'likes', icon: 'ui/heart', label: 'likes', count: '24.5k' },
        { id: 'comments', icon: 'ui/comment', label: 'comments', count: '340' },
        { id: 'views', icon: 'ui/eye', label: 'views', count: '1.2k' },
        { id: 'shares', icon: 'ui/send', label: 'shares', count: '86' },
      ],
    },
    {
      id: 'large',
      caption: 'Large, with the like as a toggle button',
      pills: [
        {
          id: 'likes',
          icon: 'ui/heart',
          label: 'likes',
          count: '24.5k',
          likedCount: '24.5k',
          likeKey: 'ui-kit',
          isLarge: true,
        },
        {
          id: 'views',
          icon: 'ui/eye',
          label: 'views',
          count: '50k',
          isLarge: true,
        },
        {
          id: 'shares',
          icon: 'ui/send',
          label: 'shares',
          count: '206',
          isLarge: true,
        },
      ],
    },
  ],
}

export const badgeDemo = {
  title: 'Badge',
  label: 'New',
}

export const avatarDemo = {
  title: 'AvatarGroup',
  caption: 'In a rounded box, then in a capsule',
  avatars: demoAvatars,
}

export const newsCardDemo = {
  title: 'NewsCard',
  caption:
    'Three across: the photo, the title, the category, the counters and the link to the article',
  placement: 'trending',
}

export const videoCardDemo = {
  title: 'VideoCard',
  videoCaption:
    'The video, two across: the play button, the duration, the title and the text',
  videos: videos.slice(0, 2),
  episodeCaption:
    'The episode, three across: the same with the Listen Podcast button',
  episodes: episodes.slice(0, 3),
}

export const feedDemo = {
  title: 'PostRow and PostFeed',
  blogCaption: 'The blog feed: the tabs filter the rows',
  blog: {
    id: 'ui-blog-feed',
    categories: blogCategories,
    placement: 'blogs',
  },
  newsCaption:
    'The news feed, limited to the first two posts: a tab with no post shows the empty state',
  news: {
    id: 'ui-news-feed',
    categories: newsCategories,
    placement: 'headlines',
    limit: 2,
  },
}
