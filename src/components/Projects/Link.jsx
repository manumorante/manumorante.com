import React from 'react'

export default function Link({ project }) {
  if (!project?.url) return null

  return (
    <div className='block text-neutral-400 dark:text-neutral-500'>
      {project.url}
    </div>
  )
}
