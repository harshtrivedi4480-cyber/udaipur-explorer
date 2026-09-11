interface MarqueeProps {
  items: string[]
  className?: string
}

export default function Marquee({ items, className = '' }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div
      className={`overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-serif text-2xl sm:text-3xl"
          >
            {item}
            <span className="text-terracotta">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
