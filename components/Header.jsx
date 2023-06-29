import cx from 'clsx'
import Image from 'next/image'
import { ToggleDarkButton } from 'components'

export default function Header() {
  const mainCx = cx('Header relative w-full h-[60vh] max-w-3xl mx-auto overflow-hidden')
  const avatarCx = cx('Avatar block w-24 h-24 mm:w-32 mm:h-32 ml-6 mt-8 sm:ml-8 rounded-full')

  const helloCx = cx(
    'Hello',
    'p-7 sm:p-9',
    'mm:w-2/3 md:w-1/2',
    'text-2xl font-extralight text-slate-400 md:leading-relaxed'
  )
  const strongCx = 'whitespace-nowrap font-light text-slate-500 dark:text-slate-300'

  return (
    <div className={mainCx}>
      <Image
        className={avatarCx}
        src='https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'
        width={128}
        height={128}
        loading='eager'
        alt='Manu Morante'
      />

      <h1 className={helloCx}>
        <span className='block'>¡Hola!,</span> soy{' '}
        <strong className={strongCx}>Manu Morante</strong>, programador{' '}
        <strong className={strongCx}>frontend</strong>.
      </h1>

      <ToggleDarkButton />
    </div>
  )
}
