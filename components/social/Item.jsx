import React from 'react'
import cx from 'classnames'

export default function Item({ icon, label, href }) {
  return (
    <a href={href} target='blank'>
      <div
        className={cx(
          'flex flex-col sm:flex-row items-center gap-1 py-3',
          'font-medium',
          'text-gray-400',
          'sm:hover:text-gray-600 sm:dark:hover:text-gray-300',
          'transition-colors'
        )}>
        <div className='w-6 h-6'>{icon}</div>
        <span className='text-sm sm:text-base font-light overflow-hidden'>{label}</span>
      </div>
    </a>
  )
}
