interface CategoryFilterProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
            active === cat
              ? 'border-terracotta bg-terracotta text-sand'
              : 'border-ink/15 text-ink/70 hover:border-ink/35'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
