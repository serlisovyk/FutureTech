import { posts } from '@data'

export function getPostsByPlacement(...placements) {
  return posts.filter((post) => placements.includes(post.placement))
}
