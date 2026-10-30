import { site } from '../../src/data/site.js'

function toLink({ path, title, description }) {
  return `- [${title}](${site.url}${path}): ${description}`
}

export function buildLlms(pages) {
  const indexable = pages.filter(({ isIndexable }) => isIndexable)
  const home = indexable.find(({ path }) => path === '/')
  const articles = indexable.filter(({ publishedTime }) => publishedTime)
  const sections = indexable.filter(({ publishedTime }) => !publishedTime)

  return [
    `# ${site.name}`,
    '',
    `> ${home.description}`,
    '',
    '## Pages',
    '',
    ...sections.map(toLink),
    '',
    '## Articles',
    '',
    ...articles.map(toLink),
    '',
  ].join('\n')
}
