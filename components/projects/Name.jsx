import React from 'react'

export default function Name({ project }) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='font-medium text-2xl text-neutral-800'>{project.name}</div>
    </div>
  )
}
