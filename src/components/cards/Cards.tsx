import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SmartImage from '@/components/SmartImage'

/**
 * A small set of distinct card compositions so listing pages don't all read
 * as the same repeated shape. Each card owns its own hover behaviour
 * (image scale, slight translation, arrow movement) and shares the same
 * design tokens (lake / sand / terracotta / olive / ink).
 */

interface BaseCardProps {
  href: string
  image: string
  title: string
  className?: string
}

/* -----------------------------------------------------------------------
   FEATURED CARD
   Large 16:9-ish image, small category label, large title, description, arrow.
   Use for hero-adjacent "top pick" placements.
----------------------------------------------------------------------- */

interface FeaturedCardProps extends BaseCardProps {
  category?: string
  description?: string
}

export function FeaturedCard({
  href,
  image,
  title,
  category,
  description,
  className = '',
}: FeaturedCardProps) {
  return (
    <Link to={href} data-cursor="View" className={`group block ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
        <SmartImage
          src={image}
          alt={title}
          label={title}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {category && (
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-lake-light">
          {category}
        </p>
      )}

      <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{title}</h3>

      {description && (
        <p className="mt-2 max-w-md text-sm leading-6 text-ink/60">
          {description}
        </p>
      )}

      <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink/70">
        Explore
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </span>
    </Link>
  )
}

/* -----------------------------------------------------------------------
   EDITORIAL CARD
   Image on one side, content on the other. Use sparingly for a single
   standout item within a grid (spans two columns on larger screens).
----------------------------------------------------------------------- */

interface EditorialCardProps extends BaseCardProps {
  eyebrow?: string
  description: string
  imageSide?: 'left' | 'right'
}

export function EditorialCard({
  href,
  image,
  title,
  eyebrow,
  description,
  imageSide = 'left',
  className = '',
}: EditorialCardProps) {
  return (
    <Link
      to={href}
      data-cursor="Read"
      className={`group grid overflow-hidden rounded-sm bg-sand-dark sm:grid-cols-2 ${className}`}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden sm:aspect-auto ${
          imageSide === 'right' ? 'sm:order-2' : ''
        }`}
      >
        <SmartImage
          src={image}
          alt={title}
          label={title}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center p-8 sm:p-10">
        <div>
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.22em] text-lake-light">
              {eyebrow}
            </p>
          )}
          <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm underline decoration-ink/20 underline-offset-4 group-hover:decoration-ink/60">
            Read more
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </Link>
  )
}

/* -----------------------------------------------------------------------
   COMPACT CARD
   Image, category, title, small metadata line. Dense grids (food, stories).
----------------------------------------------------------------------- */

interface CompactCardProps extends BaseCardProps {
  category?: string
  meta?: string
}

export function CompactCard({
  href,
  image,
  title,
  category,
  meta,
  className = '',
}: CompactCardProps) {
  return (
    <Link to={href} data-cursor="View" className={`group block ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        <SmartImage
          src={image}
          alt={title}
          label={title}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {category && (
        <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-lake-light">
          {category}
        </p>
      )}
      <h3 className="mt-1 font-serif text-xl">{title}</h3>
      {meta && <p className="mt-1 text-xs text-ink/45">{meta}</p>}
    </Link>
  )
}

/* -----------------------------------------------------------------------
   TALL CARD
   Portrait image, gradient overlay, bottom-anchored title. Mood / category tiles.
----------------------------------------------------------------------- */

interface TallCardProps extends BaseCardProps {
  description?: string
}

export function TallCard({
  href,
  image,
  title,
  description,
  className = '',
}: TallCardProps) {
  return (
    <Link to={href} data-cursor="View" className={`group block ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <SmartImage
          src={image}
          alt={title}
          label={title}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-serif text-2xl text-sand">{title}</h3>
          {description && (
            <p className="mt-2 text-sm leading-6 text-sand/75">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

/* -----------------------------------------------------------------------
   HORIZONTAL CARD
   Small thumbnail, content, arrow. List-style rows (search results, related items).
----------------------------------------------------------------------- */

interface HorizontalCardProps extends BaseCardProps {
  category?: string
  description?: string
}

export function HorizontalCard({
  href,
  image,
  title,
  category,
  description,
  className = '',
}: HorizontalCardProps) {
  return (
    <Link
      to={href}
      data-cursor="View"
      className={`group flex items-center gap-5 border-b border-ink/10 py-5 ${className}`}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-sm sm:h-24 sm:w-24">
        <SmartImage
          src={image}
          alt={title}
          label={title}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        {category && (
          <p className="text-[11px] uppercase tracking-[0.16em] text-lake-light">
            {category}
          </p>
        )}
        <h3 className="mt-0.5 truncate font-serif text-lg">{title}</h3>
        {description && (
          <p className="mt-0.5 truncate text-sm text-ink/55">{description}</p>
        )}
      </div>

      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
        strokeWidth={1.5}
      />
    </Link>
  )
}
