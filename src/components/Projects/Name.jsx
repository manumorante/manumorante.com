import React from 'react'
import New from './New'

export default function Name({ project }) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='font-medium text-xl text-neutral-800 dark:text-neutral-300'>
        {project.name}
      </div>
      <New project={project} />
    </div>
  )
}
