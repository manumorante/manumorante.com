import React from 'react'

export default function Avatar() {
  const avatarUrl =
    'https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e'

  return (
    <div className='Avatar'>
      <img
        className='w-32 block mx-auto h-auto m-4 rounded-2xl overflow-hidden'
        alt='Manu Morante'
        src={avatarUrl}
      />
    </div>
  )
}
