import React from 'react'

export default function Link({ project }) {
  if (!project?.url) return null

  const url = project.url.replace(/^https?:\/\//, '')

  return (
    <a
      className='inline-block text-neutral-400 dark:text-neutral-500 hover:underline underline-offset-1'
      href={project.url}
      target='blank'>
      {url}
    </a>
  )
}
