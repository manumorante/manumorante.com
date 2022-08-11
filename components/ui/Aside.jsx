import React from 'react'
import cx from 'classnames'

export default function Aside({ children }) {
  return (
    <div
      className={cx(
        'Aside',
        'sm:fixed sm:top-0 sm:left-0',
        'sm:w-[240px] sm:h-full',
        'bg-gray-100 dark:bg-gray-900',
        'transition-colors'
      )}>
      {children}
    </div>
  )
}
