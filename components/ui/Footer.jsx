import React from 'react'
import cx from 'classnames'

export default function Footer({ children, className }) {
  return <div className={cx('Footer', '', className)}>{children}</div>
}
