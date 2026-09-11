import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-sm ${dark ? 'text-sand/60' : 'text-lake-light'}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 font-serif text-4xl leading-[1.1] sm:text-5xl ${
          dark ? 'text-sand' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-sand/70' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
