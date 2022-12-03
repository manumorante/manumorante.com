/* eslint-disable @next/next/no-img-element */
import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Cover({ name, image, imageDark, url }) {
  const router = useRouter()
  if (!name || !image || !url) return null

  return (
    <Link href={url}>
      <a
        target='_blank'
        className={cx(
          'block',
          'lg:hover:-translate-x-1 lg:hover:-translate-y-1 transition-all duration-300 ease-in-out'
        )}>
        <img
          src={router.basePath + image}
          width={1200}
          height={628}
          className={cx('object-cover object-left-top', {
            'dark:hidden': imageDark,
          })}
          alt={name}
        />

        {imageDark && (
          <img
            src={router.basePath + imageDark}
            width={1200}
            height={628}
            className='hidden dark:block object-cover object-left-top'
            alt={name}
          />
        )}
      </a>
    </Link>
  )
}
