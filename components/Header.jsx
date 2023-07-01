import cx from 'clsx'
import Image from 'next/image'

export default function Header() {
  const mainCx = cx('Header relative w-full min-h-screen overflow-hidden')
  const containerCx = cx('max-w-3xl mx-4 mm:mx-6 sm:mx-auto pt-[20vh]')
  const hiCx = cx('Hi w-72 sm:w-96 text-8xl font-black leading-none')

  return (
    <div className={mainCx}>
      <div className={containerCx}>
        <div className={hiCx}>
          <span className='text-neutral-500'>Hi,</span> <span>you are great</span>{' '}
          <span className='text-neutral-500'>for being here.</span>
        </div>

        <div className='w-72 sm:w-96 my-[30vh] text-6xl font-extralight'>
          <div>Take a look while you are here.</div>
        </div>
      </div>

      <Image
        className={cx(
          'Background', //
          'block w-full min-w-[756px] h-[352px]',
          'absolute top-[40vh] left-0 right-0 -z-10',
          'object-center'
        )}
        src='/wave.png'
        width={1512}
        height={704}
        alt='Background'
      />
    </div>
  )
}
