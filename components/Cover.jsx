import cx from 'clsx'
import Image from 'next/image'

export default function Cover({ alt = 'Project', image, imageDark }) {
  if (!image) return null

  const lightCx = cx('object-cover', { 'block dark:hidden': imageDark })
  const darkCx = cx('object-cover', 'hidden dark:block')

  return (
    <>
      <Image src={image} width={1200} height={628} className={lightCx} alt={alt} />
      {imageDark && (
        <Image src={imageDark} width={1200} height={628} className={darkCx} alt={alt} />
      )}
    </>
  )
}
