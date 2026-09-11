export type PlaceCategory =
  | 'Lakes'
  | 'Palaces'
  | 'Temples'
  | 'Gardens'
  | 'Heritage'
  | 'Viewpoints'
  | 'Markets'

export interface Place {
  id: string
  slug: string
  name: string
  category: PlaceCategory
  location: string
  latitude: number
  longitude: number
  shortDescription: string
  description: string
  whyVisit: string
  bestTime: string
  duration: string
  entryInfo?: string
  photographyNotes?: string
  highlights: string[]
  nearbyPlaces: string[] // slugs
  image: string
  hidden?: boolean
}

export type FoodCategory =
  | 'Rajasthani Food'
  | 'Street Food'
  | 'Local Breakfast'
  | 'Sweets'
  | 'Beverages'

export interface FoodItem {
  id: string
  slug: string
  name: string
  category: FoodCategory
  shortDescription: string
  description: string
  tasteProfile: string
  whereToTry: string
  priceRange: string
  bestTime: string
  image: string
}

export type HotelCategory =
  | 'Luxury'
  | 'Heritage'
  | 'Boutique'
  | 'Lake View'
  | 'Budget'

export interface Hotel {
  id: string
  slug: string
  name: string
  category: HotelCategory
  location: string
  latitude: number
  longitude: number
  shortDescription: string
  highlights: string[]
  priceCategory: string
  proximity: string
  website?: string
  image: string
}

export interface Experience {
  id: string
  slug: string
  title: string
  shortDescription: string
  story: string
  duration: string
  idealTime: string
  location: string
  latitude: number
  longitude: number
  difficulty?: string
  estimatedCost?: string
  nearbyPlaces: string[]
  image: string
}

export interface Story {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  readingTime: string
  content: string[]
  relatedPlaces: string[]
  relatedStories: string[]
  image: string
}

export type SavedCategory = 'places' | 'food' | 'hotels' | 'experiences' | 'stories'

export interface SavedItem {
  category: SavedCategory
  slug: string
}

export interface MapPoint {
  id: string
  name: string
  category: 'Place' | 'Food' | 'Hotel' | 'Experience' | 'Hidden Gem'
  slug: string
  href: string
  latitude: number
  longitude: number
  image: string
  shortDescription: string
}
