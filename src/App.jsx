import React from 'react'
import Projects from './components/projects/List'
import Social from './components/social/List'
import UserCard from './components/user/Card'

export default function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[320px_auto] items-start'>
      <div className='p-10 bg-white h-full'>
        <UserCard />
        <Social />
      </div>

      <Projects />
    </div>
  )
}
