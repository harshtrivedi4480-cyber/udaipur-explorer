import type { Place } from '@/types'
import { IMAGE_URLS } from './imageUrls'

export const places: Place[] = [
  {
    id: 'p1',
    slug: 'lake-pichola',
    name: 'Lake Pichola',
    category: 'Lakes',
    location: 'Old City, Udaipur',
    latitude: 24.5764,
    longitude: 73.6805,
    shortDescription:
      'The freshwater lake at the heart of Udaipur, surrounded by palaces, historic ghats and the Aravallis.',
    description:
      'Lake Pichola is one of Udaipur’s defining landmarks. Picholi was the name of a village that lent its name to the lake. The islands of Jag Niwas and Jag Mandir lie within its waters, while the City Palace stands along the eastern bank. Its historic ghats, changing light and views of the surrounding hills make it one of the city’s most atmospheric places to experience.',
    whyVisit:
      'It is the classic Udaipur landscape: historic palaces meeting water, with the Aravallis rising beyond. Visit early for quieter views, or around sunset when the lake and City Palace take on warm evening light.',
    bestTime:
      'Early morning for quieter views, or around sunset for the best light across the water.',
    duration:
      '1.5–3 hours, longer if you include a boat ride',
    entryInfo:
      'The lake and its public ghats are generally accessible to visitors. Boat rides are separately ticketed and operate from designated jetties.',
    photographyNotes:
      'Shoot from Ambrai Ghat for a wide view of Lake Pichola and the City Palace. Around sunset, the changing light across the water creates strong reflections; a boat ride offers a lower, wider perspective of the palace and shoreline.',
    highlights: [
      'City Palace waterfront',
      'Jag Mandir island palace',
      'Jag Niwas (Lake Palace)',
      'Gangaur Ghat',
      'Sunset boat rides',
      'Aravalli views',
    ],
    nearbyPlaces: [
      'City Palace',
      'Gangaur Ghat',
      'Bagore Ki Haveli',
      'Ambrai Ghat',
      'Jag Mandir',
    ],
    image: IMAGE_URLS.places.lakePichola,
  },
  {
    id: 'p2',
    slug: 'city-palace',
    name: 'City Palace',
    category: 'Palaces',
    location: 'Eastern bank of Lake Pichola, Old City',
    latitude: 24.5764,
    longitude: 73.6833,
    shortDescription:
      'A sprawling complex of courtyards, balconies and towers built in stages over nearly four centuries.',
    description:
      "Construction began in 1553 under Maharana Udai Singh II and continued under successive Maharanas of Mewar for almost 400 years, which is why the complex reads as a layered collage rather than a single building — granite and marble, delicate mirror-work rooms sitting beside vast stone courtyards. It remains the largest palace complex in Rajasthan and is still partly home to the Mewar royal family, with the rest run as a museum and, in part, as heritage hotels.",
    whyVisit:
      'It is the anchor of the old city and the clearest record of Mewar history, from the peacock-tiled courtyards to the balconies overlooking the lake.',
    bestTime: 'Morning, soon after opening, before the courtyards fill up',
    duration: '2–3 hours',
    entryInfo: 'Ticketed entry, with separate charges for the museum, the Crystal Gallery and photography/video permits',
    photographyNotes:
      'The Mor Chowk (Peacock Courtyard) mosaics and the palace facade seen from a Lake Pichola boat are the two standout shots',
    highlights: ['Mor Chowk peacock mosaics', 'Fateh Prakash Palace', 'Crystal Gallery', 'Lake-facing balconies'],
    nearbyPlaces: ['lake-pichola', 'jagdish-temple', 'gangaur-ghat'],
    image: IMAGE_URLS.places.cityPalace,
  },
  {
    id: 'p3',
    slug: 'fateh-sagar-lake',
    name: 'Fateh Sagar Lake',
    category: 'Lakes',
    location: 'North Udaipur',
    latitude: 24.5947,
    longitude: 73.6789,
    shortDescription:
      'A quieter, larger lake north of Pichola, framed by hills and a favourite evening spot for locals.',
    description:
      'Fateh Sagar was built under Maharana Jai Singh and later restored and expanded by Maharana Fateh Singh, after whom it is named. It sits north of Lake Pichola, connected by a channel, and carries a more everyday, local rhythm — families out for an evening walk, the occasional pedal boat, a hillside garden on one of its islands.',
    whyVisit:
      'A calmer counterpoint to Pichola, especially at dusk when the hills around it turn deep blue and the promenade fills with locals rather than tour groups.',
    bestTime: 'Late afternoon into sunset',
    duration: '1–2 hours',
    entryInfo: 'Free to walk the promenade; boat rides to Nehru Garden island are ticketed at the jetty',
    photographyNotes: 'The hillside view from the Moti Magri side captures the full width of the lake against the Aravallis',
    highlights: ['Nehru Garden island', 'Lakeside promenade', 'Hillside sunset views'],
    nearbyPlaces: ['sajjangarh-palace', 'saheliyon-ki-bari'],
    image: IMAGE_URLS.places.fatehSagarLake,
  },
  {
    id: 'p4',
    slug: 'jagdish-temple',
    name: 'Jagdish Temple',
    category: 'Temples',
    location: 'Near City Palace, Old City',
    latitude: 24.5776,
    longitude: 73.6838,
    shortDescription:
      'A large Indo-Aryan stone temple dedicated to Vishnu, a few minutes from the City Palace gates.',
    description:
      'Built in 1651 by Maharana Jagat Singh I, the temple is dedicated to Jagannath, a form of Vishnu, and stands on a raised platform reached by a steep flight of steps flanked by carved elephants. The main spire and the surrounding carvings — depicting deities, dancers and musicians — are worked in a dense, detailed style typical of the period.',
    whyVisit:
      'It sits right on the route between the City Palace and the old city bazaars, and its steps are one of the best quiet vantage points over the surrounding lanes.',
    bestTime: 'Early morning aarti or early evening',
    duration: '30–45 minutes',
    entryInfo: 'Free entry; shoes must be left at the base of the steps',
    photographyNotes: 'The carved elephant balustrades and the spire against the sky work well from the base of the steps',
    highlights: ['Carved stone spire', 'Elephant balustrades', 'Evening aarti'],
    nearbyPlaces: ['city-palace', 'lake-pichola', 'bara-bazaar'],
    image: IMAGE_URLS.places.jagdishTemple,
  },
  {
    id: 'p5',
    slug: 'saheliyon-ki-bari',
    name: 'Saheliyon Ki Bari',
    category: 'Gardens',
    location: 'North Udaipur, near Fateh Sagar',
    latitude: 24.5951,
    longitude: 73.6899,
    shortDescription: 'A formal garden of fountains and lotus pools, built for the ladies of the royal court.',
    description:
      'Maharana Sangram Singh II built this "Garden of the Maidens" for a group of forty-eight women attendants who accompanied a princess to Udaipur. Marble elephants, lotus-shaped pools, a small museum and rows of fountains fill a compact, shaded space that still runs on the original gravity-fed water system in parts.',
    whyVisit: 'A cool, green break from the stone and water of the lake circuit, especially through the middle of the day.',
    bestTime: 'Midday, as shade and cover from the heat',
    duration: '45 minutes – 1 hour',
    entryInfo: 'Small ticketed entry fee',
    highlights: ['Fountain courtyards', 'Lotus pool', 'Marble elephant statues'],
    nearbyPlaces: ['fateh-sagar-lake'],
    image: IMAGE_URLS.places.saheliyonKiBari,
  },
  {
    id: 'p6',
    slug: 'sajjangarh-palace',
    name: 'Sajjangarh (Monsoon Palace)',
    category: 'Viewpoints',
    location: 'Aravalli hilltop, west of the city',
    latitude: 24.6169,
    longitude: 73.6572,
    shortDescription: "A hilltop palace built to watch monsoon clouds roll in, now the city's best sunset viewpoint.",
    description:
      'Maharana Sajjan Singh had this palace built on a peak of the Aravallis in the late 19th century, originally intended as an astronomical centre and a place to track the monsoon. What remains is a weathered but striking structure with sweeping views over Udaipur, Fateh Sagar and the surrounding hills, reached by a winding road up through Sajjangarh Wildlife Sanctuary.',
    whyVisit: 'The single widest view of the city, especially as the sun drops behind the hills and the lakes catch the light below.',
    bestTime: 'An hour before sunset',
    duration: '1.5–2 hours including the drive up',
    entryInfo: 'Ticketed entry; vehicles pay a separate sanctuary road toll',
    photographyNotes: 'Wide shots of Fateh Sagar and the city skyline work best from the palace terraces just before sunset',
    highlights: ['360-degree city views', 'Sunset over the Aravallis', 'Sajjangarh Wildlife Sanctuary en route'],
    nearbyPlaces: ['fateh-sagar-lake'],
    image: IMAGE_URLS.places.sajjangarhPalace,
  },
  {
    id: 'p7',
    slug: 'jag-mandir',
    name: 'Jag Mandir',
    category: 'Palaces',
    location: 'Island in Lake Pichola',
    latitude: 24.5709,
    longitude: 73.6813,
    shortDescription: 'A domed island palace on Lake Pichola, reachable only by boat.',
    description:
      'Built up over the reigns of three Maharanas in the 17th century, Jag Mandir is best known for the story that a young Shah Jahan took refuge here during a rebellion against his father — a stay some historians connect to the later design of the Taj Mahal. Today its courtyards, the Gul Mahal dome and a row of stone elephants at the jetty make it one of the lake\'s quieter, more atmospheric stops.',
    whyVisit: 'A short boat ride away from the crowds of the City Palace, with some of the calmest water views on the lake.',
    bestTime: 'Late afternoon boat ride',
    duration: '1–1.5 hours including the boat crossing',
    entryInfo: 'Reached only by boat from Lal Ghat or Rameshwar Ghat; entry and boat fare ticketed together',
    highlights: ['Gul Mahal dome', 'Stone elephant jetty', 'Lake views from the island'],
    nearbyPlaces: ['lake-pichola', 'city-palace'],
    image: '/images/places/jag-mandir-japji.jpg',
  },
  {
    id: 'p8',
    slug: 'bagore-ki-haveli',
    name: 'Bagore Ki Haveli',
    category: 'Heritage',
    location: 'Gangaur Ghat, Old City',
    latitude: 24.5789,
    longitude: 73.6822,
    shortDescription: 'A restored 18th-century haveli on the water, now a museum and evening cultural venue.',
    description:
      'Built by Amar Chand Badwa, a chief minister of Mewar, the haveli later served as a residence for members of the royal family before falling into disrepair and being restored by the West Zone Cultural Centre. More than a hundred rooms now hold exhibits on Mewar costume, puppetry and daily life, and its courtyard hosts the nightly Dharohar folk dance performance.',
    whyVisit: 'One of the best places to see traditional Rajasthani dance and music performed in something close to its original setting.',
    bestTime: 'Evening, timed with the Dharohar dance show',
    duration: '1–1.5 hours',
    entryInfo: 'Museum entry ticketed separately from the evening cultural show',
    highlights: ['Dharohar folk dance show', 'Mewar costume displays', "Gangaur Ghat views"],
    nearbyPlaces: ['lake-pichola', 'gangaur-ghat'],
    image: IMAGE_URLS.places.bagoreKiHaveli,
  },
  {
    id: 'p9',
    slug: 'gangaur-ghat',
    name: 'Gangaur Ghat',
    category: 'Viewpoints',
    location: 'Old City, on Lake Pichola',
    latitude: 24.5787,
    longitude: 73.6819,
    shortDescription: 'A steep stone ghat that has been part of daily life on the lake for generations.',
    description:
      'Named for the Gangaur festival that is celebrated here each spring with a lakeside procession, this ghat still functions much as it always has — people washing clothes, boats loading passengers, children sitting on the steps at dusk. It sits directly below Bagore Ki Haveli, a short walk from the City Palace.',
    whyVisit: 'The most unfiltered view of everyday life on the lake, without the ticketed formality of the palaces around it.',
    bestTime: 'Early morning or just after sunset',
    duration: '20–30 minutes',
    entryInfo: 'Open access, no ticket required',
    photographyNotes: 'Step-level shots looking across the water toward the City Palace catch the everyday rhythm of the ghat',
    highlights: ['Lakeside daily life', 'Gangaur festival processions', 'Views toward City Palace'],
    nearbyPlaces: ['bagore-ki-haveli', 'lake-pichola', 'city-palace'],
    image: IMAGE_URLS.places.gangaurGhat,
  },
  {
    id: 'p10',
    slug: 'ahar-cenotaphs',
    name: 'Ahar Cenotaphs',
    category: 'Heritage',
    location: 'Ahar, eastern outskirts of Udaipur',
    latitude: 24.5892,
    longitude: 73.7169,
    shortDescription: 'A quiet field of royal chhatris marking centuries of Mewar cremations.',
    description:
      'Ahar was the cremation ground for the Maharanas of Mewar for hundreds of years, and the site holds close to twenty marble and sandstone chhatris (cenotaphs) commemorating individual rulers, along with hundreds of smaller memorials. A small adjoining archaeological museum holds pottery and artefacts from excavations in the area, some dating back several thousand years.',
    whyVisit: "One of Udaipur's least-visited heritage sites, and a genuinely quiet place to sit with the scale of Mewar history away from any crowd.",
    bestTime: 'Late morning, when the museum and grounds are both open',
    duration: '45 minutes – 1 hour',
    entryInfo: 'Small ticketed entry for the cenotaph grounds and museum',
    highlights: ['Maharana chhatris', 'Ahar Archaeological Museum', 'Quiet, uncrowded grounds'],
    nearbyPlaces: [],
    image: IMAGE_URLS.places.ahamCenotaphs,
    hidden: true,
  },
  {
    id: 'p11',
    slug: 'badi-lake',
    name: 'Badi Lake',
    category: 'Lakes',
    location: 'Badi village, about 12km north of Udaipur',
    latitude: 24.6497,
    longitude: 73.7064,
    shortDescription:
      'A large, quiet reservoir outside the city, built to counter famine rather than to impress visitors.',
    description:
      'Badi Lake was built under Maharana Raj Singh I in the mid-17th century, primarily as a famine-relief measure to secure the water supply for the region rather than as an ornamental palace lake. Three carved chhatris (pavilions) sit along its edge, and unlike Pichola or Fateh Sagar, it carries almost no commercial activity — no boats for hire, no waterfront restaurants.',
    whyVisit: 'For open water and silence a short drive from the city, with none of the crowds of the two main lakes.',
    bestTime: 'Early morning or late afternoon',
    duration: '45 minutes – 1 hour',
    entryInfo: 'Open access, no ticket required',
    highlights: ['Three carved chhatris', 'Open, uncrowded shoreline', 'Built as 17th-century famine relief'],
    nearbyPlaces: [],
    image: '/images/places/badi-lake-ynorme.jpg',
    hidden: true,
  },
  {
    id: 'p12',
    slug: 'ambrai-ghat',
    name: 'Ambrai Ghat',
    category: 'Viewpoints',
    location: 'Lake Pichola, opposite Gangaur Ghat',
    latitude: 24.5775,
    longitude: 73.6779,
    shortDescription:
      'The classic straight-on view of the City Palace across the water, especially at dusk.',
    description:
      'Also known as Manjhi Ghat, Ambrai Ghat sits on the quieter, western side of Lake Pichola, directly across from Gangaur Ghat and the old city. Maintained with marble edging and wide seating, it has become one of the most reliable spots to sit with a straight-on view of the City Palace and Lake Palace across the water, framed by the string of small restaurants and hotels along this stretch.',
    whyVisit: 'The single best angle on the City Palace skyline, without needing to book a boat.',
    bestTime: 'Just before sunset into early evening',
    duration: '30–45 minutes',
    entryInfo: 'Open access, no ticket required',
    photographyNotes: 'A wide shot from the marble steps captures the full City Palace facade reflected in the water',
    highlights: ['Straight-on City Palace view', 'Marble-edged seating', 'Nearby lakeside cafés'],
    nearbyPlaces: ['gangaur-ghat', 'lake-pichola', 'city-palace'],
    image: '/images/stories/ambrai-ghat-rajasthantourplanner.jpg',
  },
  {
    id: 'p13',
    slug: 'doodh-talai',
    name: 'Doodh Talai',
    category: 'Gardens',
    location: 'Near Lake Pichola, adjoining the old city',
    latitude: 24.5684,
    longitude: 73.6848,
    shortDescription:
      'A small lake and hillside garden with a ropeway up to the Karni Mata temple.',
    description:
      'Doodh Talai is a small lake next to Lake Pichola, bordered by the Manikya Lal Verma Garden and the Pandit Deendayal Upadhyay Park, the latter home to Rajasthan\'s first musical fountain. A cable car runs from the park up to the Karni Mata Temple on the hillock above, giving views back over the City Palace and both lakes on the short ride.',
    whyVisit: 'A combination of garden, sunset viewpoint and a short ropeway ride, all within walking distance of the old city.',
    bestTime: 'Evening, timed with the musical fountain show',
    duration: '1–1.5 hours including the ropeway',
    entryInfo: 'Garden entry is ticketed; the Karni Mata ropeway has a separate fare',
    highlights: ['Karni Mata ropeway', "Rajasthan's first musical fountain", 'Hilltop views over the lakes'],
    nearbyPlaces: ['lake-pichola'],
    image: '/images/places/doodh-talai-istock.jpg',
  },
]

export function getPlaceBySlug(slug: string) {
  return places.find((p) => p.slug === slug)
}

export function getPlacesByCategory(category: string) {
  return places.filter((p) => p.category === category)
}










