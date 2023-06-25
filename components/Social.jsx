import cx from 'clsx'
import { CodeBracketIcon, BeakerIcon, PhotoIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

function Item({ icon, label, href }) {
  return (
    <a
      href={href}
      target='blank'
      rel='noopener'
      className={cx(
        'SocialItem',
        'flex flex-col sm:flex-row items-center gap-1 py-3',
        'font-medium',
        'text-slate-400',
        'sm:hover:text-slate-600 sm:dark:hover:text-slate-300'
      )}>
      <span className='w-6 h-6'>{icon}</span>
      <span className='text-sm sm:text-base font-light overflow-hidden'>{label}</span>
    </a>
  )
}

export default function Social() {
  const mainCx = cx(
    'Social flex justify-evenly',
    'w-full h-40 flex items-center',
    'bg-white/10 dark:bg-black'
  )

  return (
    <div className={mainCx}>
      <Item icon={<CodeBracketIcon />} label='Github' href='https://github.com/manumorante' />
      <Item icon={<BeakerIcon />} label='Codepen' href='https://codepen.io/manumorante' />
      <Item icon={<PhotoIcon />} label='Instagram' href='https://www.instagram.com/manu.morante' />
      <Item
        icon={<BriefcaseIcon />}
        label='LinkedIn'
        href='https://es.linkedin.com/in/manumorante'
      />
    </div>
  )
}
