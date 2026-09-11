import { Link, Navigate, useParams } from 'react-router-dom'
import SmartImage from '@/components/SmartImage'
import SavedButton from '@/components/SavedButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useSEO } from '@/hooks/useSEO'
import { getHotelBySlug } from '@/data/hotels'

export default function HotelDetail() {
  const { slug = '' } = useParams()
  const hotel = getHotelBySlug(slug)

  useSEO({
    title: hotel ? hotel.name : 'Stay not found',
    description: hotel ? hotel.shortDescription : 'This property could not be found.',
    image: hotel?.image,
    path: `/stays/${slug}`,
    breadcrumbs: hotel
      ? [{ label: 'Stays', href: '/stays' }, { label: hotel.name }]
      : undefined,
  })

  if (!hotel) return <Navigate to="/404" replace />

  return (
    <div>
      <section className="relative flex h-[60vh] min-h-[380px] items-end">
        <SmartImage src={hotel.image} alt={hotel.name} label={hotel.name} priority className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-12 pt-40 lg:px-0">
          <p className="text-sm tracking-wide text-sand/80">{hotel.category}</p>
          <h1 className="mt-3 font-serif text-4xl text-sand sm:text-6xl">{hotel.name}</h1>
          <p className="mt-2 text-sand/80">{hotel.location}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-0">
        <div className="flex items-start justify-between gap-6">
          <Breadcrumbs items={[{ label: 'Stays', href: '/stays' }, { label: hotel.name }]} />
          <SavedButton category="hotels" slug={hotel.slug} labelled />
        </div>

        <p className="mt-8 max-w-prose font-serif text-2xl italic leading-relaxed text-ink/85">
          {hotel.shortDescription}
        </p>

        <div className="mt-10 grid gap-6 border-y border-ink/10 py-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/40">Price category</p>
            <p className="mt-1 text-ink">{hotel.priceCategory}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-ink/40">Proximity</p>
            <p className="mt-1 text-ink">{hotel.proximity}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-serif text-2xl text-ink">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {hotel.highlights.map((h) => (
              <li key={h} className="rounded-sm border border-ink/10 px-4 py-3 text-sm text-ink/80">
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Link to={`/map`} className="text-sm text-ink underline decoration-ink/20 underline-offset-4">
            View on the interactive map
          </Link>
        </div>
      </section>
    </div>
  )
}
