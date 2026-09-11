import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import { useSEO } from '@/hooks/useSEO'

export default function Contact() {
  useSEO({
    title: 'Contact',
    description: 'Get in touch with Udaipur Explorer.',
    path: '/contact',
  })

  const [sent, setSent] = useState(false)

  return (
    <div className="mx-auto max-w-xl px-6 pb-24 pt-40 lg:px-0 lg:pt-48">
      <SectionHeader eyebrow="Contact" title="Say hello." description="Questions, corrections or a place we've missed   we'd like to hear it." />

      {sent ? (
        <div className="mt-10 rounded-sm border border-ink/10 p-8 text-center">
          <p className="font-serif text-2xl text-ink">Message sent.</p>
          <p className="mt-2 text-ink/60">Thanks for reaching out   we'll get back to you soon.</p>
        </div>
      ) : (
        <form
          className="mt-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm text-ink/60">Name</label>
            <input id="name" required className="mt-1 w-full rounded-sm border border-ink/15 bg-sand px-4 py-3 text-ink outline-none focus-visible:border-terracotta" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-ink/60">Email</label>
            <input id="email" type="email" required className="mt-1 w-full rounded-sm border border-ink/15 bg-sand px-4 py-3 text-ink outline-none focus-visible:border-terracotta" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-ink/60">Message</label>
            <textarea id="message" required rows={5} className="mt-1 w-full rounded-sm border border-ink/15 bg-sand px-4 py-3 text-ink outline-none focus-visible:border-terracotta" />
          </div>
          <button type="submit" className="rounded-full bg-ink px-7 py-3.5 text-sm text-sand">
            Send message
          </button>
        </form>
      )}
    </div>
  )
}

