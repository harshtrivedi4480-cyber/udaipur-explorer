import { Link } from 'react-router-dom'
import SectionHeader from '@/components/SectionHeader'
import SmartImage from '@/components/SmartImage'
import SavedButton from '@/components/SavedButton'
import EmptyState from '@/components/EmptyState'
import { useSaved } from '@/hooks/useSaved'
import { useSEO } from '@/hooks/useSEO'
import { getPlaceBySlug } from '@/data/places'
import { getFoodBySlug } from '@/data/food'
import { getHotelBySlug } from '@/data/hotels'
import { getExperienceBySlug } from '@/data/experiences'
import { getStoryBySlug } from '@/data/stories'
import type { SavedCategory } from '@/types'

function resolve(category: SavedCategory, slug: string) {
  switch (category) {
    case 'places': {
      const p = getPlaceBySlug(slug)
      return p && { title: p.name, image: p.image, href: `/places/${p.slug}`, meta: p.category }
    }
    case 'food': {
      const f = getFoodBySlug(slug)
      return f && { title: f.name, image: f.image, href: `/food/${f.slug}`, meta: f.category }
    }
    case 'hotels': {
      const h = getHotelBySlug(slug)
      return h && { title: h.name, image: h.image, href: `/stays/${h.slug}`, meta: h.category }
    }
    case 'experiences': {
      const e = getExperienceBySlug(slug)
      return e && { title: e.title, image: e.image, href: `/experiences/${e.slug}`, meta: 'Experience' }
    }
    case 'stories': {
      const s = getStoryBySlug(slug)
      return s && { title: s.title, image: s.image, href: `/stories/${s.slug}`, meta: 'Story' }
    }
  }
}

export default function Saved() {
  useSEO({
    title: 'Saved',
    description: 'Your saved places, food, stays, experiences and stories from Udaipur Explorer.',
    path: '/saved',
  })

  const { items } = useSaved()
  const resolved = items.map((i) => ({ ...i, data: resolve(i.category, i.slug) })).filter((i) => i.data)

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
      <SectionHeader eyebrow="Saved" title="Your Udaipur, saved." description="Everything you've bookmarked while exploring this guide." />

      {resolved.length === 0 ? (
        <div className="mt-16">
          <EmptyState
            title="Nothing saved yet"
            description="Tap the bookmark icon on any place, dish, stay, experience or story to keep it here."
            action={
              <Link to="/places" className="mt-2 inline-block rounded-full bg-ink px-6 py-3 text-sm text-sand">
                Start exploring
              </Link>
            }
          />
        </div>
      ) : (
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resolved.map(({ category, slug, data }) => (
            <div key={`${category}-${slug}`} className="group relative">
              <Link to={data!.href}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <SmartImage src={data!.image} alt={data!.title} label={data!.title} />
                </div>
                <p className="mt-3 text-xs uppercase tracking-wide text-ink/45">{data!.meta}</p>
                <h3 className="mt-1 font-serif text-xl text-ink">{data!.title}</h3>
              </Link>
              <SavedButton category={category} slug={slug} className="absolute right-3 top-3" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
