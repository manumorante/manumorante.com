import React from 'react'
import UserCard from './user/Card'
import SocialList from './social/List'
import cx from 'classnames'

export default function Main() {
  return (
    <div
      className={cx(
        '[Main] h-full max-h-screen',
        'flex flex-col justify-between p-10',
        'bg-white bg-[url("/waves.svg")] bg-[length:100%] bg-bottom bg-no-repeat'
      )}>
      <UserCard />
      <SocialList />
    </div>
  )
}
