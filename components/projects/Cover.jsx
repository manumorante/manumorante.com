import React from 'react'
import cx from 'classnames'

export default function Cover({ project }) {
  if (!project?.image || !project?.url) return null

  return (
    <a
      className={cx(
        'block',
        'md:hover:-translate-x-1 md:hover:-translate-y-1 transition-all duration-300 ease-in-out',
        'md:hover:shadow-md'
      )}
      href={project.url}
      target='blank'>
      <img src={project.image} alt={project?.name} loading='lazy' />
    </a>
  )
}
