import { Article, SimilarNews } from '@sections'
import { posts } from '@data'

export function getStaticData() {
  return posts.map((post) => {
    const { slug, title, excerpt } = post

    return {
      paths: { slug },
      props: { title, description: excerpt, post },
    }
  })
}

export default function ArticlePage({ post }) {
  return (
    <>
      <Article post={post} />
      <SimilarNews post={post} />
    </>
  )
}
