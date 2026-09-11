import { useMemo, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import CategoryFilter from '@/components/CategoryFilter'
import AlternatingList from '@/components/AlternatingList'
import { useSEO } from '@/hooks/useSEO'
import { foods } from '@/data/food'
import type { FoodCategory } from '@/types'

const CATEGORIES: (FoodCategory | 'All')[] = [
  'All',
  'Rajasthani Food',
  'Street Food',
  'Sweets',
  'Beverages',
]

export default function Food() {
  useSEO({
    title: 'Food',
    description: 'A premium Udaipur food guide: Dal Baati Churma, Mawa Kachori and more, matched to real photographs.',
      image: 'https://www.sharmispassions.com/wp-content/uploads/2020/12/19729847952_b5cc81291a_o.jpg?v=20260909',
    path: '/food',
  })

  const [active, setActive] = useState<FoodCategory | 'All'>('All')
  const filtered = useMemo(
    () => (active === 'All' ? foods : foods.filter((f) => f.category === active)),
    [active],
  )

  return (
    <div>
      <section className="bg-sand px-6 pb-10 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Food"
            title="A city best understood one plate at a time."
            description="Rajasthani thalis, street-side kachori, and the sweets Udaipur is quietly known for   every dish photographed as itself, never a stand-in."
          />
          <div className="mt-10">
            <CategoryFilter categories={CATEGORIES} active={active} onChange={(c) => setActive(c as FoodCategory | 'All')} />
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlternatingList
            items={filtered.map((f) => ({
              href: `/food/${f.slug}`,
              image: f.image,
              title: f.name,
              meta: f.category,
              description: f.shortDescription,
              tags: [f.priceRange, f.bestTime],
            }))}
          />
        </div>
      </section>
    </div>
  )
}





