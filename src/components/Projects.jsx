import React from 'react'
import { useMyData } from '../context/AppProvider'

export default function Projects() {
  const { projects } = useMyData()

  if (!projects) return null

  return (
    <ul className='Projects flex flex-col divide-y divide-neutral-300 dark:divide-neutral-700'>
      {projects.map((item) => (
        <li key={item.name}>
          <a className='py-6 block' href={item.url} target='blank'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <div className='name font-medium text-xl text-neutral-800 dark:text-neutral-300'>
                  {item.name}
                </div>
                {item.done && (
                  <span class='rounded-md bg-green-600 py-1 px-2 text-xs text-white'>
                    NUEVO
                  </span>
                )}
              </div>
              
              {item.image && <img src={item.image} alt={item.name} />}

              <div className='description dark:text-neutral-400'>
                {item.description}
              </div>
              <div className='url text-neutral-400 dark:text-neutral-500 block'>
                {item.url}
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
