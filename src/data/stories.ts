import type { Story } from '@/types'

export const stories: Story[] = [
  {
    id: 's1',
    slug: 'one-day-in-udaipur',
    title: 'One Day in Udaipur',
    excerpt: 'A single day, run from the City Palace steps to a rooftop watching the lake go dark.',
    author: 'Udaipur Explorer',
    readingTime: '5 min read',
    content: [
      'A single day in Udaipur works best with the water as the through-line, not the palaces. Start early at Gangaur Ghat, before the boats begin their first crossings, when the steps still belong to people washing clothes and pigeons rather than cameras.',
      'From there it is a short walk up to the City Palace, best entered right at opening before the courtyards fill. Give the Mor Chowk peacock mosaics real time rather than a passing glance — they reward slow looking more than most rooms in the complex.',
      'By midday, retreat from the sun into the old city lanes toward Jagdish Temple and the bazaars beyond it, where silver and textile shops offer shade and something to do with the hottest hours.',
      'Save the evening for the lake itself: a boat ride timed to the last light, then dinner on a rooftop facing the City Palace as the building lights come on one row at a time and the water turns the colour of the sky.',
    ],
    relatedPlaces: ['city-palace', 'jagdish-temple', 'lake-pichola'],
    relatedStories: ['story-of-lake-pichola', 'best-sunset-spots'],
    image: '/images/stories/udaipur-one-day-itinerary.jpg',
  },
  {
    id: 's2',
    slug: 'story-of-lake-pichola',
    title: 'The Story of Lake Pichola',
    excerpt: 'How a modest 14th-century lake became the reason a city exists where it does.',
    author: 'Udaipur Explorer',
    readingTime: '6 min read',
    content: [
      'Lake Pichola predates Udaipur itself. It was built in 1362, long before Maharana Udai Singh II chose its banks as the site for a new capital in 1559, after his previous seat at Chittorgarh had been repeatedly besieged.',
      'Udai Singh had the lake enlarged and built the first palace on its eastern shore — the seed of what grew into today\'s vast City Palace complex. Later rulers added the island palaces: Jag Mandir, begun under Maharana Karan Singh II, and Jag Niwas, now the Taj Lake Palace hotel, built as a summer retreat.',
      'The lake has never been purely ornamental. Its ghats have functioned as working parts of the city for centuries — places to bathe, wash, gather water, and mark festivals like Gangaur, which still processes along its banks each spring.',
      'What makes it distinct today is that all of this history stays visible at once: a 14th-century embankment, a 16th-century palace, a 17th-century island retreat and a 21st-century sunset boat ride, all occupying the same stretch of water.',
    ],
    relatedPlaces: ['lake-pichola', 'city-palace', 'jag-mandir', 'gangaur-ghat'],
    relatedStories: ['one-day-in-udaipur', 'best-sunset-spots'],
    image: '/images/stories/story-of-lake-pichola.jpg',
  },
  {
    id: 's3',
    slug: 'guide-to-udaipur-food',
    title: 'A Guide to Udaipur Food',
    excerpt: 'From baked wheat balls to a kachori stuffed with khoya — what to actually order.',
    author: 'Udaipur Explorer',
    readingTime: '7 min read',
    content: [
      'Rajasthani food, as eaten in Udaipur, was shaped by a dry climate and a court kitchen tradition, and both show up on any decent thali. Dal Baati Churma is the dish to start with: baked wheat balls cracked open and drenched in ghee, served with lentils and a sweet crushed-wheat side, in one plate.',
      'Gatte Ki Sabzi — gram-flour dumplings in a tangy yogurt curry — grew out of the same scarcity of fresh vegetables that shaped much of the region\'s vegetarian cooking.',
      'Street food runs on a different clock: kachori stalls sell out by late morning, while mirchi bada, stuffed and fried green chillies, come into their own in the evening. For something specifically local, Mawa Kachori — sweet, milk-solid-stuffed and syrup-dipped — is closely associated with Udaipur rather than Rajasthan generally.',
      'End, as locals do, with a kulhad chai from a roadside stall — the clay cup adds a faint earthiness that a ceramic mug never quite matches.',
    ],
    relatedPlaces: [],
    relatedStories: ['one-day-in-udaipur'],
    image: '/images/stories/udaipur-food-guide.jpg',
  },
  {
    id: 's4',
    slug: 'best-sunset-spots',
    title: 'Best Sunset Spots in Udaipur',
    excerpt: 'Where the light actually lands, from a lake boat to a hilltop palace.',
    author: 'Udaipur Explorer',
    readingTime: '4 min read',
    content: [
      'Sajjangarh, the Monsoon Palace, gives the widest view — the whole city and both lakes laid out below the hill as the light drops. It takes planning: the drive up through the wildlife sanctuary needs to start with enough daylight left to reach the terrace before the sun does.',
      'On the water, a Lake Pichola boat ride timed to the last hour of light puts the City Palace facade directly in the glow, with Jag Mandir passing on one side.',
      'For something with no ticket and no timing required, Fateh Sagar\'s promenade catches the sun dropping behind the Aravallis on the lake\'s far side, with locals out for their evening walk rather than a crowd gathered for the view.',
      'Gangaur Ghat, quieter than the boats and closer to the water than Sajjangarh, offers a street-level version of the same light — worth it on an evening with no time for a longer trip.',
    ],
    relatedPlaces: ['sajjangarh-palace', 'lake-pichola', 'fateh-sagar-lake', 'gangaur-ghat'],
    relatedStories: ['story-of-lake-pichola'],
    image: 'https://content.jdmagicbox.com/comp/udaipur-rajasthan/a9/9999px294.x294.230309215027.g3a9/catalogue/sunset-point-karni-mata-pichola-udaipur-rajasthan-tourist-attraction-O0vnf0H5bG.jpg',
  },
  {
    id: 's5',
    slug: 'udaipur-beyond-the-tourist-trail',
    title: 'Udaipur Beyond the Tourist Trail',
    excerpt: 'The quieter corners that sit just outside the usual City Palace–Lake Pichola loop.',
    author: 'Udaipur Explorer',
    readingTime: '5 min read',
    content: [
      'Most visits to Udaipur run the same short loop — City Palace, a lake boat, Jagdish Temple, dinner with a view. It is a good loop, but it leaves out a version of the city that moves slower.',
      'The Ahar Cenotaphs, a field of royal chhatris on the city\'s eastern edge, get a fraction of the footfall of the palaces, despite marking the resting place of generations of Mewar rulers. The adjoining museum holds pottery going back several thousand years, with almost nobody else in the room.',
      'Closer in, the upper floors of Bagore Ki Haveli are often skipped by visitors who come only for the evening dance show, but hold quieter exhibits on Mewar costume and daily life worth a slower look earlier in the day.',
      'And simply sitting at Gangaur Ghat without an agenda — no boat booked, no show timed — tends to show more of the city than most single attraction does.',
    ],
    relatedPlaces: ['ahar-cenotaphs', 'bagore-ki-haveli', 'gangaur-ghat'],
    relatedStories: ['story-of-lake-pichola', 'best-sunset-spots'],
    image: 'https://cdn.travelcoffee.in/uploads/3153003f-d92a-4e07-be53-4089954a662a-Golden_Triangle_With_Udaipur_Lakeside_Romance.webp',
  },
]

export function getStoryBySlug(slug: string) {
  return stories.find((s) => s.slug === slug)
}


















