import React, { useEffect } from 'react'

export default function App() {
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

  return (
    <div className='w-full max-w-md mx-auto '>
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
          <img
            className='w-32 block mx-auto h-auto m-4 rounded-2xl overflow-hidden'
            alt='Manu Morante'
            src='https://www.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e.jpg?s=200'
          />
          <h1 className='text-center text-xl font-semibold'>Manu Morante</h1>
          <p className='mb-4'>Front end developer and UI designer</p>
        </div>
      </div>

      <div className='p-10'>
        <h1 className='font-bold'>Proyectos</h1>
        <nav>
          <ul>
            <li>
              <a className='block p-2' href='https://csspen.es'>
                CSS Pen
              </a>
            </li>
            <li>
              <a className='block p-2' href='https://posters.manumorante.com'>
                Minimalist Movie Posters
              </a>
            </li>
          </ul>
        </nav>

        <nav role='complementary'>
          <h1 className='font-bold'>Social</h1>
          <ul className=''>
            <li>
              <a
                className='block p-2'
                href='//www.linkedin.com/in/manumorante/'
                target='blank'>
                Linkedin
              </a>
            </li>
            <li>
              <a
                className='block p-2'
                href='//www.github.com/manumorante/'
                target='blank'>
                Github
              </a>
            </li>
            <li>
              <a
                className='block p-2'
                href='//www.codepen.io/manumorante/'
                target='blank'>
                Codepen
              </a>
            </li>
            <li>
              <a
                className='block p-2'
                href='//www.instagram.com/manu.morante/'
                target='blank'>
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
