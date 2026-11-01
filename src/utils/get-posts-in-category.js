import { allCategory } from '@data'

export function getPostsInCategory(posts, categorySlug) {
  if (categorySlug === allCategory.slug) return posts

  return posts.filter((post) => post.category === categorySlug)
}
