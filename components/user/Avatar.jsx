import React from 'react'
import Image from 'next/image'

export default function Avatar() {
  const avatarUrl = 'https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'

  return (
    <div className='Avatar w-32 h-w-32 rounded-2xl overflow-hidden'>
      <Image src={avatarUrl} width={128} height={128} alt='Manu Morante' />
    </div>
  )
}
