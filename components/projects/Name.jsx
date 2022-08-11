import React from 'react'

export default function Name({ project }) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='font-medium text-2xl text-gray-800 dark:text-gray-100'>{project.name}</div>
    </div>
  )
}
