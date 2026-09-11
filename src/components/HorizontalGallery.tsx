import type { ReactNode } from 'react'

interface HorizontalGalleryProps {
  children: ReactNode
  className?: string
}

export default function HorizontalGallery({
  children,
  className = '',
}: HorizontalGalleryProps) {
  return (
    <div
      className={`flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  )
}
