import React from 'react'
import cx from 'classnames'

export default function Aside({ children, className }) {
  return (
    <div
      className={cx(
        'Aside',
        'sm:fixed sm:top-0 sm:left-0',
        'sm:w-[240px] lg:w-[320px] sm:h-full',
        className
      )}>
      {children}
    </div>
  )
}
