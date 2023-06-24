'use client'

import cx from 'clsx'
import Projects from 'components/Projects'

export default function Home() {
  const projectsCx = cx('flex flex-col gap-20 pb-20')

  return (
    <>
      <Projects className={projectsCx} />
    </>
  )
}
