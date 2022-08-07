import React from 'react'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function Cover({ project }) {
  if (!project?.id || !project?.image || !project?.url) return null

  return (
    <Link href={project.url}>
      <a
        target='_blank'
        className={cx(
          'block',
          'md:hover:-translate-x-1 md:hover:-translate-y-1 transition-all duration-300 ease-in-out'
        )}>
        <Image
          src={`/projects/${project.id}.png`}
          width={1200}
          height={628}
          objectFit='cover'
          objectPosition='top left'
          alt={project?.name}
        />
      </a>
    </Link>
  )
}
