import React from 'react'
import {
  CodeIcon,
  BeakerIcon,
  PhotographIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline'
import Item from './Item'

export default function Social() {
  return (
    <nav className='Social' role='complementary'>
      <div className='flex md:flex-col justify-around'>
        <Item href='https://github.com/manumorante' icon={<CodeIcon />}>
          Github
        </Item>

        <Item href='https://codepen.io/manumorante' icon={<BeakerIcon />}>
          Codepen
        </Item>

        <Item
          href='https://www.linkedin.com/in/manumorante'
          icon={<BriefcaseIcon />}>
          Linkedin
        </Item>

        <Item
          href='https://instagram.com/manu.morante'
          icon={<PhotographIcon />}>
          Instagram
        </Item>
      </div>
    </nav>
  )
}
