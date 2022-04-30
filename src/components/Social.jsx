import React from 'react'
import { useMyData } from '../context/AppProvider'

export default function Social() {
  const { social } = useMyData()

  if (!social) return null

  return (
    <nav className='Social' role='complementary'>
      <ul>
        {social.map((item) => (
          <li key={item.name}>
            <a className='block py-4' href={item.url} target='blank'>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:justify-between'>
                <div className='name font-medium text-neutral-600 dark:text-neutral-200'>
                  {item.name}
                </div>
                <div className='url font-light dark:text-neutral-400'>
                  {item.url}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
