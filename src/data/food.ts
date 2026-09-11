import type { FoodItem } from '@/types'
import { IMAGE_URLS } from './imageUrls'

export const foods: FoodItem[] = [
  {
    id: 'f1',
    slug: 'dal-baati-churma',
    name: 'Dal Baati Churma',
    category: 'Rajasthani Food',
    shortDescription: 'Baked wheat balls with lentils and a sweet crushed-wheat side — the state\'s signature meal.',
    description:
      'Baati are hard wheat-flour balls, traditionally baked over hot coals until the crust cracks, then broken open and doused in ghee. They are served with a well-spiced mixed lentil dal and churma — the same dough, crushed and sweetened with jaggery or sugar. The combination of savoury, ghee-rich baati and sweet churma in one meal is what makes it distinctly Rajasthani.',
    tasteProfile: 'Savoury and rich from the ghee-soaked baati, balanced by a sweet, crumbly churma',
    whereToTry: 'Traditional Rajasthani thali restaurants across the old city',
    priceRange: 'Budget to mid-range',
    bestTime: 'Lunch',
    image: IMAGE_URLS.food.dalBaatiChurma,
  },
  {
    id: 'f2',
    slug: 'gatte-ki-sabzi',
    name: 'Gatte Ki Sabzi',
    category: 'Rajasthani Food',
    shortDescription: 'Gram-flour dumplings simmered in a tangy, spiced yogurt gravy.',
    description:
      'Gatte are made by rolling besan (gram flour) dough into logs, boiling them, then slicing and simmering the pieces in a yogurt-based curry tempered with cumin, mustard seed and dried red chilli. It developed as a way to make a substantial vegetarian curry in a region where fresh vegetables were historically scarce for long stretches of the year.',
    tasteProfile: 'Tangy and mildly spiced, with a dense, chewy bite from the gatte',
    whereToTry: 'Most Rajasthani thali houses; a staple alongside dal baati',
    priceRange: 'Budget to mid-range',
    bestTime: 'Lunch or dinner',
    image: IMAGE_URLS.food.gatteKiSabzi,
  },
  {
    id: 'f4',
    slug: 'kachori',
    name: 'Kachori',
    category: 'Street Food',
    shortDescription: 'A flaky, deep-fried pastry stuffed with a spiced lentil or onion filling.',
    description:
      'Kachori are made from a short, flaky dough stuffed with a spiced filling — commonly moong dal or a coarse onion mix — then deep-fried until golden and served hot with tamarind and mint chutneys. They are an early-morning to mid-morning staple, sold from stalls that often run out well before noon.',
    tasteProfile: 'Crisp and flaky outside, warmly spiced and slightly grainy inside',
    whereToTry: 'Morning stalls around the old city and near Hathi Pol',
    priceRange: 'Budget',
    bestTime: 'Breakfast to mid-morning',
    image: IMAGE_URLS.food.kachori,
  },
  {
    id: 'f5',
    slug: 'mirchi-vada',
    name: 'Mirchi Vada',
    category: 'Street Food',
    shortDescription: 'A large green chilli, split and stuffed, dipped in gram-flour batter and fried — also called mirchi vada.',
    description:
      'A thick, mild chilli is slit and filled with a spiced potato mixture, then coated in a besan batter and deep-fried until crisp. It is one of the most popular evening street snacks in Udaipur, usually served hot with chutney and best eaten standing at the stall rather than carried away.',
    tasteProfile: 'Crunchy batter giving way to a soft, spiced potato filling and a gentle chilli warmth',
    whereToTry: 'Evening street food stalls around the old city',
    priceRange: 'Budget',
    bestTime: 'Evening',
    image: IMAGE_URLS.food.mirchiVada,
  },
  {
    id: 'f6',
    slug: 'mawa-kachori',
    name: 'Mawa Kachori',
    category: 'Sweets',
    shortDescription: 'A sweet kachori packed with khoya and dry fruits, then dipped in sugar syrup.',
    description:
      'Unlike its savoury namesake, this Udaipur specialty is stuffed with mawa (reduced milk solids), nuts and dried fruit, deep-fried, then soaked briefly in sugar syrup. It is heavy and rich by design, meant to be eaten in small portions, and is closely associated with Udaipur specifically among Rajasthani sweets.',
    tasteProfile: 'Dense, milky-sweet, with a light syrup soak and a crisp shell',
    whereToTry: 'Long-established sweet shops in the old city',
    priceRange: 'Budget to mid-range',
    bestTime: 'Anytime, often as a dessert or with evening tea',
    image: '/images/food/mawa-kachori-khoya.jpg',
  },
  {
    id: 'f7',
    slug: 'jalebi',
    name: 'Jalebi',
    category: 'Sweets',
    shortDescription: 'Crisp, coiled batter deep-fried and soaked in sugar syrup.',
    description:
      'A fermented batter is piped into hot oil in overlapping spirals, fried until crisp, then soaked in warm sugar syrup so the inside stays syrupy while the outside keeps its crunch. It is sold fresh from morning sweet-shop counters across Udaipur, often still warm from the pan.',
    tasteProfile: 'Crisp on the outside, syrup-soaked and sweet within',
    whereToTry: 'Sweet shops across the city, best eaten fresh and warm',
    priceRange: 'Budget',
    bestTime: 'Morning',
    image: IMAGE_URLS.food.jalebi,
  },
  {
    id: 'f8',
    slug: 'rabri',
    name: 'Rabri',
    category: 'Sweets',
    shortDescription: 'Milk slowly reduced and layered, sweetened and lightly spiced.',
    description:
      'Rabri is made by simmering milk for hours in a wide, shallow pan, repeatedly folding in the cream that forms on the surface, until it reduces to a thick, layered, sweetened consistency flavoured with cardamom and sometimes saffron. It is often served on its own or alongside other sweets like mawa kachori.',
    tasteProfile: 'Rich, creamy and sweet, with a distinct layered texture',
    whereToTry: 'Sweet shops in the old city, usually sold by weight',
    priceRange: 'Budget to mid-range',
    bestTime: 'Anytime, commonly after a meal',
    image: IMAGE_URLS.food.rabri,
  },
  {
    id: 'f9',
    slug: 'kulhad-chai',
    name: 'Kulhad Chai',
    category: 'Beverages',
    shortDescription: 'Spiced milk tea served in a small, unglazed clay cup.',
    description:
      'The tea itself is standard masala chai — milk, tea leaves and spices like cardamom and ginger, boiled together — but serving it in a kulhad, a disposable unglazed clay cup, adds a faint earthy note from the clay and is part of how tea is drunk at roadside stalls across Udaipur.',
    tasteProfile: 'Sweet, milky and spiced, with a subtle earthy note from the clay cup',
    whereToTry: 'Roadside tea stalls throughout the city',
    priceRange: 'Budget',
    bestTime: 'Morning or evening',
    image: IMAGE_URLS.food.kulhadChai,
  },
  {
    id: 'f10',
    slug: 'ker-sangri',
    name: 'Ker Sangri',
    category: 'Rajasthani Food',
    shortDescription: 'A dry-region specialty of desert beans and berries, cooked together with a tangy edge.',
    description:
      'Ker (a wild berry) and sangri (dried beans from the khejri tree) are both foraged from the Thar desert, sun-dried, then reconstituted and cooked with mustard oil, dried mango powder and whole spices. It developed specifically because both ingredients survive well in a dry climate where fresh vegetables historically did not, and it remains one of the dishes most identified with Rajasthan\'s desert districts.',
    tasteProfile: 'Tangy and slightly sour, with a firm, chewy bite',
    whereToTry: 'Traditional Rajasthani thali restaurants',
    priceRange: 'Budget to mid-range',
    bestTime: 'Lunch or dinner',
    image: IMAGE_URLS.food.kerSangri,
  },
  {
    id: 'f11',
    slug: 'pyaz-kachori',
    name: 'Pyaz Kachori',
    category: 'Street Food',
    shortDescription: 'A kachori stuffed with a spiced onion filling instead of the usual dal.',
    description:
      'Where a plain kachori is typically filled with spiced moong dal, pyaz kachori swaps in a coarse, well-spiced onion mixture, giving it a sharper, more savoury filling once fried. It is sold from the same morning street stalls as other kachori varieties, usually with tamarind chutney on the side.',
    tasteProfile: 'Crisp and flaky outside, sharply savoury and onion-forward inside',
    whereToTry: 'Morning street food stalls around the old city',
    priceRange: 'Budget',
    bestTime: 'Breakfast to mid-morning',
    image: IMAGE_URLS.food.pyazKachori,
  },
  {
    id: 'f12',
    slug: 'malpua',
    name: 'Malpua',
    category: 'Sweets',
    shortDescription: 'A soft, pan-fried sweet pancake soaked in sugar syrup, often served with rabri.',
    description:
      'A batter of flour, milk and sometimes mashed banana or fennel is shallow-fried into small, thick pancakes, then briefly soaked in sugar syrup. Malpua is common across North India but is a regular fixture on Rajasthani sweet-shop counters, frequently served warm alongside a spoon of rabri.',
    tasteProfile: 'Soft and syrup-soaked, with a light, slightly caramelised edge from frying',
    whereToTry: 'Sweet shops in the old city, often made fresh in the evening',
    priceRange: 'Budget to mid-range',
    bestTime: 'Evening',
    image: IMAGE_URLS.food.malpua,
  },
  {
    id: 'f13',
    slug: 'mohan-thal',
    name: 'Mohanthal',
    category: 'Sweets',
    shortDescription: 'A dense, fudge-like gram-flour sweet, set with ghee and topped with nuts.',
    description:
      'Roasted gram flour is cooked slowly with ghee and sugar syrup until it comes together into a thick, grainy fudge, then set in a tray, topped with chopped almonds and pistachios, and cut into squares once firm. It keeps well compared to milk-based sweets, which historically made it a practical sweet for travel and festivals.',
    tasteProfile: 'Dense and slightly grainy, richly sweet with a roasted, nutty depth',
    whereToTry: 'Sweet shops across the old city',
    priceRange: 'Budget to mid-range',
    bestTime: 'Anytime, commonly with tea',
    image: IMAGE_URLS.food.mohanThal,
  },
  {
    id: 'f14',
    slug: 'rajasthani-thali',
    name: 'Rajasthani Thali',
    category: 'Rajasthani Food',
    shortDescription: 'A full platter meal — several regional dishes served together in small bowls.',
    description:
      'A thali brings together a rotating spread of Rajasthani staples on one plate — dal baati churma, gatte ki sabzi, ker sangri, roti, rice, pickles and a sweet, in proportions that vary restaurant to restaurant. It is the most straightforward way to try several dishes from this guide in a single sitting rather than ordering them individually.',
    tasteProfile: 'A mix of savoury, tangy and sweet across several small dishes',
    whereToTry: 'Traditional Rajasthani thali restaurants across the old city',
    priceRange: 'Mid-range',
    bestTime: 'Lunch or dinner',
    image: IMAGE_URLS.food.rajasthaniThali,
  },
]

export function getFoodBySlug(slug: string) {
  return foods.find((f) => f.slug === slug)
}











