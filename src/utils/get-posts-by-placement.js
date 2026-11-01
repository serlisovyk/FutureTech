import { posts } from '@data'

export function getPostsByPlacement(placement) {
  return posts.filter((post) => post.placement === placement)
}
