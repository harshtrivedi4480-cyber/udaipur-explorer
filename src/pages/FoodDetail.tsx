import { Navigate, useParams } from 'react-router-dom'
import SmartImage from '@/components/SmartImage'
import SavedButton from '@/components/SavedButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useSEO } from '@/hooks/useSEO'
import { getFoodBySlug } from '@/data/food'

export default function FoodDetail() {
  const { slug = '' } = useParams()
  const food = getFoodBySlug(slug)

  useSEO({
    title: food ? food.name : 'Dish not found',
    description: food ? food.shortDescription : 'This dish could not be found.',
    image: food?.image,
    path: `/food/${slug}`,
    breadcrumbs: food
      ? [{ label: 'Food', href: '/food' }, { label: food.name }]
      : undefined,
  })

  if (!food) return <Navigate to="/404" replace />

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-40 lg:px-0 lg:pt-48">
      <Breadcrumbs items={[{ label: 'Food', href: '/food' }, { label: food.name }]} />

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <SmartImage src={food.image} alt={food.name} label={food.name} priority />
        </div>
        <div>
          <p className="text-sm text-lake-light">{food.category}</p>
          <h1 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">{food.name}</h1>
          <p className="mt-5 font-serif text-xl italic leading-relaxed text-ink/80">
            {food.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <SavedButton category="food" slug={food.slug} labelled />
          </div>

          <div className="mt-10 space-y-6 border-t border-ink/10 pt-8">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Taste profile</p>
              <p className="mt-1 text-ink/80">{food.tasteProfile}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40">Where to try it</p>
              <p className="mt-1 text-ink/80">{food.whereToTry}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40">Price range</p>
                <p className="mt-1 text-ink/80">{food.priceRange}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40">Best time</p>
                <p className="mt-1 text-ink/80">{food.bestTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-prose border-t border-ink/10 pt-10 leading-relaxed text-ink/80">
        <h2 className="font-serif text-2xl text-ink">The story</h2>
        <p className="mt-4">{food.description}</p>
      </div>
    </div>
  )
}
