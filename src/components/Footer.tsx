import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Places', href: '/places' },
      { label: 'Food', href: '/food' },
      { label: 'Stays', href: '/stays' },
      { label: 'Experiences', href: '/experiences' },
      { label: 'Hidden Gems', href: '/hidden-gems' },
    ],
  },
  {
    title: 'Read & Plan',
    links: [
      { label: 'Stories', href: '/stories' },
      { label: 'Trip Planner', href: '/trip-planner' },
      { label: 'Map', href: '/map' },
      { label: 'Saved', href: '/saved' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-lake-deep text-sand">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl">Udaipur Explorer</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/70">
              Made for curious travelers exploring the City of Lakes.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.15em] text-sand/50">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-sand/85 transition-colors hover:text-sand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-sand/10 pt-6 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Udaipur Explorer</p>
          <p>Udaipur, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  )
}
