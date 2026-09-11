import { Code2, Compass } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { useSEO } from '@/hooks/useSEO'

const STACK = ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB']

export default function About() {
  useSEO({
    title: 'About',
    description: 'What Udaipur Explorer is, and how this guide is put together.',
    path: '/about',
  })

  return (
    <div className="px-6 pb-24 pt-40 lg:px-0 lg:pt-48">
      <div className="mx-auto max-w-2xl">
        <SectionHeader eyebrow="About" title="A guide built around the slower city." />
        <div className="mt-8 space-y-5 leading-relaxed text-ink/80">
          <p>
            Udaipur Explorer is an editorial guide to the City of Lakes, built
            for people who want more than a checklist of the City Palace and a
            lake boat ride. It covers the lakes, palaces and temples everyone
            asks about, alongside the food, hidden corners and everyday rhythms
            that usually get left out of shorter guides.
          </p>
          <p>
            Every place, dish and stay listed here is real and verified  
            nothing is invented to fill a gap in the site. Where a photo hasn't
            been added yet, you'll see a designed placeholder rather than a
            stock image standing in for the wrong place.
          </p>
          <p>
            The guide is a work in progress and grows a little at a time, the
            same way most people actually get to know a city.
          </p>
        </div>
      </div>

      {/* =====================================================
          ABOUT HARSH
      ===================================================== */}

      <div className="mx-auto mt-16 max-w-3xl">
        <div className="rounded-sm border border-ink/10 bg-sand-dark p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-lake-light">
            Who's behind this
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Harsh Trivedi
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            A full-stack developer based in Udaipur, focused on building real, polished web products and thoughtful digital experiences. Udaipur Explorer started as a way to
            combine two interests   building real, polished web products and
            paying closer attention to the city he lives in   and grew into
            this guide.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3"><div className="flex items-start gap-3">
              <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-lake-light" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink">Focus</p>
                <p className="mt-1 text-sm leading-6 text-ink/60">
                  Full-stack web development
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Compass className="mt-0.5 h-5 w-5 shrink-0 text-lake-light" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink">This project</p>
                <p className="mt-1 text-sm leading-6 text-ink/60">
                  Travel discovery, built end to end
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-ink/40">
              Built with
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/65"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




