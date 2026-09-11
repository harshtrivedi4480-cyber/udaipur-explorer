import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'

interface HeroProps {
  label: string
  heading: string
  line: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

export default function Hero({
  label,
  heading,
  line,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const heroImage = "https://images.unsplash.com/photo-1572980071199-3d874a56b987?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section className="relative flex min-h-[560px] h-[100svh] w-full items-end overflow-hidden bg-lake-deep">

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/45 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-sm tracking-[0.2em] text-sand/85"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-4 max-w-5xl font-serif text-[16vw] leading-[0.88] tracking-[-0.035em] text-sand drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:text-8xl lg:text-9xl"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 max-w-lg font-serif text-xl italic leading-relaxed text-sand/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-2xl"
        >
          {line}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {primaryCta && (
              <MagneticButton>
                <Link
                  to={primaryCta.href}
                  data-cursor="Go"
                  className="inline-block rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-sand shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-terracotta/90 active:scale-[0.98]"
                >
                  {primaryCta.label}
                </Link>
              </MagneticButton>
            )}

            {secondaryCta && (
              <MagneticButton>
                <Link
                  to={secondaryCta.href}
                  data-cursor="Go"
                  className="inline-block rounded-full border border-sand/45 bg-black/10 px-7 py-3.5 text-sm font-medium text-sand backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand/10 hover:border-sand/70 active:scale-[0.98]"
                >
                  {secondaryCta.label}
                </Link>
              </MagneticButton>
            )}
          </motion.div>
        )}

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sand/75"
      >
        <ChevronDown
          className="h-5 w-5"
          strokeWidth={1.5}
        />
      </motion.div>

    </section>
  )
}









