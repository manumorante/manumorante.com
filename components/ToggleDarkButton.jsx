'use client'

import cx from 'clsx'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useDark } from 'lib/useDark'

export default function ToggleDarkButton() {
  const [isDark, toggleDark] = useDark()

  return (
    <button
      className={cx(
        'ToggleDarkButton',
        'fixed',
        'top-9 sm:top-6 md:top-10 lg:top-14',
        'right-8 sm:right-6 md:right-10 lg:right-14',
        'w-6 h-6',
        'opacity-60'
      )}
      onClick={() => toggleDark()}>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
