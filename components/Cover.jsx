import cx from 'clsx'
import Image from 'next/image'

export default function Cover({ alt = 'Project', image, imageDark }) {
  if (!image) return null

  const baseCx = cx('object-cover md:rounded-2xl')
  const lightCx = cx(baseCx, { 'block dark:hidden': imageDark })
  const darkCx = cx(baseCx, 'hidden dark:block')

  return (
    <>
      <Image src={image} width={1200} height={628} className={lightCx} alt={alt} />
      {imageDark && (
        <Image src={imageDark} width={1200} height={628} className={darkCx} alt={alt} />
      )}
    </>
  )
}
