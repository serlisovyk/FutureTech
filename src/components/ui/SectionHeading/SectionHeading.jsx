import { Button } from '@components/ui/Button'
import { Heading } from '@components/ui/Heading'
import { Tag } from '@components/ui/Tag'
import './SectionHeading.css'

export function SectionHeading({ tag, title, titleId, children, link = {} }) {
  const { href, label } = link

  const hasLink = Boolean(href)

  return (
    <div className="section-heading">
      <div className="section-heading__inner container" data-reveal>
        <div className="section-heading__text">
          <Tag>{tag}</Tag>
          <Heading id={titleId} level={2} size="h2">
            {title}
          </Heading>
        </div>

        {hasLink && (
          <Button variant="outline" icon="ui/arrow-up-right" href={href}>
            {label}
          </Button>
        )}

        {children}
      </div>
    </div>
  )
}
