import React from 'react'

export default function Link({ project }) {
  if (!project?.url) return null

  const url = project.url.replace(/^https?:\/\//, '')

  return (
    <div className='block text-neutral-400 dark:text-neutral-500'>
      {url}
    </div>
  )
}
