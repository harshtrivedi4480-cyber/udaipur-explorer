import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SmartImage from './SmartImage'

export interface AlternatingItem {
  href: string
  image: string
  title: string
  meta?: string
  description: string
  tags?: string[]
}

export default function AlternatingList({ items }: { items: AlternatingItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Link
          key={item.href}
          to={item.href}
          className={`group flex flex-col gap-8 border-t border-ink/10 py-14 first:border-t-0 lg:flex-row lg:items-center lg:gap-16 ${
            i % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="aspect-[16/11] overflow-hidden rounded-sm lg:w-1/2">
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
              <SmartImage src={item.image} alt={item.title} label={item.title} />
            </div>
          </div>
          <div className="lg:w-1/2">
            {item.meta && (
              <p className="text-sm tracking-wide text-lake-light">{item.meta}</p>
            )}
            <h3 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{item.title}</h3>
            <p className="mt-4 max-w-prose leading-relaxed text-ink/70">{item.description}</p>
            {item.tags && item.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink underline decoration-ink/20 underline-offset-4 group-hover:decoration-terracotta">
              View details
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
