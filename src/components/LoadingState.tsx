export default function LoadingState({ label = 'Loading' }: { label?: string }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-ink/50">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-terracotta" />
      <p className="font-serif text-lg italic">{label}&hellip;</p>
    </div>
  )
}
