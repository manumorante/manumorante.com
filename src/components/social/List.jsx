import React, { useState, useEffect } from 'react'
import {
  CodeIcon,
  BeakerIcon,
  PhotographIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline'
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
    href: 'https://www.instagram.com/manumorante/',
  },
  {
    icon: <BriefcaseIcon />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manumorante/',
  },
]

export default function Social() {
  const [current, setCurrent] = useState(0)
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrent((current + 1) % list.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [current, isMobile])

  return (
    <nav className='Social' role='complementary'>
      <div className='flex md:flex-col justify-around'>
        {list.map((item, index) => {
          const active = isMobile ? index === current : true
          return <Item key={index} {...item} active={active} />
        })}
      </div>
    </nav>
  )
}
