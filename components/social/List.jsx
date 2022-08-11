import React from 'react'
import { CodeIcon, BeakerIcon, PhotographIcon, BriefcaseIcon } from '@heroicons/react/outline'
import Item from './Item'

const list = [
  {
    icon: <CodeIcon />,
    label: 'Github',
    href: 'https://github.com/manumorante',
  },
  {
    icon: <BeakerIcon />,
    label: 'Codepen',
    href: 'https://codepen.io/manumorante',
  },
  {
    icon: <PhotographIcon />,
    label: 'Instagram',
    href: 'https://www.instagram.com/manu.morante/',
  },
  {
    icon: <BriefcaseIcon />,
    label: 'LinkedIn',
    href: 'https://es.linkedin.com/in/manumorante',
  },
]

export default function Social() {
  return (
    <nav className='[Social] flex sm:flex-col justify-between' role='complementary'>
      {list.map((item, index) => {
        return <Item key={index} {...item} />
      })}
    </nav>
  )
}
