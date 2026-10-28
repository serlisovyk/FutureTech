import { Button } from './Button.jsx'
import { Heading } from './Heading.jsx'
import { Tag } from './Tag.jsx'
import './SectionHeading.css'

export function SectionHeading({ tag, title, link }) {
  return (
    <div className="section-heading">
      <div className="section-heading__inner container">
        <div className="section-heading__text">
          <Tag>{tag}</Tag>
          <Heading level={2} size="h2">
            {title}
          </Heading>
        </div>
        {link && (
          <Button variant="outline" icon="arrow-up-right" href={link.href}>
            {link.label}
          </Button>
        )}
      </div>
    </div>
  )
}
