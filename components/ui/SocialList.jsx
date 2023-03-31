import cx from 'clsx'
import { CodeBracketIcon, BeakerIcon, PhotoIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Item from './SocialItem'

export default function SocialList({ className }) {
  const mainCx = cx('Social flex sm:flex-col justify-between', className)

  return (
    <nav className={mainCx} role='complementary'>
      <Item icon={<CodeBracketIcon />} label='Github' href='https://github.com/manumorante' />
      <Item icon={<BeakerIcon />} label='Codepen' href='https://codepen.io/manumorante' />
      <Item icon={<PhotoIcon />} label='Instagram' href='https://www.instagram.com/manu.morante' />
      <Item
        icon={<BriefcaseIcon />}
        label='LinkedIn'
        href='https://es.linkedin.com/in/manumorante'
      />
    </nav>
  )
}
