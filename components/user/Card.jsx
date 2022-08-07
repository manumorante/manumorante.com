import React from 'react'
import Avatar from './Avatar'

export default function Card() {
  return (
    <div className='[Card] flex flex-col gap-4 items-start mb-8'>
      <Avatar />
      <div>
        <div className='text-2xl font-normal text-neutral-800'></div>
        <div className='skills text-2xl font-extralight text-neutral-400 md:leading-relaxed'>
          <p className='my-4'>
            <span className='block'>¡Hola!,</span> soy{' '}
            <strong>Manu Morante</strong>, programador <strong>frontend</strong>{' '}
            en <strong>Domestika</strong>.
          </p>
          {/* <p className='my-4'>
            Aficionado al <strong>diseño</strong>, a la{' '}
            <strong>fotografía</strong> y a los <strong>juegos</strong> clásicos
            estilo <strong>Nintendo</strong>.
          </p> */}
        </div>
      </div>
    </div>
  )
}
