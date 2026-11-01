import { Heading, SectionHeading } from '@components'
import { sectionHeadingDemo } from '@data'

export function SectionHeadingDemo() {
  const {
    title,
    caption,
    heading: { tag, title: headingTitle, link },
  } = sectionHeadingDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{caption}</p>
      </div>

      <SectionHeading tag={tag} title={headingTitle} link={link} />

      <SectionHeading tag={tag} title={headingTitle} />
    </section>
  )
}
