import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

import Hero from '@/components/Hero'
import UdaipurVideoText from '@/components/UdaipurVideoText'
import SmartImage from '@/components/SmartImage'
import Marquee from '@/components/Marquee'
import HorizontalGallery from '@/components/HorizontalGallery'
import MagneticButton from '@/components/MagneticButton'

import {
  EditorialCard,
  
  HorizontalCard,
} from '@/components/cards/Cards'

import { useSEO } from '@/hooks/useSEO'

import { places } from '@/data/places'
import { foods } from '@/data/food'
import { experiences } from '@/data/experiences'
import { stories } from '@/data/stories'
import { hotels } from '@/data/hotels'

export default function Home() {
  useSEO({
    title: 'Udaipur Explorer   The City of Lakes',
    description:
      'A modern editorial guide to Udaipur   discover its lakes, palaces, food, experiences, stays and quieter corners.',
    image: '/images/hero/udaipur-hero.jpg',
    path: '/',
  })

  const featuredPlaces = places
    .filter((place) => !place.hidden && place.image)
    .slice(0, 3)

  const featuredHidden = places.find(
    (place) => place.hidden && place.image
  )

  

  const featuredExperiences = experiences
    .filter((experience) => experience.image)
    .slice(0, 3)

  const featuredHotels = hotels
    .filter((hotel) => hotel.image)
    .slice(0, 3)

  const featuredStories = stories
    .filter((story) => story.image)
    .slice(0, 3)

  const lakePichola = places.find(
    (place) => place.slug === 'lake-pichola'
  )

  const cityPalace = places.find(
    (place) => place.slug === 'city-palace'
  )

  const categories = [
    {
      name: 'Lakes',
      href: '/places?category=Lakes',
      image: lakePichola?.image ?? '',
      desc: 'Water, ghats and landscapes that define the city.',
      number: '01',
    },
    {
      name: 'Palaces',
      href: '/places?category=Palaces',
      image: cityPalace?.image ?? '',
      desc: 'Mewar history in stone, marble and courtyards.',
      number: '02',
    },
    {
      name: 'Food',
      href: '/food',
      image:
        foods.find((food) => food.slug === 'dal-baati-churma')?.image ?? '',
      desc: 'Rajasthani classics, street food and old-city favourites.',
      number: '03',
    },
    {
      name: 'Hidden Gems',
      href: '/hidden-gems',
      image: featuredHidden?.image ?? '',
      desc: 'Quieter corners beyond the usual Udaipur circuit.',
      number: '04',
    },
    {
      name: 'Sunset',
      href: '/experiences',
      image:
        experiences.find((e) => e.slug === 'sajjangarh-sunset')?.image ?? '',
      desc: 'The hour when the whole city turns gold.',
      number: '05',
    },
    {
      name: 'Culture',
      href: '/experiences',
      image:
        experiences.find(
          (e) => e.slug === 'dharohar-cultural-evening'
        )?.image ?? '',
      desc: 'Music, dance and craft that still belong to the city.',
      number: '06',
    },
  ]


  const [firstStory, ...restStories] = featuredStories

  return (
    <main className="min-h-screen overflow-hidden bg-sand text-ink">

      {/* HERO */}

      <Hero
        label="THE CITY OF LAKES"
        heading="UDAIPUR"
        line="Where palaces rise from the water and every evening turns golden."
        primaryCta={{
          label: 'Explore Udaipur',
          href: '/places',
        }}
        secondaryCta={{
          label: 'Start Planning',
          href: '/trip-planner',
        }}
      />

      {/* MARQUEE */}

      <section className="border-y border-ink/10 bg-sand py-4">
        <Marquee
          items={[
            'LAKES',
            'PALACES',
            'GHATS',
            'STREET FOOD',
            'SUNSETS',
            'HIDDEN GEMS',
            'CULTURE',
          ]}
        />
      </section>

      {/* INTRO */}

      <section className="px-6 py-24 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-lake-light" />

                <p className="text-[11px] uppercase tracking-[0.28em] text-lake-light">
                  A slower guide
                </p>
              </div>

              <h2 className="mt-7 max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                See Udaipur
                <span className="block italic text-ink/50">
                  beyond
                </span>
                the postcard.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col justify-end"
            >
              <div className="max-w-2xl text-base leading-8 text-ink/65 sm:text-lg">

                <p>
                  Most visits follow the same loop: City Palace, a lake boat,
                  Jagdish Temple and dinner with a view.
                </p>

                <p className="mt-6">
                  But Udaipur reveals itself slowly   through its working
                  ghats, old markets, local food, overlooked heritage and
                  evenings spent beside the water.
                </p>

              </div>

              <Link
                to="/places"
                className="group mt-9 inline-flex w-fit items-center gap-2 border-b border-ink/20 pb-2 text-sm font-medium"
              >
                Start exploring places

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </motion.div>

          </div>

          <div className="mt-20 flex items-center gap-4 text-ink/30">
            <div className="h-px flex-1 bg-ink/10" />

            <span className="text-[10px] uppercase tracking-[0.3em]">
              Explore slowly
            </span>

            <div className="h-px w-12 bg-ink/10" />
          </div>

        </div>
      </section>

      {/* CINEMATIC MOMENT */}

      <UdaipurVideoText />

      {/* EXPLORE */}

      <section
        id="explore"
        className="border-y border-ink/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-lake-light" />

                <p className="text-[11px] uppercase tracking-[0.28em] text-lake-light">
                  Explore
                </p>
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Find your
                <span className="italic text-ink/45">
                  {' '}Udaipur.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-ink/55 sm:text-lg">
                Six ways into the city — from famous lakes and palaces to
                places most visitors never find.
              </p>
            </div>

            <p className="hidden max-w-xs text-right text-xs uppercase tracking-[0.16em] text-ink/35 lg:block">
              Scroll to explore
              <br />
              the city your way
            </p>

          </div>
        </div>

        <HorizontalGallery className="mt-14 px-6 lg:px-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              className="w-[78vw] shrink-0 snap-start sm:w-[46vw] md:w-[360px] lg:w-[380px]"
            >
              <Link
                to={category.href}
                className="group block"
              >

                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink">

                  <SmartImage
                    src={category.image}
                    alt={category.name}
                    label={category.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-sand/90 text-[10px] font-semibold tracking-wider text-ink backdrop-blur">
                    0{index + 1}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-sand sm:p-7">

                    <div className="flex items-end justify-between gap-4">

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-sand/55">
                          Explore
                        </p>

                        <h3 className="mt-2 font-serif text-3xl leading-none sm:text-4xl">
                          {category.name}
                        </h3>
                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand/30 bg-sand/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-sand group-hover:text-ink">
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.5}
                        />
                      </span>

                    </div>

                    <p className="mt-4 max-w-[280px] text-sm leading-6 text-sand/65">
                      {category.desc}
                    </p>

                  </div>

                </div>

              </Link>
            </motion.div>
          ))}
        </HorizontalGallery>
      </section>
      {/* PLACES */}

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-lake-light" />

                <p className="text-[11px] uppercase tracking-[0.28em] text-lake-light">
                  Places
                </p>
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">
                Worth slowing
                <span className="block italic text-ink/45">
                  down for.
                </span>
              </h2>
            </div>

            <Link
              to="/places"
              className="group inline-flex items-center gap-2 text-sm"
            >
              View all places
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>

          </div>

          {featuredPlaces.length > 0 && (
            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {featuredPlaces.map((place, index) => (
                <motion.article
                  key={place.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-[28px] border border-ink/10 bg-sand/50 transition-all duration-500 hover:-translate-y-1 hover:bg-sand/80"
                >
                  <Link
                    to={`/places/${place.slug}`}
                    className="block"
                  >

                    <div className="relative aspect-[4/3] overflow-hidden">

                      <SmartImage
                        src={place.image}
                        alt={place.name}
                        label={place.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 text-[10px] font-semibold text-ink backdrop-blur">
                        0{index + 1}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-sand">

                        <p className="text-[10px] uppercase tracking-[0.2em] text-sand/60">
                          {place.category}
                        </p>

                        <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                          {place.name}
                        </h3>

                      </div>

                    </div>

                    <div className="flex items-center gap-4 p-5">

                      <p className="line-clamp-2 flex-1 text-sm leading-6 text-ink/55">
                        {place.shortDescription}
                      </p>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:bg-ink group-hover:text-sand">
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={1.5}
                        />
                      </span>

                    </div>

                  </Link>
                </motion.article>
              ))}

            </div>
          )}

        </div>
      </section>
      {/* LAKE PICHOLA */}

      <section className="bg-grain bg-lake-deep text-sand">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            <div className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">

              <SmartImage
                src={lakePichola?.image ?? ''}
                alt="Lake Pichola, Udaipur"
                label="Lake Pichola"
                className="absolute inset-0 h-full w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/10" />

              <div className="absolute bottom-8 left-8 flex items-center gap-2 text-xs text-sand/75">
                <MapPin
                  className="h-4 w-4"
                  strokeWidth={1.4}
                />

                Udaipur, Rajasthan
              </div>

              <div className="absolute right-8 top-8 rounded-full border border-sand/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-sand/75">
                Lake Pichola
              </div>

            </div>

            <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">

              <div className="max-w-xl">

                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-sand/40" />

                  <p className="text-[11px] uppercase tracking-[0.28em] text-sand/55">
                    The heart of the city
                  </p>
                </div>

                <h2 className="mt-7 font-serif text-5xl leading-none sm:text-6xl">
                  Lake Pichola holds every version of Udaipur at once.
                </h2>

                <div className="mt-8 space-y-5 text-base leading-8 text-sand/65">

                  <p>
                    Built in 1362 and later enlarged as Udaipur grew around it,
                    the lake connects the city's palaces, ghats and everyday
                    life.
                  </p>

                  <p>
                    Centuries of Mewar history meet working ghats and the
                    simple ritual of watching the last light disappear behind
                    the hills.
                  </p>

                </div>

                <MagneticButton className="mt-10">
                  <Link
                    to="/places/lake-pichola"
                    className="group inline-flex items-center gap-3 border-b border-sand/25 pb-2 text-sm text-sand"
                  >
                    Explore Lake Pichola

                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                </MagneticButton>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOD */}
<section className="bg-sand px-6 py-20 lg:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-terracotta">
          Eat
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          Understand Udaipur
          <span className="italic text-ink/55"> one plate at a time.</span>
        </h2>
      </div>

      <Link
        to="/food"
        className="group inline-flex items-center gap-2 self-start text-sm font-medium text-ink sm:self-auto"
      >
        Full food guide
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {foods.slice(0, 4).map((food, index) => (
        <Link
          key={food.slug}
          to={`/food/${food.slug}`}
          className="group"
        >
          <article className="relative overflow-hidden rounded-[28px] bg-ink">
            <div className="relative aspect-[4/5] overflow-hidden">
              <SmartImage
                src={food.image}
                alt={food.name}
                label={food.name}
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-sand/30 bg-ink/25 text-xs text-sand backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sand/65">
                  {food.category}
                </p>

                <h3 className="mt-2 font-serif text-2xl leading-tight text-sand">
                  {food.name}
                </h3>

                <div className="mt-4 flex items-center justify-between border-t border-sand/20 pt-3">
                  <span className="text-xs text-sand/65">
                    Explore dish
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sand/30 text-sand transition-all duration-300 group-hover:bg-sand group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  </div>
</section>
{/* EXPERIENCES */}

      <section className="bg-grain bg-ink px-6 py-20 text-sand lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-sand/40" />

                <p className="text-[11px] uppercase tracking-[0.28em] text-sand/50">
                  Experiences
                </p>
              </div>

              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">
                Build an evening
                <span className="block italic text-sand/45">
                  around something memorable.
                </span>
              </h2>
            </div>

            <Link
              to="/experiences"
              className="group inline-flex items-center gap-2 text-sm text-sand"
            >
              All experiences
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {featuredExperiences.map((experience, index) => (
              <motion.article
                key={experience.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-[28px] border border-sand/10 bg-sand/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-sand/20 hover:bg-sand/[0.08]"
              >
                <Link
                  to={`/experiences/${experience.slug}`}
                  className="block"
                >

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src={experience.image}
                      alt={experience.title}
                      label={experience.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 text-[10px] font-semibold text-ink">
                      0{index + 1}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">

                      <p className="text-[10px] uppercase tracking-[0.2em] text-sand/55">
                        Experience
                      </p>

                      <h3 className="mt-2 font-serif text-2xl leading-tight text-sand sm:text-3xl">
                        {experience.title}
                      </h3>

                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5">

                    <p className="line-clamp-2 flex-1 text-sm leading-6 text-sand/55">
                      {experience.shortDescription}
                    </p>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand/15 transition-all duration-300 group-hover:bg-sand group-hover:text-ink">
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.5}
                      />
                    </span>

                  </div>

                </Link>
              </motion.article>
            ))}

          </div>

        </div>
      </section>
      {/* HIDDEN GEM */}

      {featuredHidden && (
        <section className="px-6 py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-10 flex items-center gap-3">

              <Sparkles
                className="h-4 w-4 text-lake-light"
                strokeWidth={1.5}
              />

              <p className="text-[11px] uppercase tracking-[0.28em] text-lake-light">
                Beyond the postcard
              </p>

            </div>

            <EditorialCard
              href="/hidden-gems"
              image={featuredHidden.image}
              title="Udaipur has quieter stories too."
              eyebrow="Discover the other side of the city"
              description={featuredHidden.description}
              className="mx-auto max-w-7xl"
            />

          </div>

        </section>
      )}

      {/* STAYS */}

      {featuredHotels.length > 0 && (
        <section className="border-t border-ink/10 px-6 py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-lake-light" />

                  <p className="text-[11px] uppercase tracking-[0.28em] text-lake-light">
                    Stay
                  </p>
                </div>

                <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">
                  Sleep beside
                  <span className="block italic text-ink/50">
                    the water.
                  </span>
                </h2>

              </div>

              <Link
                to="/stays"
                className="group inline-flex items-center gap-2 text-sm"
              >
                Explore all stays

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>

            </div>

            <div className="mt-14 divide-y divide-ink/10 border-t border-ink/10">

              {featuredHotels.map((hotel, index) => (
                <motion.div
                  key={hotel.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <HorizontalCard
                    href={`/stays/${hotel.slug}`}
                    image={hotel.image}
                    title={hotel.name}
                    category={hotel.category}
                  />
                </motion.div>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* STORIES */}

      <section className="bg-sand-dark px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-lake-light" />

                <p className="text-[11px] uppercase tracking-[0.28em] text-lake-light">
                  Journal
                </p>
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">
                Stories from
                <span className="block italic text-ink/50">
                  the City of Lakes.
                </span>
              </h2>
            </div>

            <Link
              to="/stories"
              className="group inline-flex items-center gap-2 text-sm"
            >
              Read all stories
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>

          </div>

          {firstStory && (
            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group overflow-hidden rounded-[28px] bg-sand/70"
              >
                <Link to={`/stories/${firstStory.slug}`} className="block">

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src={firstStory.image}
                      alt={firstStory.title}
                      label={firstStory.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-sand/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-ink backdrop-blur">
                      Featured
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-sand">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-sand/65">
                        {firstStory.readingTime} · {firstStory.author}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl leading-tight">
                        {firstStory.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-5">
                    <p className="line-clamp-2 flex-1 text-sm leading-6 text-ink/55">
                      {firstStory.excerpt}
                    </p>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:bg-ink group-hover:text-sand">
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>

                </Link>
              </motion.article>

              {restStories.map((story, index) => (
                <motion.article
                  key={story.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: (index + 1) * 0.08,
                  }}
                  className="group overflow-hidden rounded-[28px] border border-ink/10 bg-sand/45 transition-all duration-300 hover:-translate-y-1 hover:bg-sand/70"
                >
                  <Link to={`/stories/${story.slug}`} className="block">

                    <div className="relative aspect-[4/3] overflow-hidden">
                      <SmartImage
                        src={story.image}
                        alt={story.title}
                        label={story.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 text-[10px] font-semibold text-ink backdrop-blur">
                        0{index + 2}
                      </div>
                    </div>

                    <div className="p-5">

                      <p className="text-[10px] uppercase tracking-[0.2em] text-lake-light">
                        {story.readingTime} · {story.author}
                      </p>

                      <h3 className="mt-3 font-serif text-2xl leading-tight">
                        {story.title}
                      </h3>

                      <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">

                        <span className="text-xs text-ink/45">
                          Read story
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:bg-ink group-hover:text-sand">
                          <ArrowUpRight
                            className="h-4 w-4"
                            strokeWidth={1.5}
                          />
                        </span>

                      </div>

                    </div>

                  </Link>
                </motion.article>
              ))}

            </div>
          )}

        </div>
      </section>
      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-lake-deep px-6 py-28 text-sand lg:px-10 lg:py-40">

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-[11px] uppercase tracking-[0.3em] text-sand/45">
            Your Udaipur starts here
          </p>

          <h2 className="mt-7 font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Go beyond
            <span className="block italic text-sand/50">
              the obvious.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-sand/60 sm:text-lg">
            Find the places, food, experiences and quiet moments that make
            Udaipur worth remembering.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/places"
              className="group inline-flex items-center gap-3 rounded-full bg-sand px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-1"
            >
              Explore Udaipur

              <Compass
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
                strokeWidth={1.5}
              />
            </Link>

            <Link
              to="/trip-planner"
              className="inline-flex items-center gap-2 rounded-full border border-sand/25 px-7 py-3.5 text-sm text-sand transition-colors hover:border-sand/60"
            >
              Plan your trip

              <ArrowUpRight
                className="h-4 w-4"
                strokeWidth={1.5}
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}






