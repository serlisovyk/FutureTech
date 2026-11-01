import { blogCategories, newsCategories } from '@data'

export function getCategoryName(slug) {
  const category = [...blogCategories, ...newsCategories].find(
    ({ slug: categorySlug }) => categorySlug === slug,
  )

  const { name } = category

  return name
}
