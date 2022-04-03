import React from 'react'

export default function Social({ data }) {
  const { social } = data

  return (
    <nav className='Social' role='complementary'>
      <ul>
        {social.map((item) => (
          <li key={item.name}>
            <a
              className='block p-4 hover:bg-white dark:hover:bg-neutral-900 transition-colors'
              href={item.url}
              target='blank'>
              <div className='flex justify-between gap-4'>
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
