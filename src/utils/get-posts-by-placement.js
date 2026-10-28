import { posts } from '@data/posts.js'

export function getPostsByPlacement(placement) {
  return posts.filter((post) => post.placement === placement)
}
