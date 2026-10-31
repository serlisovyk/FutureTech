import { Button } from '@components'
import { article } from '@data/article.js'
import { ArticleSection } from './ArticleSection.jsx'
import './ArticleBody.css'

export function ArticleBody({ sections }) {
  const { previewCount, moreId, moreLabel } = article

  const [lead, ...others] = sections
  const previewSections = others.slice(0, previewCount - 1)
  const hiddenSections = others.slice(previewCount - 1)
  const hasOthers = others.length > 0
  const hasHidden = hiddenSections.length > 0

  return (
    <div className="article-body" data-article-body>
      <ArticleSection
        id={lead.id}
        title={lead.title}
        paragraphs={lead.paragraphs}
        isLead
      />

      {hasOthers && (
        <div className="article-body__sections">
          {previewSections.map(({ id, title, paragraphs }) => (
            <ArticleSection key={id} id={id} title={title} paragraphs={paragraphs} />
          ))}

          {hasHidden && (
            <div className="article-body__region" id={moreId} data-disclosure-region>
              {hiddenSections.map(({ id, title, paragraphs }) => (
                <ArticleSection
                  key={id}
                  id={id}
                  title={title}
                  paragraphs={paragraphs}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {hasHidden && (
        <div className="article-body__more">
          <Button
            variant="outline"
            icon="ui/arrow-down"
            ariaControls={moreId}
            ariaExpanded={false}
            className="article-body__button"
            isCompact
            isDisclosureTrigger
          >
            {moreLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
