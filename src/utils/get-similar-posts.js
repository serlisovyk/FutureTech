import { posts } from '@data/posts.js'

export function getSimilarPosts(post, count) {
  const { slug: currentSlug, category: currentCategory } = post

  const others = posts
    .filter(({ slug }) => slug !== currentSlug)
    .sort((a, b) => b.date.localeCompare(a.date))
  const sameCategory = others.filter(({ category }) => category === currentCategory)
  const rest = others.filter(({ category }) => category !== currentCategory)

  return [...sameCategory, ...rest].slice(0, count)
}
