import cx from 'clsx'

import Projects from 'components/Projects'

export default function Home() {
  const mainCx = cx(
    'Main',
    'relative z-20',
    'max-w-3xl mx-auto',
    'bg-white dark:bg-slate-700',
    'shadow/75'
  )

  const projectsCx = cx('flex flex-col gap-20 pb-40')

  return (
    <>
      <main className={mainCx}>
        <Projects className={projectsCx} />
      </main>
    </>
  )
}
