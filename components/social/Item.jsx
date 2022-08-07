import React from 'react'

export default function Item({ icon, label, href }) {
  return (
    <a href={href} target='blank'>
      <div className='flex flex-col md:flex-row items-center gap-1 py-3 font-medium text-neutral-400 dark:text-neutral-300'>
        <div className='w-6 h-6 text-neutral-500 dark:text-neutral-400'>{icon}</div>
        <span className='text-sm md:text-base font-light overflow-hidden'>{label}</span>
      </div>
    </a>
  )
}
