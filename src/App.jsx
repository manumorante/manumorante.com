import React from 'react'
import ToggleDark from './components/ToggleDark'
import Avatar from './components/Avatar'
import Projects from './components/Projects'
import Social from './components/Social'

export default function App() {
  return (
    <div className='w-full max-w-md mx-auto'>
      <ToggleDark />

      <div className='p-10 bg-white dark:bg-neutral-900 flex justify-center items-center'>
        <div className='text-center'>
          <Avatar />
          <h1 className='text-center text-xl font-semibold'>Manu Morante</h1>
          <p className='mb-4'>Front end developer and UI designer</p>
        </div>
      </div>

      <section className='p-6'>
        <h2 className='font-thin text-xl my-3'>Proyectos</h2>
        <Projects />

        <h2 className='font-thin text-xl my-3'>Social</h2>
        <Social />
      </section>
    </div>
  )
}
