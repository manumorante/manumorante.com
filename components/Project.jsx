'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import cx from 'clsx'

import { Cover, New } from 'components'
import { useRef } from 'react'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export default function Project({ name, description, url, image, imageDark, featured }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useParallax(scrollYProgress, 60)
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 0])

  const mainCx = cx('Project w-full h-[75vh] flex items-center justify-center')
  const contentCx = 'p-7 sm:p-9'
  const nameCx = cx(
    'Name',
    'flex items-center gap-2',
    'font-medium text-2xl text-slate-800 dark:text-slate-100'
  )
  const descriptionCx = cx(
    'Description mb-6',
    'text-2xl lg:text-xl text-slate-600 dark:text-slate-300 font-light'
  )
  const coverCx = cx(
    'Cover block w-full h-auto aspect-og bg-slate-500/50 md:rounded-2xl overflow-hidden'
  )

  return (
    <article className={mainCx} ref={ref}>
      <div className='relative z-10 w-full max-w-3xl'>
        <a className={coverCx} href={url} target='_blank' rel='noreferrer'>
          <Cover alt={name} image={image} imageDark={imageDark} />
        </a>

        <motion.div className={contentCx} style={{ y, opacity }}>
          <h3 className={nameCx}>
            <span>{name}</span>

            {featured && <New />}
          </h3>

          <h4 className={descriptionCx}>{description}</h4>
        </motion.div>
      </div>
    </article>
  )
}
