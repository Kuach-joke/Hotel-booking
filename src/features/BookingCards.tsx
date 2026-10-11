import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fanHint } from '../data/stay'
import illustrationSun from '../assets/images/illustration-sun.svg'
import iconSparkle from '../assets/images/icon-sparkle.svg'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { ReceiptCard } from './ReceiptCard'
import { WelcomeNote } from './WelcomeNote'

export function BookingCards() {
  const reduceMotion = useReducedMotion()
  const sideBySide = useMediaQuery('(min-width: 48rem)')
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)')
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const [shift, setShift] = useState(70)
  const stageRef = useRef<HTMLDivElement>(null)
  const fanned = hovered || pinned

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const measure = () => {
      const width = stage.clientWidth
      const card = Math.min(400, width * 0.48)
      const room = Math.max(0, width - card * 2)
      const gap = Math.min(140, Math.max(16, room - 8))
      const travel = (gap + 36) / 2 - 18
      setShift(Math.max(12, travel))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 220, damping: 26, mass: 0.85 }

  const spread = sideBySide && fanned

  return (
    <section id="your-stay" className="scroll-mt-28" aria-label="Your stay">
      <div
        ref={stageRef}
        className="booking-stage"
        onMouseEnter={() => {
          if (canHover && sideBySide) setHovered(true)
        }}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          if (!canHover && sideBySide) setPinned((value) => !value)
        }}
      >
        <motion.div
          className="booking-card"
          animate={
            sideBySide ? { x: spread ? -shift : 18, rotate: spread ? 5 : -4 } : { x: 0, rotate: 0 }
          }
          transition={transition}
          style={{ zIndex: 1 }}
        >
          <ReceiptCard />
        </motion.div>

        <motion.img
          src={illustrationSun}
          width={164}
          height={164}
          alt=""
          className="fan-sun"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ opacity: spread ? 1 : 0, scale: spread ? 1 : 0.7 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' }}
        />

        <motion.div
          className="booking-card"
          animate={
            sideBySide ? { x: spread ? shift : -18, rotate: spread ? -5 : 4 } : { x: 0, rotate: 0 }
          }
          transition={transition}
          style={{ zIndex: 2 }}
        >
          <WelcomeNote />
        </motion.div>
      </div>

      {sideBySide ? (
        <button
          type="button"
          className="hover-hint"
          aria-pressed={pinned}
          onClick={(event) => {
            event.stopPropagation()
            setPinned((value) => !value)
          }}
        >
          <img src={iconSparkle} width={8} height={8} alt="" />
          <span>{fanHint}</span>
          <img src={iconSparkle} width={8} height={8} alt="" />
        </button>
      ) : null}
    </section>
  )
}
