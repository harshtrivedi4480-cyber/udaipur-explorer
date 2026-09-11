import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!isFinePointer || reducedMotion) return

    setEnabled(true)
    document.documentElement.classList.add('cursor-none')

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
      const el = (e.target as HTMLElement | null)?.closest?.('[data-cursor]')
      setLabel(el ? el.getAttribute('data-cursor') : null)
    }

    window.addEventListener('mousemove', onMove)

    let raf = requestAnimationFrame(function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.2
      pos.current.y += (target.current.y - pos.current.y) * 0.2
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-200 ease-out ${
        label
          ? 'h-20 w-20 border-0 bg-terracotta'
          : 'h-8 w-8 border-[1.5px] border-ink/40 bg-transparent'
      }`}
    >
      {label && (
        <span className="text-[11px] font-medium uppercase tracking-wide text-sand">
          {label}
        </span>
      )}
    </div>
  )
}
