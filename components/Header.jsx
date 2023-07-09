'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import cx from 'clsx'
import { useRef } from 'react'
import { Spacer, SpacerLines } from '@/components/Spacer'

export default function Header() {
  const target = useRef(null)
  const { scrollYProgress } = useScroll({ target, offset: ['start', 'end start'] })

  const waveY = useTransform(scrollYProgress, [0, 1], [0, 600])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.5, 0.5, 0])

  const mainCx = cx('Header relative w-full')
  const containerCx = cx('max-w-3xl mx-auto px-4 mm:px-6')

  // Texts
  const hiCx = cx(
    'Hi',
    'w-0', // To force the text to be in one line
    'text-7xl mm:text-8xl font-black leading-none',
    'text-neutral-500 [&_strong]:text-white'
  )
  const lookCx = cx('Look text-5xl mm:text-6xl font-extralight')

  const waveCx = cx('Wave absolute -z-10 top-[60vh] left-0 w-full h-[60vh] min-w-[756px]')

  return (
    <div className={mainCx} ref={target}>
      <div className={containerCx}>
        <SpacerLines />

        <h2 className={hiCx}>
          Hi, <strong>you are great</strong> for being here
          {/* Hola, eres genial por estar aquí */}
        </h2>

        <Spacer />

        <h3 className={lookCx}>
          Now that you are here,
          <br />
          have a look
          {/* Ya que has venido, echa un vistazo */}
        </h3>

        <Spacer />
      </div>

      <motion.img
        className={waveCx}
        style={{ y: waveY, opacity: waveOpacity }}
        src='/wave.png'
        width={1512}
        height={704}
        alt='Background'
      />
    </div>
  )
}
