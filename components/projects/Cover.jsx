import React from 'react'
import cx from 'classnames'
import Image from 'next/image'

export default function Cover({ project }) {
  if (!project?.id || !project?.image || !project?.url) return null

  return (
    <a
      className={cx(
        'block',
        'md:hover:-translate-x-1 md:hover:-translate-y-1 transition-all duration-300 ease-in-out'
      )}
      href={project.url}
      target='blank'>
      <Image
        src={`/projects/${project.id}.png`}
        width={1200}
        height={628}
        objectFit='cover'
        objectPosition='top left'
        alt={project?.name}
      />
    </a>
  )
}
