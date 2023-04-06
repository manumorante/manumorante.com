import cx from 'clsx'

export default function Content({ children, className }) {
  return (
    <main className={cx('Content', 'max-w-3xl', 'sm:ml-sidebar lg:px-14', className)}>
      {children}
    </main>
  )
}
