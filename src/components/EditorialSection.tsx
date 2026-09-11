import type { ReactNode } from 'react'
import SmartImage from './SmartImage'

interface EditorialSectionProps {
  image: string
  imageAlt: string
  eyebrow?: string
  title: string
  children: ReactNode
  reverse?: boolean
  dark?: boolean
  cta?: ReactNode
}

export default function EditorialSection({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse = false,
  dark = false,
  cta,
}: EditorialSectionProps) {
  return (
    <section className={`${dark ? 'bg-lake-deep text-sand' : 'bg-sand text-ink'}`}>
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28 ${
          reverse ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <div className={`aspect-[4/5] overflow-hidden rounded-sm lg:[direction:ltr] ${reverse ? '' : ''}`}>
          <SmartImage src={image} alt={imageAlt} label={imageAlt} />
        </div>
        <div className="lg:[direction:ltr]">
          {eyebrow && (
            <p className={`text-sm ${dark ? 'text-sand/60' : 'text-lake-light'}`}>{eyebrow}</p>
          )}
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
          <div className={`mt-6 max-w-prose space-y-4 leading-relaxed ${dark ? 'text-sand/75' : 'text-ink/75'}`}>
            {children}
          </div>
          {cta && <div className="mt-8">{cta}</div>}
        </div>
      </div>
    </section>
  )
}
