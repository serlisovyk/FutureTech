import { Button } from '@components'
import { article } from '@data'
import { ArticleSection } from '../ArticleSection'
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
      <ArticleSection {...lead} isLead />

      {hasOthers && (
        <div className="article-body__sections">
          {previewSections.map((section) => {
            const { id } = section

            return <ArticleSection key={id} {...section} />
          })}

          {hasHidden && (
            <div className="article-body__region" id={moreId} data-disclosure-region>
              {hiddenSections.map((section) => {
                const { id } = section

                return <ArticleSection key={id} {...section} />
              })}
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
