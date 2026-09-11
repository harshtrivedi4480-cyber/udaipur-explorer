import SectionHeader from '@/components/SectionHeader'
import AlternatingList from '@/components/AlternatingList'
import { useSEO } from '@/hooks/useSEO'
import { experiences } from '@/data/experiences'

export default function Experiences() {
  useSEO({
    title: 'Experiences',
    description: 'Sunset boat rides, cultural evenings, heritage walks and more   things worth experiencing in Udaipur.',
    image: '/images/experiences/sajjangarh-sunset.jpg',
    path: '/experiences',
  })

  return (
    <div>
      <section className="bg-sand px-6 pb-10 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Experiences"
            title="Things worth experiencing."
            description="Beyond sightseeing   the boat rides, walks and evenings that give Udaipur its rhythm."
          />
        </div>
      </section>

      <section className="bg-sand px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlternatingList
            items={experiences.map((e) => ({
              href: `/experiences/${e.slug}`,
              image: e.image,
              title: e.title,
              meta: e.location,
              description: e.shortDescription,
              tags: [e.duration, e.idealTime],
            }))}
          />
        </div>
      </section>
    </div>
  )
}

