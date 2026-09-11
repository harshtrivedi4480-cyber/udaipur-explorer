import { useMemo, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import CategoryFilter from '@/components/CategoryFilter'
import AlternatingList from '@/components/AlternatingList'
import { useSEO } from '@/hooks/useSEO'
import { hotels } from '@/data/hotels'
import type { HotelCategory } from '@/types'

const CATEGORIES: (HotelCategory | 'All')[] = ['All', 'Luxury', 'Heritage', 'Boutique', 'Lake View', 'Budget']

export default function Stays() {
  useSEO({
    title: 'Stays',
    description: 'Island palaces, heritage havelis and lakeside boutique hotels in Udaipur, each shown with its own real property.',
    image: '/images/hotels/shiv-niwas-palace.jpg',
    path: '/stays',
  })

  const [active, setActive] = useState<HotelCategory | 'All'>('All')
  const filtered = useMemo(
    () => (active === 'All' ? hotels : hotels.filter((h) => h.category === active)),
    [active],
  )

  return (
    <div>
      <section className="bg-sand px-6 pb-10 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Stays"
            title="From island palaces to lakeside havelis."
            description="Every property shown here is real, matched to its own image   never a stand-in palace shot."
          />
          <div className="mt-10">
            <CategoryFilter categories={CATEGORIES} active={active} onChange={(c) => setActive(c as HotelCategory | 'All')} />
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlternatingList
            items={filtered.map((h) => ({
              href: `/stays/${h.slug}`,
              image: h.image,
              title: h.name,
              meta: `${h.category}  ${h.location}`,
              description: h.shortDescription,
              tags: [h.priceCategory],
            }))}
          />
        </div>
      </section>
    </div>
  )
}

