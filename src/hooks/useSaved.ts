import { useCallback, useEffect, useState } from 'react'
import type { SavedCategory, SavedItem } from '@/types'

const STORAGE_KEY = 'udaipur-explorer:saved'

function readStorage(): SavedItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as SavedItem[]) : []
  } catch {
    return []
  }
}

function writeStorage(items: SavedItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // storage unavailable   fail silently, saving is a nice-to-have
  }
}

export function useSaved() {
  const [items, setItems] = useState<SavedItem[]>([])

  useEffect(() => {
    setItems(readStorage())
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setItems(readStorage())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const isSaved = useCallback(
    (category: SavedCategory, slug: string) =>
      items.some((i) => i.category === category && i.slug === slug),
    [items],
  )

  const toggleSaved = useCallback((category: SavedCategory, slug: string) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.category === category && i.slug === slug)
      const next = exists
        ? prev.filter((i) => !(i.category === category && i.slug === slug))
        : [...prev, { category, slug }]
      writeStorage(next)
      return next
    })
  }, [])

  return { items, isSaved, toggleSaved }
}

