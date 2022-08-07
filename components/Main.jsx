import React from 'react'
import UserCard from './user/Card'
import cx from 'classnames'
export default function Main() {
  return (
    <div
      className={cx(
        '[Main] h-[420px] manu:h-[580px] max-h-screen',
        'flex flex-col justify-between px-10 pt-10',
        'bg-white dark:bg-neutral-900 bg-[url("/waves.svg")] dark:bg-[url("/dark-waves.svg")] bg-[length:100%] bg-bottom bg-no-repeat'
      )}>
      <UserCard />
    </div>
  )
}
