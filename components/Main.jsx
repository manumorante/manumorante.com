import React from 'react'
import UserCard from './user/Card'
import SocialList from './social/List'

export default function Main() {
  return (
    <div className='[Main] h-full bg-white flex flex-col justify-between p-10'>
      <UserCard />
      <SocialList />
    </div>
  )
}
