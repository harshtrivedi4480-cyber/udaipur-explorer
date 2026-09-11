import SectionHeader from '@/components/SectionHeader'
import AlternatingList from '@/components/AlternatingList'
import { useSEO } from '@/hooks/useSEO'
import { places } from '@/data/places'
import { IMAGE_URLS } from '@/data/imageUrls'

export default function HiddenGems() {
  useSEO({
    title: 'Hidden Gems',
    description: 'Udaipur beyond the postcard   the lesser-known places most visitors walk past.',
    image: IMAGE_URLS.places.ahamCenotaphs,
    path: '/hidden-gems',
  })

  const hidden = places.filter((p) => p.hidden)

  return (
    <div>
      <section className="bg-lake-deep px-6 pb-14 pt-40 text-sand lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Beyond the postcard"
            title="Udaipur beyond the postcard."
            description="Real, verified places that sit just outside the usual loop   quiet, uncrowded, and easy to miss without knowing to look."
            dark
          />
        </div>
      </section>

      <section className="bg-sand px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {hidden.length > 0 ? (
            <AlternatingList
              items={hidden.map((p) => ({
                href: `/places/${p.slug}`,
                image: p.image,
                title: p.name,
                meta: p.location,
                description: p.shortDescription,
                tags: [p.bestTime, p.duration],
              }))}
            />
          ) : (
            <p className="py-16 text-center text-ink/50">More hidden gems are on their way.</p>
          )}
        </div>
      </section>
    </div>
  )
}

