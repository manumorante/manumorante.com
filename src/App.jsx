import React from 'react'
import Container from './components/Container'
import Projects from './components/projects2/List'
import Social from './components/social2/List'
import Card from './components/user/Card'

export default function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[240px_auto] items-start'>
      <div className='p-10 bg-white h-full'>
        <div className='md:fixed'>
          <Card />
          <Social />
        </div>
      </div>

      <Projects />
    </div>
  )
}
