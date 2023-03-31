import React from 'react'
import cx from 'clsx'

export default function Aside({ children }) {
  return (
    <div
      className={cx(
        'Aside',
        'sm:fixed sm:top-0 sm:left-0',
        'sm:w-sidebar sm:h-full',
        'sm:bg-neutral-100 sm:dark:bg-neutral-900'
      )}>
      {children}
    </div>
  )
}
