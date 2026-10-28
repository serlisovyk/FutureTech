import {
  AvatarGroup,
  Badge,
  Button,
  CounterPill,
  Heading,
  MetaGrid,
  SectionHeading,
  Stat,
  Tag,
} from '@components'
import { resourceShowcases } from '@data/resources.js'
import { stats } from '@data/stats.js'
import './UiKit.css'

const articleMeta = [
  { label: 'Publication Date', value: 'October 15, 2023' },
  { label: 'Category', value: 'Healthcare' },
  { label: 'Reading Time', value: '10 Min' },
  { label: 'Author Name', value: 'Dr. Emily Walker' },
]

const podcastMeta = [
  { label: 'Total Episodes', value: '50' },
  { label: 'Average Episode Length', value: '30 min' },
  { label: 'Release Frequency', value: 'Weekly' },
]

export function UiKit() {
  const { meta: ebookMeta, avatars } = resourceShowcases[0]

  return (
    <div className="ui-kit">
      <div className="container">
        <Heading level={1} size="display">
          UI kit
        </Heading>
        <p className="ui-kit__intro">
          Every component of the site in each of its variants.
        </p>
      </div>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            Button
          </Heading>
          <p className="ui-kit__caption">
            Primary: a link, a button, with each icon
          </p>
          <div className="ui-kit__row">
            <Button href="/contact">Contact Us</Button>
            <Button>Contact Us</Button>
            <Button href="/contact" icon="ui/arrow-up-right">
              Contact Us
            </Button>
            <Button icon="ui/arrow-down">Download</Button>
          </div>
          <p className="ui-kit__caption">
            Outline: a link, a button, with each icon
          </p>
          <div className="ui-kit__row">
            <Button variant="outline" href="/news">
              Read More
            </Button>
            <Button variant="outline">Read More</Button>
            <Button variant="outline" href="/news" icon="ui/arrow-up-right">
              Read More
            </Button>
            <Button variant="outline" icon="ui/arrow-down">
              Download
            </Button>
          </div>
          <p className="ui-kit__caption">Outline, small: a link and a button</p>
          <div className="ui-kit__row">
            <Button
              variant="outline"
              href="/resources"
              icon="ui/arrow-up-right"
              isSmall
            >
              Whitepapers
            </Button>
            <Button variant="outline" icon="ui/arrow-up-right" isSmall>
              Whitepapers
            </Button>
          </div>
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            Tag
          </Heading>
          <div className="ui-kit__row">
            <Tag>Learn, Connect, and Innovate</Tag>
          </div>
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            SectionHeading
          </Heading>
          <p className="ui-kit__caption">With the View All link, then without it</p>
        </div>
        <SectionHeading
          tag="Learn, Connect, and Innovate"
          title="Explore FutureTech's In-Depth Blog Posts"
          link={{ href: '/news', label: 'View All Blogs' }}
        />
        <SectionHeading
          tag="Learn, Connect, and Innovate"
          title="Explore FutureTech's In-Depth Blog Posts"
        />
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            Stat
          </Heading>
          <p className="ui-kit__caption">Regular, then large</p>
          <div className="ui-kit__row ui-kit__row--wide">
            {stats.map((stat) => (
              <Stat key={stat.id} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="ui-kit__row ui-kit__row--wide">
            {stats.map((stat) => (
              <Stat key={stat.id} value={stat.value} label={stat.label} isLarge />
            ))}
          </div>
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            MetaItem and MetaGrid
          </Heading>
          <p className="ui-kit__caption">Plain pairs</p>
          <MetaGrid items={articleMeta} />
          <p className="ui-kit__caption">Cards, three and two</p>
          <MetaGrid items={podcastMeta} isCard />
          <MetaGrid items={ebookMeta} isCard />
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            CounterPill
          </Heading>
          <p className="ui-kit__caption">
            Liked, then likes, comments, views and shares
          </p>
          <div className="ui-kit__row">
            <CounterPill icon="ui/heart" label="likes" count="24.5k" isLiked />
            <CounterPill icon="ui/heart" label="likes" count="24.5k" />
            <CounterPill icon="ui/comment" label="comments" count="340" />
            <CounterPill icon="ui/eye" label="views" count="1.2k" />
            <CounterPill icon="ui/send" label="shares" count="86" />
          </div>
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            Badge
          </Heading>
          <div className="ui-kit__row">
            <Badge>New</Badge>
          </div>
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            AvatarGroup
          </Heading>
          <div className="ui-kit__panel">
            <AvatarGroup avatars={avatars} />
          </div>
        </div>
      </section>
    </div>
  )
}
