import { places } from '@/data/places'
import { foods } from '@/data/food'
import { hotels } from '@/data/hotels'
import { experiences } from '@/data/experiences'
import { stories } from '@/data/stories'

export interface SearchResult {
  title: string
  category: 'Place' | 'Food' | 'Stay' | 'Experience' | 'Story'
  href: string
  image: string
  subtitle: string
}

function buildIndex(): SearchResult[] {
  return [
    ...places.map((p) => ({
      title: p.name,
      category: 'Place' as const,
      href: `/places/${p.slug}`,
      image: p.image,
      subtitle: p.category,
    })),
    ...foods.map((f) => ({
      title: f.name,
      category: 'Food' as const,
      href: `/food/${f.slug}`,
      image: f.image,
      subtitle: f.category,
    })),
    ...hotels.map((h) => ({
      title: h.name,
      category: 'Stay' as const,
      href: `/stays/${h.slug}`,
      image: h.image,
      subtitle: h.category,
    })),
    ...experiences.map((e) => ({
      title: e.title,
      category: 'Experience' as const,
      href: `/experiences/${e.slug}`,
      image: e.image,
      subtitle: 'Experience',
    })),
    ...stories.map((s) => ({
      title: s.title,
      category: 'Story' as const,
      href: `/stories/${s.slug}`,
      image: s.image,
      subtitle: 'Story',
    })),
  ]
}

let index: SearchResult[] | null = null

export function searchContent(query: string): SearchResult[] {
  if (!index) index = buildIndex()
  const q = query.trim().toLowerCase()
  if (!q) return []
  return index
    .filter((item) => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q))
    .slice(0, 8)
}
