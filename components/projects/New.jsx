import React from 'react'

export default function New({ project }) {
  if (!project.new) return null

  return (
    <div className='flex gap-1 items-center py-2'>
      <div className='flex h-3 w-3 relative'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
      </div>

      <div className='text-gray-400'>nuevo</div>
    </div>
  )
}
