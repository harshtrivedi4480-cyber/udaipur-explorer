import { useState } from 'react'
import { Camera } from 'lucide-react'

interface SmartImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  /** shown inside the placeholder when the real photo hasn't been added yet */
  label?: string
  /** tailwind aspect-ratio class, e.g. "aspect-[4/5]" */
  aspect?: string
}

/**
 * Renders a photo when it exists at /public/images/..., and otherwise renders
 * a designed, on-brand placeholder instead of a broken-image icon. Drop a
 * verified photo at the given `src` path and it will automatically replace
 * the placeholder   no code changes required.
 */
export default function SmartImage({
  src,
  alt,
  priority = false,
  className = '',
  label,
  aspect,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // An empty/missing src is treated the same as a failed load   never let
  // the browser attempt to fetch an empty string, which can render its own
  // broken-image icon in some browsers before our fallback ever kicks in.
  const shouldShowFallback = failed || !src

  // Tailwind emits `.absolute` before `.relative` in its generated stylesheet,
  // so when both classes land on the same element `.relative` wins the
  // specificity tie and silently overrides an intended `absolute inset-0`
  // fill-parent usage. Only fall back to `relative` when the caller hasn't
  // already supplied their own position utility.
  const hasPositionClass = /\b(absolute|fixed|sticky)\b/.test(className)
  const positionClass = hasPositionClass ? '' : 'relative'

  if (shouldShowFallback) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${positionClass} flex items-center justify-center overflow-hidden bg-lake ${aspect ?? ''} ${className}`}
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'linear-gradient(135deg, #0F3B4C 0%, #0A2C39 45%, #5C6B45 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F3ECDF 0, #F3ECDF 1px, transparent 1px, transparent 14px)',
          }}
        />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center text-sand">
          <Camera className="h-6 w-6 opacity-70" strokeWidth={1.5} />
          <span className="font-serif text-sm italic opacity-90">
            {label ?? alt}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`${positionClass} h-full w-full overflow-hidden ${aspect ?? ''} ${className}`}>
      {/* Skeleton shown until the real photo has decoded, so nothing pops in */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-sand-dark transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}



