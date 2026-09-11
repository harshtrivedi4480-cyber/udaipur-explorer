import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Bookmark, Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Places', href: '/places' },
  { label: 'Food', href: '/food' },
  { label: 'Stays', href: '/stays' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Hidden Gems', href: '/hidden-gems' },
  { label: 'Stories', href: '/stories' },
  { label: 'Trip Planner', href: '/trip-planner' },
]

interface NavbarProps {
  onSearchOpen: () => void
  transparentOnTop?: boolean
}

export default function Navbar({ onSearchOpen, transparentOnTop = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(!transparentOnTop)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!transparentOnTop) return
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparentOnTop])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = location.pathname === '/' ? (scrolled || mobileOpen) : true

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          solid ? 'bg-sand/95 shadow-[0_1px_0_0_rgba(23,21,18,0.08)] backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            to="/"
            className={`font-serif text-lg tracking-wide transition-colors ${
              solid ? 'text-ink' : 'text-sand'
            }`}
          >
            Udaipur Explorer
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[15px] transition-colors hover:opacity-70 ${
                  solid ? 'text-ink' : 'text-sand'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              onClick={onSearchOpen}
              className={`rounded-full p-2 transition-colors hover:bg-black/5 ${solid ? 'text-ink' : 'text-sand'}`}
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link
              to="/saved"
              aria-label="Saved"
              className={`hidden rounded-full p-2 transition-colors hover:bg-black/5 sm:block ${
                solid ? 'text-ink' : 'text-sand'
              }`}
            >
              <Bookmark className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
              className={`rounded-full p-2 transition-colors hover:bg-black/5 lg:hidden ${
                solid ? 'text-ink' : 'text-sand'
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-sand px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <Link
                    to={link.href}
                    className="block py-3 font-serif text-4xl text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * LINKS.length, duration: 0.35 }}
              >
                <Link to="/saved" className="block py-3 font-serif text-4xl text-ink">
                  Saved
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
