import { getOrganizationJsonLd } from './get-organization-json-ld.js'

export function getArticleJsonLd(post, canonicalUrl, imageUrl) {
  const {
    title,
    excerpt,
    date,
    author: { name: authorName },
  } = post

  const { '@context': context, ...publisher } = getOrganizationJsonLd()

  return {
    '@context': context,
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    headline: title,
    description: excerpt,
    datePublished: date,
    author: { '@type': 'Person', name: authorName },
    image: [imageUrl],
    publisher,
  }
}
