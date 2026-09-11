import { Link } from 'react-router-dom'
import SectionHeader from '@/components/SectionHeader'
import SmartImage from '@/components/SmartImage'
import { useSEO } from '@/hooks/useSEO'
import { stories } from '@/data/stories'

export default function Stories() {
  useSEO({
    title: 'Stories',
    description: 'Editorial travel writing about Udaipur   the lakes, the food, the light, and what sits beyond the tourist trail.',
    image: '/images/stories/story-of-lake-pichola.jpg',
    path: '/stories',
  })

  const [featured, ...rest] = stories

  return (
    <div>
      <section className="bg-sand px-6 pb-10 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Stories" title="Read the City of Lakes." description="Editorial travel writing, not listicles." />
        </div>
      </section>

      {featured && (
        <section className="bg-sand px-6 pb-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Link to={`/stories/${featured.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="aspect-[16/11] overflow-hidden rounded-sm">
                <SmartImage src={featured.image} alt={featured.title} label={featured.title} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/45">{featured.readingTime} &middot; {featured.author}</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{featured.title}</h2>
                <p className="mt-4 max-w-prose leading-relaxed text-ink/70">{featured.excerpt}</p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-sand px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s) => (
              <Link key={s.slug} to={`/stories/${s.slug}`} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-sm">
                  <SmartImage src={s.image} alt={s.title} label={s.title} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-ink/45">{s.readingTime}</p>
                <h3 className="mt-1 font-serif text-2xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

