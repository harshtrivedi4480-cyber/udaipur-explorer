import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeader from '@/components/SectionHeader'
import CategoryFilter from '@/components/CategoryFilter'
import AlternatingList from '@/components/AlternatingList'
import { useSEO } from '@/hooks/useSEO'
import { places } from '@/data/places'
import type { PlaceCategory } from '@/types'

const CATEGORIES: (PlaceCategory | 'All')[] = [
  'All',
  'Lakes',
  'Palaces',
  'Temples',
  'Gardens',
  'Heritage',
  'Viewpoints',
  'Markets',
]

export default function Places() {
  useSEO({
    title: 'Places',
    description: 'Lakes, palaces, temples and quiet ghats   every place worth slowing down for in Udaipur.',
    image: '/images/places/city-palace-unsplash.jpg',
    path: '/places',
  })

  const [params, setParams] = useSearchParams()
  const initial = (params.get('category') as PlaceCategory) || 'All'
  const [active, setActive] = useState<PlaceCategory | 'All'>(
    CATEGORIES.includes(initial) ? initial : 'All',
  )

  const filtered = useMemo(
    () => (active === 'All' ? places : places.filter((p) => p.category === active)),
    [active],
  )

  return (
    <div>
      <section className="bg-sand px-6 pb-10 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Places"
            title="Places worth slowing down for."
            description="From palace courtyards to quiet lakeside ghats   the full spread of what makes up Udaipur."
          />
          <div className="mt-10">
            <CategoryFilter
              categories={CATEGORIES}
              active={active}
              onChange={(cat) => {
                setActive(cat as PlaceCategory | 'All')
                if (cat === 'All') setParams({})
                else setParams({ category: cat })
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-ink/50">No places in this category yet.</p>
          ) : (
            <AlternatingList
              items={filtered.map((p) => ({
                href: `/places/${p.slug}`,
                image: p.image,
                title: p.name,
                meta: `${p.category}  ${p.location}`,
                description: p.shortDescription,
                tags: [p.bestTime, p.duration],
              }))}
            />
          )}
        </div>
      </section>
    </div>
  )
}

