import React, { useEffect, useState } from 'react'
import Avatar from './components/Avatar'
import Projects from './components/Projects'
import Social from './components/Social'
import { useData } from './useData'

export default function App() {
  const dataParam = useData()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!dataParam) return

    setData(dataParam)
    setLoading(false)
  }, [dataParam])

  useEffect(() => {
    localStorage.theme = localStorage.theme === 'light' ? 'light' : 'dark'
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark'
    )
  }, [])

  function toggleDarkMode() {
    localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark'
    )
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className='w-full max-w-md mx-auto'>
      <button onClick={toggleDarkMode} className='fixed top-6 right-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        </svg>
      </button>
      <div className='p-10 bg-white dark:bg-neutral-900 flex justify-center items-center'>
        <div className='text-center'>
          <Avatar />
          <h1 className='text-center text-xl font-semibold'>Manu Morante</h1>
          <p className='mb-4'>Front end developer and UI designer</p>
        </div>
      </div>

      <section className='p-6'>
        <h2 className='font-thin text-xl my-3'>Proyectos</h2>
        <Projects data={data} />

        <h2 className='font-thin text-xl my-3'>Social</h2>
        <Social data={data} />
      </section>
    </div>
  )
}
