import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
      {/* top meta row */}
      <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between">
        <div className="animate-[fadein_1s_ease_forwards] opacity-0 [animation-delay:120ms]">
          <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">.AMR</p>
          <p className="mt-1 text-xs tracking-[0.25em] text-muted-foreground">
            AMMAR ADILOVIĆ
          </p>
        </div>
        <div className="hidden text-right text-xs leading-relaxed tracking-[0.2em] text-muted-foreground md:block animate-[fadein_1s_ease_forwards] opacity-0 [animation-delay:200ms]">
          BASED IN
          <br />
          SARAJEVO, BiH
        </div>
      </div>

      {/* headline */}
      <div className="mx-auto w-full max-w-[1400px]">
        <h1 className="font-display font-bold uppercase leading-[0.86] tracking-[-0.02em]">
          <span className="block overflow-hidden">
            <span className="block animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_forwards] text-[clamp(2.25rem,11.5vw,10rem)]">
              Video
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_forwards] text-[clamp(2.25rem,11.5vw,10rem)] text-muted-foreground [animation-delay:100ms]">
              Editor
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_forwards] text-[clamp(2.25rem,11.5vw,10rem)] [animation-delay:200ms]">
              Videographer
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_forwards] text-[clamp(2.25rem,11.5vw,10rem)] text-muted-foreground [animation-delay:300ms]">
              Motion Designer
            </span>
          </span>
        </h1>
      </div>

      {/* bottom row */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between animate-[fadein_1.2s_ease_forwards] opacity-0 [animation-delay:600ms]">
        <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Crafting stories through editing, motion and film.
        </p>
        <Link
          href="#work"
          className="group inline-flex items-center gap-3 self-start rounded-full border border-border px-6 py-3 text-xs font-medium tracking-[0.25em] text-foreground transition-colors hover:border-foreground md:self-auto"
        >
          VIEW WORK
          <ArrowDown
            size={15}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </Link>
      </div>
    </section>
  )
}
