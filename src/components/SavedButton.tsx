import { Bookmark } from 'lucide-react'
import { useSaved } from '@/hooks/useSaved'
import type { SavedCategory } from '@/types'

interface SavedButtonProps {
  category: SavedCategory
  slug: string
  className?: string
  labelled?: boolean
}

export default function SavedButton({ category, slug, className = '', labelled = false }: SavedButtonProps) {
  const { isSaved, toggleSaved } = useSaved()
  const saved = isSaved(category, slug)

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleSaved(category, slug)
      }}
      aria-pressed={saved}
      aria-label={saved ? 'Remove from saved' : 'Save for later'}
      className={`inline-flex items-center gap-2 rounded-full border transition-colors ${
        saved
          ? 'border-terracotta bg-terracotta text-sand'
          : 'border-ink/15 bg-sand/90 text-ink hover:border-ink/40'
      } px-3 py-2 text-sm ${className}`}
    >
      <Bookmark className="h-4 w-4" strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} />
      {labelled && <span>{saved ? 'Saved' : 'Save'}</span>}
    </button>
  )
}
