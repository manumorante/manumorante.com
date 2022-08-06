import React from 'react'

export default function Description({ project }) {
  return (
    <div className='description dark:text-neutral-400'>
      {project.description}
    </div>
  )
}
