import React from 'react'
import cx from 'classnames'

export default function Item({ icon, label, href, active }) {
  return (
    <a href={href} target='blank'>
      <div className='flex gap-1 py-3 font-medium text-neutral-400 md:hover:text-neutral-600'>
        <div className='w-6 h-6'>{icon}</div>
        <span
          className={cx('transition-all overflow-hidden', {
            'w-0': !active,
            'w-20': active,
          })}>
          {label}
        </span>
      </div>
    </a>
  )
}
