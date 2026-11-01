import { posts } from '@data'

export function getSimilarPosts(post, count) {
  const { slug: currentSlug, category: currentCategory } = post

  const others = posts
    .filter(({ slug }) => slug !== currentSlug)
    .sort(({ date: firstDate }, { date: secondDate }) =>
      secondDate.localeCompare(firstDate),
    )

  const sameCategory = others.filter(({ category }) => category === currentCategory)

  const rest = others.filter(({ category }) => category !== currentCategory)

  return [...sameCategory, ...rest].slice(0, count)
}
