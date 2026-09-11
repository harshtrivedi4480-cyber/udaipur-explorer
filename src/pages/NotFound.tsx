import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'

export default function NotFound() {
  useSEO({
    title: 'Page not found',
    description: 'This page could not be found.',
    path: '/404',
  })

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-serif text-8xl text-ink/20">404</p>
      <h1 className="mt-4 font-serif text-3xl text-ink">This lane doesn't lead anywhere.</h1>
      <p className="mt-3 max-w-sm text-ink/60">
        The page you're looking for has wandered off. Try heading back to the places worth finding.
      </p>
      <Link to="/" className="mt-8 rounded-full bg-ink px-7 py-3.5 text-sm text-sand">
        Back to the homepage
      </Link>
    </div>
  )
}
