import React from 'react'

export default function Link({ url }) {
  if (!url) return null

  const cuteUrl = url.replace(/^https?:\/\//, '')

  return (
    <a
      className='inline-block text-neutral-400 hover:underline underline-offset-1'
      href={url}
      target='blank'>
      {cuteUrl}
    </a>
  )
}
