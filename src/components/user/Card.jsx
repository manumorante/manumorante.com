import React from 'react'
import Avatar from './Avatar'

export default function Card() {
  return (
    <div className='flex flex-col gap-3 items-center md:items-start'>
      <Avatar />
      <div className='w-full'>
        <div className='text-center md:text-left text-2xl font-normal text-neutral-800'>
          Manu Morante
        </div>
        <div className='text-center text-2xl font-light md:text-left text-neutral-400'>
          Frontend developer
          {/* and UI designer */}
        </div>
      </div>
    </div>
  )
}
