import cx from 'clsx'
import { containerCx } from 'styles/globals.js'
import { CodeBracketIcon, BeakerIcon, PhotoIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

function Item({ icon, label, href }) {
  const mainCx = cx(
    'Item',
    'flex items-center gap-3',
    'font-medium',
    'text-slate-400',
    'sm:hover:text-slate-600 sm:dark:hover:text-slate-300'
  )

  const nameCx = cx('Name text-base font-light overflow-hidden')
  return (
    <a href={href} target='blank' rel='noopener' className={mainCx}>
      <span className='w-6 h-6'>{icon}</span>
      <span className={nameCx}>{label}</span>
    </a>
  )
}

export default function Social() {
  const mainCx = cx(
    'Social',
    // Background
    'bg-neutral-500/10 dark:bg-black/10'
  )

  const contentCx = cx(containerCx, 'p-10 space-y-12')

  return (
    <div className={mainCx}>
      <div className={contentCx}>
        <Item icon={<CodeBracketIcon />} label='Github' href='https://github.com/manumorante' />
        <Item icon={<BeakerIcon />} label='Codepen' href='https://codepen.io/manumorante' />
        <Item
          icon={<PhotoIcon />}
          label='Instagram'
          href='https://www.instagram.com/manu.morante'
        />
        <Item
          icon={<BriefcaseIcon />}
          label='LinkedIn'
          href='https://es.linkedin.com/in/manumorante'
        />
      </div>
    </div>
  )
}
