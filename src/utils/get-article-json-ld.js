import { getOrganizationJsonLd } from './get-organization-json-ld.js'

export function getArticleJsonLd(post, canonicalUrl, imageUrl) {
  const { '@context': context, ...publisher } = getOrganizationJsonLd()

  return {
    '@context': context,
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author.name },
    image: [imageUrl],
    publisher,
  }
}
