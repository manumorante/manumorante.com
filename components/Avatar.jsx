import cx from 'clsx'
import Image from 'next/image'

export default function Avatar() {
  const data = {
    url: 'https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256',
    width: 128,
    height: 128,
  }
  const mainCx = cx(
    'Avatar',
    'w-24 h-24',
    'lg:w-32 lg:h-32',
    'rounded-xl overflow-hidden',
    'ring-2 ring-gray-500/30'
  )

  return (
    <div className={mainCx}>
      <Image src={data.url} width={data.width} height={data.height} alt='Manu Morante' />
    </div>
  )
}
