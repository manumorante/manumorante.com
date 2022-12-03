import Link from 'next/link'
import React from 'react'
import { ExternalLinkIcon, CubeTransparentIcon } from '@heroicons/react/24/outline'

export default function Links({ project }) {
  const { id, url } = project

  return (
    <div className='flex justify-between my-6 gap-2'>
      <Link href={`/projects/${id}`}>
        <a className='flex gap-2'>
          <CubeTransparentIcon className='w-6 h-6' />
          <span>Más detalles</span>
        </a>
      </Link>

      <Link href={url} target='blank'>
        <a target='_blank' className='flex gap-2 items-center'>
          <span>Ir a la web</span>
          <ExternalLinkIcon className='w-5 h-5' />
        </a>
      </Link>
    </div>
  )
}
