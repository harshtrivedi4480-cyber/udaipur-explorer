import { Link, Navigate, useParams } from 'react-router-dom'
import SmartImage from '@/components/SmartImage'
import SavedButton from '@/components/SavedButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useSEO } from '@/hooks/useSEO'
import { getStoryBySlug, stories } from '@/data/stories'
import { places } from '@/data/places'

export default function StoryDetail() {
  const { slug = '' } = useParams()
  const story = getStoryBySlug(slug)

  useSEO({
    title: story ? story.title : 'Story not found',
    description: story ? story.excerpt : 'This story could not be found.',
    image: story?.image,
    path: `/stories/${slug}`,
    breadcrumbs: story
      ? [{ label: 'Stories', href: '/stories' }, { label: story.title }]
      : undefined,
    schema: story
      ? {
          '@type': 'Article',
          headline: story.title,
          description: story.excerpt,
          author: { '@type': 'Organization', name: story.author },
          ...(story.image ? { image: story.image } : {}),
        }
      : undefined,
  })

  if (!story) return <Navigate to="/404" replace />

  const relatedPlaces = places.filter((p) => story.relatedPlaces.includes(p.slug))
  const relatedStories = stories.filter((s) => story.relatedStories.includes(s.slug))

  return (
    <div>
      <section className="relative flex h-[65vh] min-h-[420px] items-end">
        <SmartImage src={story.image} alt={story.title} label={story.title} priority className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-14 pt-40 lg:px-0">
          <p className="text-sm text-sand/80">{story.readingTime} &middot; {story.author}</p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.1] text-sand sm:text-6xl">{story.title}</h1>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-6 py-14 lg:px-0">
        <div className="flex items-center justify-between gap-6">
          <Breadcrumbs items={[{ label: 'Stories', href: '/stories' }, { label: story.title }]} />
          <SavedButton category="stories" slug={story.slug} />
        </div>

        <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-ink/85">
          {story.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      {relatedPlaces.length > 0 && (
        <section className="bg-lake-deep px-6 py-16 text-sand lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl">Related places</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPlaces.map((p) => (
                <Link key={p.slug} to={`/places/${p.slug}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <SmartImage src={p.image} alt={p.name} label={p.name} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 font-serif text-lg text-sand">{p.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedStories.length > 0 && (
        <section className="bg-sand px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl text-ink">More stories</h2>
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
