import { Link, Navigate, useParams } from 'react-router-dom'
import SmartImage from '@/components/SmartImage'
import SavedButton from '@/components/SavedButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useSEO } from '@/hooks/useSEO'
import { getExperienceBySlug } from '@/data/experiences'
import { places } from '@/data/places'

export default function ExperienceDetail() {
  const { slug = '' } = useParams()
  const experience = getExperienceBySlug(slug)

  useSEO({
    title: experience ? experience.title : 'Experience not found',
    description: experience ? experience.shortDescription : 'This experience could not be found.',
    image: experience?.image,
    path: `/experiences/${slug}`,
    breadcrumbs: experience
      ? [{ label: 'Experiences', href: '/experiences' }, { label: experience.title }]
      : undefined,
  })

  if (!experience) return <Navigate to="/404" replace />

  const nearby = places.filter((p) => experience.nearbyPlaces.includes(p.slug))

  return (
    <div>
      <section className="relative flex h-[60vh] min-h-[380px] items-end">
        <SmartImage src={experience.image} alt={experience.title} label={experience.title} priority className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-12 pt-40 lg:px-0">
          <h1 className="font-serif text-4xl text-sand sm:text-6xl">{experience.title}</h1>
          <p className="mt-2 text-sand/80">{experience.location}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-0">
        <div className="flex items-start justify-between gap-6">
          <Breadcrumbs items={[{ label: 'Experiences', href: '/experiences' }, { label: experience.title }]} />
          <SavedButton category="experiences" slug={experience.slug} labelled />
        </div>

        <p className="mt-8 max-w-prose font-serif text-2xl italic leading-relaxed text-ink/85">
          {experience.shortDescription}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-ink/10 py-8 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/40">Duration</p>
            <p className="mt-1 text-sm text-ink">{experience.duration}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/40">Ideal time</p>
            <p className="mt-1 text-sm text-ink">{experience.idealTime}</p>
          </div>
          {experience.difficulty && (
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Difficulty</p>
              <p className="mt-1 text-sm text-ink">{experience.difficulty}</p>
            </div>
          )}
          {experience.estimatedCost && (
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Cost</p>
              <p className="mt-1 text-sm text-ink">{experience.estimatedCost}</p>
            </div>
          )}
        </div>

        <div className="mt-10 max-w-prose space-y-4 leading-relaxed text-ink/80">
          <p>{experience.story}</p>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="bg-lake-deep px-6 py-16 text-sand lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl">Nearby places</h2>
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
    </div>
  )
}
