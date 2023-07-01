import cx from 'clsx'

export default function Header() {
  const mainCx = cx(
    'Header w-72 sm:w-96 sm:h-auto  sm:aspect-square flex flex-col justify-between mb-6'
  )

  return (
    <div className={mainCx}>
      <div className='Hello mt-[20vh] text-8xl font-black'>
        <div className='opacity-70'>Hi,</div>
        <div>you are great</div>
        <div className='opacity-70'>for being here.</div>
      </div>

      <div className='mt-[30vh] text-6xl font-extralight'>
        <div>Take a look while you are here.</div>
      </div>
    </div>
  )
}
