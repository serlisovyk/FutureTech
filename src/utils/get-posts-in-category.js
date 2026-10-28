import { allCategory } from '@data/categories.js'

export function getPostsInCategory(posts, categorySlug) {
  if (categorySlug === allCategory.slug) return posts

  return posts.filter((post) => post.category === categorySlug)
}
