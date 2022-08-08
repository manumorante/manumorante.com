import React from 'react'
import UserCard from './user/Card'
import cx from 'classnames'
export default function Main() {
  return (
    <div
      className={cx(
        '[Main]',
        'flex flex-col justify-between'
      )}>
      <UserCard />
    </div>
  )
}
