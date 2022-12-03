/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Avatar() {
  const avatarUrl = 'https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'

  return (
    <div className='Avatar w-32 h-w-32 rounded-2xl overflow-hidden'>
      <img src={avatarUrl} width={128} height={128} alt='Manu Morante' />
    </div>
  )
}
