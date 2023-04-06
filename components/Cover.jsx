import cx from 'clsx'
import Image from 'next/image'

export default function Cover({ alt = 'Project', image, imageDark }) {
  if (!image) return null

  const mainCx = cx('Cover')
  const imgCx = cx('object-cover object-left-top')
  const lightCx = cx(imgCx, { 'block dark:hidden': imageDark })
  const darkCx = cx(imgCx, 'hidden dark:block')

  return (
    <picture className={mainCx}>
      <Image src={image} width={1200} height={628} className={lightCx} alt={alt} />
      {imageDark && (
        <Image src={imageDark} width={1200} height={628} className={darkCx} alt={alt} />
      )}
    </picture>
  )
}
