import { blogCategories, newsCategories } from '@data'

export function getCategoryName(slug) {
  const category = [...blogCategories, ...newsCategories].find(
    (item) => item.slug === slug,
  )

  return category.name
}
