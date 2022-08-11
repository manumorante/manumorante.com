import React from 'react'
import cx from 'classnames'

export default function Content({ children, className }) {
  return (
    <div className={cx('Content', 'sm:ml-[240px] lg:ml-[320px] lg:p-14', className)}>
      {children}
    </div>
  )
}
