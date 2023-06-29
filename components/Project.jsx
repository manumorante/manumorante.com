'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import cx from 'clsx'

import { Cover, New } from 'components'
import { useRef } from 'react'

export default function Project({ name, description, url, image, imageDark, featured, colors }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scrollA = [0, 0.3, 0.7, 1]
  const opacity = useTransform(scrollYProgress, scrollA, [0, 1, 1, 1])
  const scale = useTransform(scrollYProgress, scrollA, [0.7, 1, 1, 1])
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8, 1],
    ['-100%', '-100%', '0%', '0%', '-100%']
  )

  const mainCx = cx('Project relative overflow-hidden z-10 w-full max-w-3xl mx-auto mb-12')
  const coverCx = cx('Cover relative z-10 block w-full h-auto aspect-og')
  const contentCx = cx('relative z-0 p-7 sm:p-9')

  const nameCx = cx(
    'Name',
    'flex items-center gap-2',
    'font-medium text-xl mm:text-2xl text-slate-800 dark:text-slate-100'
  )

  const descriptionCx = cx(
    'Description mb-6',
    'text-xl mm:text-2xl lg:text-xl text-slate-600 dark:text-slate-300 font-light'
  )

  return (
    <motion.article style={{ scale, opacity }} className={mainCx} ref={ref}>
      <a className={coverCx} href={url} target='_blank' rel='noreferrer'>
        <Cover alt={name} image={image} imageDark={imageDark} />
        <motion.div
          style={{ '--tw-shadow-color': colors?.light }}
          className='absolute z-0 inset-0 shadow-2xl shadow-neutral-500'
        />
      </a>

      <motion.div className={contentCx} style={{ y: contentY }}>
        <h3 className={nameCx}>
          <span>{name}</span>

          {featured && <New />}
        </h3>

        <h4 className={descriptionCx}>{description}</h4>
      </motion.div>
    </motion.article>
  )
}
