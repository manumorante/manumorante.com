import React from 'react'
import cx from 'clsx'

export default function Content({ children, className }) {
  return (
    <div className={cx('Content', 'max-w-3xl', 'sm:ml-sidebar lg:px-14', className)}>
      {children}
    </div>
  )
}
