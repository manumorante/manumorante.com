import React from 'react'

export default function Projects({ data }) {
  const { projects } = data

  return (
    <ul className='Projects flex flex-col divide-y divide-neutral-300 dark:divide-neutral-700'>
      {projects.map((item) => (
        <li key={item.name}>
          <a
            className='py-6 block hover:bg-white dark:hover:bg-neutral-900/50 transition-colors'
            href={item.url}
            target='blank'>
            <div className='flex flex-col gap-2'>
              <div className='name font-medium text-xl text-neutral-800 dark:text-neutral-300'>
                {item.name}
              </div>

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
