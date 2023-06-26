'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import cx from 'clsx'

import { Cover, New } from 'components'
import { useRef } from 'react'

export default function Project({ name, description, url, image, imageDark, featured }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])
  const contentY = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], ['-100%', '0%', '0%', '-100%'])
  const shadow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const mainCx = cx('Project relative z-10 w-full max-w-3xl mx-auto px-3 ')

  const coverCx = cx('Cover relative z-10 block w-full h-auto aspect-og')
  const contentCx = 'relative z-0 p-7 sm:p-9'
  const descriptionCx = cx(
    'Description mb-6',
    'text-2xl lg:text-xl text-slate-600 dark:text-slate-300 font-light'
  )
  const nameCx = cx(
    'Name',
    'flex items-center gap-2',
    'font-medium text-2xl text-slate-800 dark:text-slate-100'
  )

  return (
    <motion.article style={{ scale, opacity }} className={mainCx} ref={ref}>
      <a className={coverCx} href={url} target='_blank' rel='noreferrer'>
        <Cover alt={name} image={image} imageDark={imageDark} />
        <motion.div style={{ opacity: shadow }} className='absolute z-0 inset-0 shadow-2xl' />
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
