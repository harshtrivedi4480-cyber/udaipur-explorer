import type { ReactNode } from 'react'

interface EmptyStateProps {
  title: string
  description: string
  action?: ReactNode
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h3 className="font-serif text-3xl text-ink">{title}</h3>
      <p className="max-w-md text-ink/60">{description}</p>
      {action}
    </div>
  )
}
