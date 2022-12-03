/* eslint-disable @next/next/no-img-element */
import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

export default function Cover({ project }) {
  if (!project?.id || !project?.image || !project?.url) return null

  return (
    <Link href={project.url}>
      <a
        target='_blank'
        className={cx(
          'block',
          'lg:hover:-translate-x-1 lg:hover:-translate-y-1 transition-all duration-300 ease-in-out'
        )}>
        <div className={cx({ 'dark:hidden': project.imagedark })}>
          <img
            src={`/projects/${project.id}.png`}
            width={1200}
            height={628}
            className='object-cover object-left-top'
            alt={project?.name}
          />
        </div>

        {project.imagedark && (
          <div className='hidden dark:block'>
            <img
              src={`/projects/${project.id}.dark.png`}
              width={1200}
              height={628}
              className='object-cover object-left-top'
              alt={project?.name}
            />
          </div>
        )}
      </a>
    </Link>
  )
}
