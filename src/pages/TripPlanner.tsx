import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/SectionHeader'
import { useSEO } from '@/hooks/useSEO'

const DURATIONS = ['1 day', '2 days', '3 days', '4+ days']
const INTERESTS = ['Heritage', 'Food', 'Nature', 'Photography', 'Luxury', 'Culture', 'Relaxation']

interface Slot {
  label: string
  title: string
  href: string
}

interface DayPlan {
  day: number
  slots: Slot[]
}

// A small, hand-curated pool so the generated itinerary always stays
// grounded in real, verified places rather than inventing anything.
const MORNING_POOL = [
  { title: 'City Palace', href: '/places/city-palace' },
  { title: 'Jagdish Temple', href: '/places/jagdish-temple' },
  { title: 'Saheliyon Ki Bari', href: '/places/saheliyon-ki-bari' },
  { title: 'Old city heritage walk', href: '/experiences/old-city-heritage-walk' },
  { title: 'Ahar Cenotaphs', href: '/places/ahar-cenotaphs' },
]

const AFTERNOON_POOL = [
  { title: 'Bara Bazaar & Hathi Pol market walk', href: '/experiences/bara-bazaar-market-walk' },
  { title: 'Bagore Ki Haveli', href: '/places/bagore-ki-haveli' },
  { title: 'Cycling around Fateh Sagar', href: '/experiences/fateh-sagar-cycling' },
  { title: 'Photography walk around the lake', href: '/experiences/photography-walk' },
  { title: 'Fateh Sagar Lake', href: '/places/fateh-sagar-lake' },
]

const EVENING_POOL = [
  { title: 'Sunset boat ride on Lake Pichola', href: '/experiences/sunset-boat-ride' },
  { title: 'Sunset at Sajjangarh', href: '/experiences/sajjangarh-sunset' },
  { title: 'Dharohar cultural evening', href: '/experiences/dharohar-dance-evening' },
  { title: 'Gangaur Ghat at dusk', href: '/places/gangaur-ghat' },
]

function buildItinerary(days: number): DayPlan[] {
  return Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    slots: [
      { label: 'Morning', ...MORNING_POOL[i % MORNING_POOL.length] },
      { label: 'Afternoon', ...AFTERNOON_POOL[i % AFTERNOON_POOL.length] },
      { label: 'Evening', ...EVENING_POOL[i % EVENING_POOL.length] },
    ],
  }))
}

export default function TripPlanner() {
  useSEO({
    title: 'Trip Planner',
    description: 'Build a day-by-day Udaipur itinerary based on how long you have and what you want to see.',
    path: '/trip-planner',
  })

  const [duration, setDuration] = useState<string | null>(null)
  const [interests, setInterests] = useState<string[]>([])
  const [generated, setGenerated] = useState(false)

  const dayCount = useMemo(() => {
    if (!duration) return 1
    if (duration === '4+ days') return 4
    return parseInt(duration, 10)
  }, [duration])

  const itinerary = useMemo(() => (generated ? buildItinerary(dayCount) : []), [generated, dayCount])

  const toggleInterest = (interest: string) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-40 lg:px-0 lg:pt-48">
      <SectionHeader
        eyebrow="Trip Planner"
        title="Tell us how long you have."
        description="A starting itinerary built from real places and experiences in this guide   adjust it as you go."
      />

      <div className="mt-12">
        <p className="text-sm uppercase tracking-wide text-ink/45">How many days?</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {DURATIONS.map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                duration === d ? 'border-terracotta bg-terracotta text-sand' : 'border-ink/15 text-ink/70 hover:border-ink/35'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm uppercase tracking-wide text-ink/45">What draws you in?</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {INTERESTS.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                interests.includes(interest) ? 'border-lake bg-lake text-sand' : 'border-ink/15 text-ink/70 hover:border-ink/35'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <button
        disabled={!duration}
        onClick={() => setGenerated(true)}
        className="mt-12 w-full rounded-full bg-ink px-7 py-4 text-sm text-sand transition-opacity disabled:cursor-not-allowed disabled:opacity-30 sm:w-auto"
      >
        Generate my itinerary
      </button>

      {generated && (
        <div className="mt-16 space-y-10 border-t border-ink/10 pt-12">
          {itinerary.map((day) => (
            <div key={day.day}>
              <h2 className="font-serif text-3xl text-ink">Day {day.day}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {day.slots.map((slot) => (
                  <Link
                    key={slot.label}
                    to={slot.href}
                    className="block rounded-sm border border-ink/10 p-5 transition-colors hover:border-terracotta"
                  >
                    <p className="text-xs uppercase tracking-wide text-ink/40">{slot.label}</p>
                    <p className="mt-2 font-serif text-lg text-ink">{slot.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm text-ink/50">
            Like a place along the way? Open it and tap Save to keep it in your{' '}
            <Link to="/saved" className="underline decoration-ink/20 underline-offset-4">
              Saved list
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
}

