import { Photo } from '@components'
import {
  articleHeroPhotoBreakpoints,
  articleHeroPhotoSizes,
} from '@data/card-photos.js'
import './ArticleHero.css'

export function ArticleHero({ titleId, title, image, imageAlt }) {
  return (
    <header className="article-hero">
      <Photo
        src={image}
        alt={imageAlt}
        sizes={articleHeroPhotoSizes}
        breakpoints={articleHeroPhotoBreakpoints}
        loading="eager"
        fetchPriority="high"
        className="article-hero__photo"
      />
      <h1 className="article-hero__title" id={titleId}>
        {title}
      </h1>
    </header>
  )
}
