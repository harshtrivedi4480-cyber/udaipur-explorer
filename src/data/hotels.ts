import type { Hotel } from '@/types'
import { IMAGE_URLS } from './imageUrls'

export const hotels: Hotel[] = [
  {
    id: 'h1',
    slug: 'taj-lake-palace',
    name: 'Taj Lake Palace',
    category: 'Luxury',
    location: 'Jag Niwas Island, Lake Pichola',
    latitude: 24.5744,
    longitude: 73.6798,
    shortDescription:
      'A former royal summer palace occupying its own island in the middle of Lake Pichola, reachable only by boat.',
    highlights: [
      'Whole-island property',
      'Marble courtyards and lotus pools',
      'Boat transfer from the mainland jetty',
    ],
    priceCategory: 'Luxury',
    proximity: 'On Lake Pichola, boat transfer from Bansi Ghat',
    image: IMAGE_URLS.hotels.tajLakePalace,
  },

  {
    id: 'h2',
    slug: 'oberoi-udaivilas',
    name: 'The Oberoi Udaivilas',
    category: 'Luxury',
    location: 'Along Lake Pichola, near Badi village',
    latitude: 24.5678,
    longitude: 73.6714,
    shortDescription:
      'A large domed resort built in a palace idiom along the lake, set in landscaped grounds with its own deer park.',
    highlights: [
      'Extensive lakeside grounds',
      'Palace-style domes and courtyards',
      'Deer sanctuary on the property',
    ],
    priceCategory: 'Luxury',
    proximity: 'Lakeside, a short drive from the old city',
    image: IMAGE_URLS.hotels.oberoiUdaivilas,
  },

  {
    id: 'h3',
    slug: 'shiv-niwas-palace',
    name: 'Shiv Niwas Palace',
    category: 'Heritage',
    location: 'Within the City Palace complex',
    latitude: 24.5758,
    longitude: 73.6829,
    shortDescription:
      'A heritage wing of the City Palace itself, converted into a hotel with royal-era interiors intact.',
    highlights: [
      'Former royal guesthouse',
      'Courtyard pool inside the palace walls',
      'Direct access to City Palace grounds',
    ],
    priceCategory: 'Luxury',
    proximity: 'Inside the City Palace complex, on Lake Pichola',
    image: '/images/hotels/shiv-niwas-palace.jpg',
  },

  {
    id: 'h4',
    slug: 'jagat-niwas-palace',
    name: 'Jagat Niwas Palace Hotel',
    category: 'Heritage',
    location: 'Lal Ghat, Old City',
    latitude: 24.5793,
    longitude: 73.6825,
    shortDescription:
      "A converted haveli on the lake's edge in the old city, known for its rooftop restaurant looking straight at the City Palace.",
    highlights: [
      'Rooftop restaurant with palace views',
      'Old-city haveli architecture',
      'Walking distance to Jagdish Temple',
    ],
    priceCategory: 'Mid-range',
    proximity: 'On Lal Ghat, Lake Pichola, in the old city',
    image: '/images/hotels/jagat-niwas-palace.jpg',
  },

  {
    id: 'h5',
    slug: 'amet-haveli',
    name: 'Amet Haveli',
    category: 'Boutique',
    location: 'Hanuman Ghat, Lake Pichola',
    latitude: 24.5809,
    longitude: 73.6786,
    shortDescription:
      'A small heritage haveli on the quieter Hanuman Ghat side of the lake, popular for its lakeside terrace dining.',
    highlights: [
      'Antique-filled interiors',
      'Lakeside terrace restaurant',
      'Quieter, less touristed ghat',
    ],
    priceCategory: 'Mid-range',
    proximity:
      'Hanuman Ghat, opposite the City Palace side of Lake Pichola',
    image:
      'https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/accommodation/superhotels/amet_haveli_udaipur_3000x1000.jpg?h=685&q=60&w=1920',
  },

  {
    id: 'h6',
    slug: 'leela-palace-udaipur',
    name: 'The Leela Palace Udaipur',
    category: 'Luxury',
    location: 'Along Lake Pichola',
    latitude: 24.5701,
    longitude: 73.6802,
    shortDescription:
      'A lakeside luxury property built in a Mewar palace style, with domed pavilions and courtyard pools facing the water.',
    highlights: [
      'Lakefront setting',
      'Palace-style domes and courtyards',
      'Views toward the City Palace and Jag Mandir',
    ],
    priceCategory: 'Luxury',
    proximity: 'On Lake Pichola',
    image: '/images/places/leela-palace-meragi.webp',
  },
]

export function getHotelBySlug(slug: string) {
  return hotels.find((h) => h.slug === slug)
}












