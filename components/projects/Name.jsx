import React from 'react'

export default function Name({ project }) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='font-medium text-xl text-neutral-800 dark:text-neutral-100'>
        {project.name}
      </div>
    </div>
  )
}
