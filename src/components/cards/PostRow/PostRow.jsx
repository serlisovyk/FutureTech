import { Photo } from '@components/media/Photo'
import { Button } from '@components/ui/Button'
import { CounterPill } from '@components/ui/CounterPill'
import { postRowAvatarBreakpoints, postRowAvatarSizes } from '@data/card-photos.js'
import { formatCount, formatDate, getCategoryName, getPostUrl } from '@utils'
import './PostRow.css'

export function PostRow(props) {
  const {
    slug,
    title,
    excerpt,
    date,
    category,
    authorName,
    authorAvatar,
    likes,
    comments,
    shares,
  } = props

  return (
    <article className="post-row">
      <div className="post-row__author">
        <Photo
          src={authorAvatar}
          alt=""
          ariaHidden="true"
          sizes={postRowAvatarSizes}
          breakpoints={postRowAvatarBreakpoints}
          className="post-row__avatar"
        />
        <div className="post-row__author-text">
          <p className="post-row__author-name">{authorName}</p>
          <p className="post-row__category">{getCategoryName(category)}</p>
        </div>
      </div>
      <div className="post-row__body">
        <time className="post-row__date" dateTime={date}>
          {formatDate(date)}
        </time>
        <div className="post-row__text">
          <h3 className="post-row__title">{title}</h3>
          <p className="post-row__excerpt">{excerpt}</p>
        </div>
        <div className="post-row__counters">
          <CounterPill icon="ui/heart" label="likes" count={formatCount(likes)} />
          <CounterPill
            icon="ui/comment"
            label="comments"
            count={formatCount(comments)}
          />
          <CounterPill icon="ui/send" label="shares" count={formatCount(shares)} />
        </div>
      </div>
      <Button
        variant="outline"
        icon="ui/arrow-up-right"
        href={getPostUrl(slug)}
        className="post-row__button"
      >
        View Blog
        <span className="visually-hidden"> about {title}</span>
      </Button>
    </article>
  )
}
