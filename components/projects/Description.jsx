import React from 'react'

export default function Description({ project }) {
  return (
    <div className='[Description] text-xl text-neutral-600 dark:text-neutral-300'>
      {project.description}
    </div>
  )
}
