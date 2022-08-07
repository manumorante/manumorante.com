import React from 'react'
import Script from 'next/script'
import UserCard from '../components/user/Card'
import SocialList from '../components/social/List'
import Projects from '../components/projects/List'

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[320px_auto] items-start'>
      <div className='p-10 bg-white h-full'>
        <UserCard />
        <SocialList />
      </div>

      <Projects />
    </div>
  )
}
