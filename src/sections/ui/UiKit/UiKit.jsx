import {
  AvatarGroup,
  Badge,
  Button,
  CounterPill,
  Heading,
  MetaGrid,
  NewsCard,
  SectionHeading,
  Stat,
  Tag,
  VideoCard,
} from '@components'
import { resourceShowcases } from '@data/resources.js'
import { stats } from '@data/stats.js'
import {
  articleMeta,
  episodeCardDemo,
  podcastMeta,
  sectionHeadingDemo,
  videoCardDemo,
} from '@data/ui-kit.js'
import { getPostsByPlacement } from '@utils'
import './UiKit.css'

export function UiKit() {
  const { meta: ebookMeta, avatars } = resourceShowcases[0]
  const trendingPosts = getPostsByPlacement('trending')

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
          tag={sectionHeadingDemo.tag}
          title={sectionHeadingDemo.title}
          link={sectionHeadingDemo.link}
        />
        <SectionHeading
          tag={sectionHeadingDemo.tag}
          title={sectionHeadingDemo.title}
        />
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            Stat
          </Heading>
          <p className="ui-kit__caption">Regular, then large</p>
          <div className="ui-kit__row ui-kit__row--wide">
            {stats.map(({ id, value, label }) => (
              <Stat key={id} value={value} label={label} />
            ))}
          </div>
          <div className="ui-kit__row ui-kit__row--wide">
            {stats.map(({ id, value, label }) => (
              <Stat key={id} value={value} label={label} isLarge />
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

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            NewsCard
          </Heading>
          <p className="ui-kit__caption">
            Three across: the photo, the title, the category, the counters and the
            link to the article
          </p>
          <div className="ui-kit__grid ui-kit__grid--news">
            {trendingPosts.map((post) => {
              const { slug, title, category, image, imageAlt, counters } = post

              return (
                <NewsCard
                  key={slug}
                  slug={slug}
                  title={title}
                  category={category}
                  image={image}
                  imageAlt={imageAlt}
                  likes={counters.likes}
                  comments={counters.comments}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="ui-kit__group">
        <div className="container ui-kit__body">
          <Heading level={2} size="h3">
            VideoCard
          </Heading>
          <p className="ui-kit__caption">
            The video, two across: the play button, the duration, the title and the
            text
          </p>
          <div className="ui-kit__grid ui-kit__grid--video">
            {videoCardDemo.map(({ id, title, text, duration, poster, videoId }) => (
              <VideoCard
                key={id}
                title={title}
                text={text}
                duration={duration}
                image={poster}
                videoId={videoId}
              />
            ))}
          </div>
          <p className="ui-kit__caption">
            The episode, three across: the same with the Listen Podcast button
          </p>
          <div className="ui-kit__grid ui-kit__grid--episode">
            {episodeCardDemo.map(({ id, title, text, duration, image, videoId }) => (
              <VideoCard
                key={id}
                title={title}
                text={text}
                duration={duration}
                image={image}
                videoId={videoId}
                isEpisode
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
