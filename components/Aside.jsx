import cx from 'clsx'

export default function Aside({ children }) {
  return (
    <aside
      className={cx(
        'px-8 sm:px-10 pt-10 sm:p-10',

        // Desktop fixed
        'sm:fixed sm:top-0 sm:left-0',
        'sm:w-sidebar sm:h-full',
        'sm:bg-neutral-100 sm:dark:bg-neutral-900',

        // Content in flex
        'flex flex-col gap-10 justify-between'
      )}>
      {children}
    </aside>
  )
}
