import React from 'react'

export default function Section({ children, title }) {
  return (
    <section className='pb-6'>
      <div className='font-thin text-xl mb-4'>{title}</div>
      {children}
    </section>
  )
}
