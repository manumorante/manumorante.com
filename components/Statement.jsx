'use client'

import { motion } from 'framer-motion'
import cx from 'clsx'

export default function Statement() {
  const mainCx = cx(
    'Statement',
    // 'sm:sticky top-0 -z-10',
    'pt-8 pb-12 px-6 lg:px-0 sm:py-10 lg:py-14',
    'md:w-2/3',
    'lg:w-1/2',
    'text-2xl font-extralight text-neutral-400 md:leading-relaxed'
  )
  const strongCx = 'whitespace-nowrap font-light text-neutral-500 dark:text-neutral-300'

  return (
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.4, type: 'spring', bounce: 0.5 }}
      //
      className={mainCx}>
      <span className='block'>¡Hola!,</span> soy <strong className={strongCx}>Manu Morante</strong>,
      programador <strong className={strongCx}>frontend</strong> en{' '}
      <strong className={strongCx}>Domestika</strong>.
    </motion.h1>
  )
}
