import { cn } from '@/lib/cn'
import { lang } from '@/lib/lang'
import { useEffect, useRef, useState, type RefObject } from 'react'

const copy = {
  en: {
    lead: 'Manu is a human and can make ',
    typo: 'mitsakes',
    word: 'mistakes',
    tip: "See? Caught in review. That's the whole system: I check Claude, Claude checks me.",
  },
  es: {
    lead: 'Manu es humano y puede cometer ',
    typo: 'erorres',
    word: 'errores',
    tip: '¿Ves? Cazado en la revisión. Así trabajamos: yo reviso a Claude y Claude me revisa a mí.',
  },
}[lang]

const PAUSE_MS = 350
const BACKSPACE_MS = 55
const TURN_MS = 180
const TYPE_MS = 80
const RESET_MS = 1600

/** A pause on the typo, backspacing to the first wrong letter, then retyping the word. */
function correctionFrames(typo: string, word: string) {
  let same = 0
  while (typo[same] === word[same]) same++
  const erased = Array.from({ length: typo.length - same }, (_, i) => typo.slice(0, -1 - i))
  const typed = Array.from({ length: word.length - same }, (_, i) => word.slice(0, same + 1 + i))
  // delays[i] is the wait before leaving frame i.
  const delays = [
    PAUSE_MS,
    ...erased.slice(1).map(() => BACKSPACE_MS),
    TURN_MS,
    ...typed.slice(1).map(() => TYPE_MS),
  ]
  return { frames: [typo, ...erased, ...typed], delays }
}

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/** Plays the correction once per visit and puts the typo back after the reader leaves. */
function useCorrection(typo: string, word: string, active: boolean) {
  const [{ frames, delays }] = useState(() => correctionFrames(typo, word))
  const last = frames.length - 1
  const [step, setStep] = useState<number | null>(null)

  const typing = step !== null && step < last
  const fixed = step === last

  useEffect(() => {
    if (!typing) return
    const timer = setTimeout(() => setStep(step + 1), delays[step])
    return () => clearTimeout(timer)
  }, [typing, step, delays])

  useEffect(() => {
    if (!fixed || active) return
    const timer = setTimeout(() => setStep(null), RESET_MS)
    return () => clearTimeout(timer)
  }, [fixed, active])

  const play = () => setStep((s) => s ?? (prefersReducedMotion() ? last : 0))

  return { text: step === null ? typo : frames[step], typing, fixed, play }
}

/** Touch has no hover: closes a tapped-open tooltip on a tap outside it or on Escape. */
function useDismiss(ref: RefObject<HTMLElement | null>, open: boolean, close: () => void) {
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) close()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [ref, open, close])
}

export default function HumanDisclaimer() {
  const root = useRef<HTMLSpanElement>(null)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [open, setOpen] = useState(false)
  const correction = useCorrection(copy.typo, copy.word, hovered || focused || open)
  useDismiss(root, open, () => setOpen(false))

  return (
    <span
      ref={root}
      className="group relative inline-block"
      onPointerEnter={() => {
        setHovered(true)
        correction.play()
      }}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => {
        setFocused(true)
        correction.play()
      }}
      onBlur={() => setFocused(false)}>
      <button
        type="button"
        aria-label={`${copy.lead}${copy.word}.`}
        aria-describedby="human-disclaimer-tip"
        onClick={() => {
          setOpen((o) => !o)
          correction.play()
        }}
        className={cn(
          'cursor-help underline decoration-dotted decoration-1 underline-offset-4',
          'focus-visible:outline-primary rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4',
        )}>
        {copy.lead}
        <span className={cn('transition-colors duration-1000', correction.fixed && 'text-primary')}>
          {correction.text}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'bg-primary ml-px inline-block h-[1.05em] w-[1.5px] align-[-0.15em] opacity-0',
            correction.typing && 'animate-blink opacity-100 motion-reduce:animate-none',
          )}
        />
        .
      </button>

      <span
        role="tooltip"
        id="human-disclaimer-tip"
        className={cn(
          'absolute bottom-[calc(100%+12px)] left-1/2 z-10 w-[min(20rem,calc(100vw-2.5rem))]',
          'rounded-lg px-3.5 py-3 text-left text-sm leading-snug shadow-lg',
          'bg-dark text-lightest dark:bg-lightest dark:text-dark',
          'after:absolute after:top-full after:left-1/2 after:-translate-x-1/2',
          'after:border-t-dark dark:after:border-t-lightest after:border-6 after:border-transparent',
          'pointer-events-none invisible -translate-x-1/2 translate-y-1.5 opacity-0',
          'transition duration-200 motion-reduce:transition-none',
          'group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100',
          'group-hover:visible group-hover:translate-y-0 group-hover:opacity-100',
          open && 'visible translate-y-0 opacity-100',
        )}>
        {copy.tip}
      </span>
    </span>
  )
}
