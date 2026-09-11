import { places } from '@/data/places'
import { hotels } from '@/data/hotels'
import { experiences } from '@/data/experiences'
import type { MapPoint } from '@/types'

export function getAllMapPoints(): MapPoint[] {
  const placePoints: MapPoint[] = places.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.hidden ? 'Hidden Gem' : 'Place',
    slug: p.slug,
    href: `/places/${p.slug}`,
    latitude: p.latitude,
    longitude: p.longitude,
    image: p.image,
    shortDescription: p.shortDescription,
  }))

  const hotelPoints: MapPoint[] = hotels.map((h) => ({
    id: h.id,
    name: h.name,
    category: 'Hotel',
    slug: h.slug,
    href: `/stays/${h.slug}`,
    latitude: h.latitude,
    longitude: h.longitude,
    image: h.image,
    shortDescription: h.shortDescription,
  }))

  const experiencePoints: MapPoint[] = experiences.map((e) => ({
    id: e.id,
    name: e.title,
    category: 'Experience',
    slug: e.slug,
    href: `/experiences/${e.slug}`,
    latitude: e.latitude,
    longitude: e.longitude,
    image: e.image,
    shortDescription: e.shortDescription,
  }))

  return [...placePoints, ...hotelPoints, ...experiencePoints]
}
