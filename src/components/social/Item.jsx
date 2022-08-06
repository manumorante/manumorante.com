import React from 'react'

export default function Item({ children, href, icon }) {
  return (
    <a href={href} target='blank'>
      <div className='flex gap-1 py-3 font-medium text-neutral-400 md:hover:text-neutral-600'>
        <div className='w-6 h-6'>{icon}</div>
        <span className='hidden md:inline-block'>{children}</span>
      </div>
    </a>
  )
}
