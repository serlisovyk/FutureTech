import { Article } from '@sections'
import { posts } from '@data/posts.js'

export function getStaticData() {
  return posts.map((post) => ({
    paths: { slug: post.slug },
    props: { title: post.title, description: post.excerpt, post },
  }))
}

export default function ArticlePage({ post }) {
  return <Article post={post} />
}
