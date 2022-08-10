import { useDark } from '../../hooks/useDark'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function ToggleDarkButton() {
  const [isDark, toggleDark] = useDark()

  return (
    <button className='w-6 h-6' onClick={() => toggleDark()}>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
