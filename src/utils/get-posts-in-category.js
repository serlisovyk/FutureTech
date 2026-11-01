import { allCategory } from '@data'

export function getPostsInCategory(posts, categorySlug) {
  const { slug: allSlug } = allCategory

  if (categorySlug === allSlug) return posts

  return posts.filter((post) => post.category === categorySlug)
}
