import { useDark } from '../../hooks/useDark'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'

export default function ToggleDarkButton() {
  const [isDark, toggleDark] = useDark()

  return (
    <button
      className={cx(
        'ToggleDarkButton',
        'fixed',
        'top-10 sm:top-6 md:top-10 lg:top-14',
        'right-10 sm:right-6 md:right-10 lg:right-14',
        'w-6 h-6',
        'opacity-60'
      )}
      onClick={() => toggleDark()}>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
