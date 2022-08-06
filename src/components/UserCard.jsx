import React from 'react'
import Avatar from './Avatar'

export default function UserCard() {
  return (
    <div className='flex flex-col gap-3 items-center md:items-start'>
      <Avatar />
      <div className='w-full'>
        <div className='text-center md:text-left text-xl font-semibold'>
          Manu Morante
        </div>
        <div className='text-center md:text-left'>
          Frontend developer
          {/* and UI designer */}
        </div>
      </div>
    </div>
  )
}
