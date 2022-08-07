import React from 'react'

export default function Description({ project }) {
  return (
    <div className='[Description] text-xl dark:text-neutral-400'>
      {project.description}
    </div>
  )
}
