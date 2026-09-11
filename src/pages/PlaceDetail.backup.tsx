import { Link, Navigate, useParams } from 'react-router-dom'
import { MapPin, Clock, Sun, Camera as CameraIcon } from 'lucide-react'
import SmartImage from '@/components/SmartImage'
import SavedButton from '@/components/SavedButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionHeader from '@/components/SectionHeader'
import { useSEO } from '@/hooks/useSEO'
import { getPlaceBySlug, places } from '@/data/places'
import { stories } from '@/data/stories'

export default function PlaceDetail() {
  const { slug = '' } = useParams()
  const place = getPlaceBySlug(slug)

  useSEO({
    title: place ? place.name : 'Place not found',
    description: place ? place.shortDescription : 'This place could not be found.',
    image: place?.image,
    path: `/places/${slug}`,
    breadcrumbs: place
      ? [{ label: 'Places', href: '/places' }, { label: place.name }]
      : undefined,
  })

  if (!place) return <Navigate to="/404" replace />

  const nearby = places.filter((p) => place.nearbyPlaces.includes(p.slug))
  const relatedStories = stories.filter((s) => s.relatedPlaces.includes(place.slug))

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[420px] items-end">
        <SmartImage src={place.image} alt={place.name} label={place.name} priority className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-14 pt-40 lg:px-0">
          <p className="text-sm tracking-wide text-sand/80">{place.category}</p>
          <h1 className="mt-3 font-serif text-5xl text-sand sm:text-7xl">{place.name}</h1>
          <p className="mt-3 flex items-center gap-1.5 text-sand/80">
            <MapPin className="h-4 w-4" strokeWidth={1.5} /> {place.location}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-0">
        <div className="flex items-start justify-between gap-6">
          <Breadcrumbs
            items={[
              { label: 'Places', href: '/places' },
              { label: place.category, href: `/places?category=${place.category}` },
              { label: place.name },
            ]}
          />
          <SavedButton category="places" slug={place.slug} labelled />
        </div>

        <p className="mt-8 max-w-prose font-serif text-2xl italic leading-relaxed text-ink/85">
          {place.shortDescription}
        </p>

        {/* Quick facts */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-ink/10 py-8 sm:grid-cols-4">
          <div>
            <Clock className="h-4 w-4 text-lake-light" strokeWidth={1.5} />
            <p className="mt-2 text-xs uppercase tracking-wide text-ink/40">Duration</p>
            <p className="mt-1 text-sm text-ink">{place.duration}</p>
          </div>
          <div>
            <Sun className="h-4 w-4 text-lake-light" strokeWidth={1.5} />
            <p className="mt-2 text-xs uppercase tracking-wide text-ink/40">Best time</p>
            <p className="mt-1 text-sm text-ink">{place.bestTime}</p>
          </div>
          {place.entryInfo && (
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-wide text-ink/40">Entry</p>
              <p className="mt-1 text-sm text-ink">{place.entryInfo}</p>
            </div>
          )}
          {place.photographyNotes && (
            <div className="col-span-2 sm:col-span-1">
              <CameraIcon className="h-4 w-4 text-lake-light" strokeWidth={1.5} />
              <p className="mt-2 text-xs uppercase tracking-wide text-ink/40">Photography</p>
              <p className="mt-1 text-sm text-ink">{place.photographyNotes}</p>
            </div>
          )}
        </div>

        {/* Story */}
        <div className="mt-12 max-w-prose space-y-5 leading-relaxed text-ink/80">
          <p>{place.description}</p>
          <h2 className="pt-4 font-serif text-2xl text-ink">Why visit</h2>
          <p>{place.whyVisit}</p>
        </div>

        {/* Highlights */}
        <div className="mt-10">
          <h2 className="font-serif text-2xl text-ink">What to see</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {place.highlights.map((h) => (
              <li key={h} className="rounded-sm border border-ink/10 px-4 py-3 text-sm text-ink/80">
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-ink">Location</h2>
          <p className="mt-2 text-sm text-ink/60">
            {place.latitude.toFixed(4)}, {place.longitude.toFixed(4)}
          </p>
          <Link
            to={`/map?focus=${place.slug}`}
            className="mt-3 inline-block text-sm text-ink underline decoration-ink/20 underline-offset-4"
          >
            View on the interactive map
          </Link>
        </div>
      </section>

      {/* Nearby places */}
      {nearby.length > 0 && (
        <section className="bg-lake-deep px-6 py-16 text-sand lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Nearby" title="Nearby places" dark />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((p) => (
                <Link key={p.slug} to={`/places/${p.slug}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <SmartImage src={p.image} alt={p.name} label={p.name} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-sand">{p.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related stories */}
      {relatedStories.length > 0 && (
        <section className="bg-sand px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Read more" title="Related stories" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {relatedStories.map((s) => (
                <Link key={s.slug} to={`/stories/${s.slug}`} className="group">
                  <div className="aspect-[16/9] overflow-hidden rounded-sm">
                    <SmartImage src={s.image} alt={s.title} label={s.title} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ink">{s.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
