'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import cx from 'clsx'
import { useRef } from 'react'

export default function Header() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const waveY = useTransform(scrollYProgress, [0, 1], [0, 600])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.5, 0.5, 0])

  const mainCx = cx('Header relative min-w-screen min-h-screen overflow-hidden')
  const containerCx = cx('max-w-3xl mx-4 mm:mx-6 lg:mx-auto pt-[20vh]')
  const hiCx = cx('Hi w-72 sm:w-96 text-8xl font-black leading-none')
  const waveCx = cx('Wave absolute -z-10 top-[60vh] left-0 w-full h-[60vh] min-w-[756px]')

  return (
    <div className={mainCx} ref={ref}>
      <div className={containerCx}>
        <div className={hiCx}>
          <span className='text-neutral-500'>Hi,</span> <span>you are great</span>{' '}
          <span className='text-neutral-500'>for being here.</span>
        </div>

        <div className='w-72 sm:w-96 my-[30vh] text-6xl font-extralight'>
          Take a look while you are here.
        </div>
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
