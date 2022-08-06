import React from 'react'
import Container from './components/Container'
import Projects from './components/Projects/List'
import Social from './components/Social/List'
import UserCard from './components/UserCard'

export default function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[240px_auto] items-start'>
      <div className='p-10 bg-white h-full'>
        <div className='md:fixed'>
          <UserCard />
          <Social />
        </div>
      </div>

      <Projects />
    </div>
  )
}
