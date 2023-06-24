'use client'

import { motion } from 'framer-motion'

import cx from 'clsx'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useDark } from 'lib/useDark'

export default function ToggleDarkButton({ className }) {
  const [isDark, toggleDark] = useDark()

  const mainCx = cx('ToggleDarkButton w-7 h-7 text-slate-400', className)
  const iconCx = cx('absolute', 'w-7 h-7')

  const moonHiddenAn = { opacity: 0, x: -28, y: 28 }
  const moonVisibleAn = { opacity: 1, x: 0, y: 0 }
  const sunHiddenAn = { opacity: 0, x: 28, y: -28 }
  const sunVisibleAn = { opacity: 1, x: 0, y: 0 }
  const transition = { duration: 1, type: 'spring', bounce: 0.3 }

  return (
    <div className={mainCx} onClick={toggleDark}>
      <motion.div
        className={iconCx}
        initial={moonHiddenAn}
        animate={isDark ? moonVisibleAn : moonHiddenAn}
        transition={transition}>
        <MoonIcon />
      </motion.div>

      <motion.div
        className={iconCx}
        initial={sunHiddenAn}
        animate={isDark ? sunHiddenAn : sunVisibleAn}
        transition={transition}>
        <SunIcon />
      </motion.div>
    </div>
  )
}
