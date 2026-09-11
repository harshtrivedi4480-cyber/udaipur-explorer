import { VideoText } from "@/components/ui/video-text"

export default function UdaipurVideoText() {
  return (
    <section className="bg-grain relative w-full overflow-hidden bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-sand/45">
          The city of lakes
        </p>

        <div className="relative mx-auto mt-6 h-[140px] w-full max-w-5xl sm:h-[200px] lg:h-[260px]">
          <VideoText
            fontSize={13}
            fontWeight="800"
            fontFamily="Fraunces, ui-serif, Georgia, serif"
            autoPlay
            muted
            loop
            preload="auto"
          >
            UDAIPUR
          </VideoText>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-6 text-sand/55">
          Every letter holds the same water, light and stone the city is built from.
        </p>
      </div>
    </section>
  )
}

