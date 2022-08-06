import React from 'react'

export default function Avatar() {
  const avatarUrl =
    'https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'

  return (
    <img
      className='block w-32 h-auto rounded-2xl overflow-hidden'
      alt='Manu Morante'
      src={avatarUrl}
    />
  )
}
