import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchContent, type SearchResult } from '@/lib/search'
import SmartImage from './SmartImage'

const RECENT_KEY = 'udaipur-explorer:recent-searches'

function getRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]')
  } catch {
    return []
  }
}

function pushRecent(term: string) {
  try {
    const current = getRecent().filter((t) => t !== term)
    const next = [term, ...current].slice(0, 5)
    localStorage.setItem(RECENT_KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
}

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [recent, setRecent] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setRecent(getRecent())
      setTimeout(() => inputRef.current?.focus(), 60)
    } else {
      setQuery('')
      setResults([])
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    setResults(searchContent(query))
  }, [query])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-24 w-[92%] max-w-xl rounded-2xl bg-sand p-2 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-ink/10 px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-ink/40" strokeWidth={1.5} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && query.trim()) pushRecent(query.trim())
                }}
                placeholder="Search places, food, stays, stories&hellip;"
                className="w-full bg-transparent text-lg text-ink placeholder:text-ink/35 focus:outline-none"
              />
              <button aria-label="Close search" onClick={onClose} className="rounded-full p-1 text-ink/50 hover:bg-ink/5">
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim() === '' && recent.length > 0 && (
                <div className="px-3 py-3">
                  <p className="text-xs uppercase tracking-[0.15em] text-ink/40">Recent</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {recent.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink/70 hover:border-ink/30"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query.trim() !== '' && results.length === 0 && (
                <div className="px-3 py-10 text-center">
                  <p className="font-serif text-xl text-ink/70">Nothing found for &ldquo;{query}&rdquo;</p>
                  <p className="mt-1 text-sm text-ink/45">Try a place, dish, or neighbourhood name.</p>
                </div>
              )}

              {results.map((r) => (
                <Link
                  key={r.href}
                  to={r.href}
                  onClick={() => {
                    pushRecent(query.trim())
                    onClose()
                  }}
                  className="flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-ink/5"
                >
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                    <SmartImage src={r.image} alt={r.title} label={r.title} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-ink">{r.title}</p>
                    <p className="text-xs uppercase tracking-[0.1em] text-ink/40">{r.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
