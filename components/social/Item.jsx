import React from 'react'
import cx from 'clsx'

export default function Item({ icon, label, href }) {
  return (
    <a href={href} target='blank'>
      <div
        className={cx(
          'flex flex-col sm:flex-row items-center gap-1 py-3',
          'font-medium',
          'text-neutral-400',
          'sm:hover:text-neutral-600 sm:dark:hover:text-neutral-300'
        )}>
        <div className='w-6 h-6'>{icon}</div>
        <span className='text-sm sm:text-base font-light overflow-hidden'>{label}</span>
      </div>
    </a>
  )
}
