import React from 'react'

export default function Item({ icon, label, href }) {
  return (
    <a href={href} target='blank'>
      <div className='flex flex-col md:flex-row items-center gap-1 py-3 font-medium text-neutral-400 md:hover:text-neutral-600 transition-all'>
        <div className='w-6 h-6'>{icon}</div>
        <span className='text-sm md:text-base font-light overflow-hidden'>{label}</span>
      </div>
    </a>
  )
}
