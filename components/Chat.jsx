import cx from 'clsx'
export default function Chat() {
  const mainCx = cx(
    'Chat',
    'pt-8 pb-12 px-6 lg:px-0 sm:py-10 lg:py-14',
    'md:w-2/3',
    'lg:w-1/2',
    'text-2xl font-extralight text-neutral-400 md:leading-relaxed'
  )
  const strongCx = 'whitespace-nowrap font-light text-neutral-500 dark:text-neutral-300'

  return (
    <h1 className={mainCx}>
      <span className='block'>Ey!,</span> soy un <strong className={strongCx}>Chat</strong>.
    </h1>
  )
}
