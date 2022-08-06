import React from 'react'

export default function New({ project }) {
  if (!project.done) return null

  return (
    <span className='rounded-sm bg-green-600 py-1 px-2 text-xs text-white'>
      NUEVO
    </span>
  )
}
