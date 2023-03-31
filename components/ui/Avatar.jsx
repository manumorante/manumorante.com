/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Avatar() {
  const avatarUrl = 'https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'

  return (
    <div className='Avatar w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden ring-2 ring-gray-500/30'>
      <img src={avatarUrl} width={128} height={128} alt='Manu Morante' />
    </div>
  )
}
