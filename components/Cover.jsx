'use client'

import cx from 'clsx'
import Image from 'next/image'

export default function Cover({ alt = 'Project', image, imageDark }) {
  if (!image) return null

  const baseCx = cx('Cover relative z-10 object-center overflow-hidden')
  const lightCx = cx(baseCx, { 'block dark:hidden': imageDark })
  const darkCx = cx(baseCx, 'hidden dark:block')

  return (
    <>
      <Image className={lightCx} src={image} width={1200} height={628} alt={alt} />
      {imageDark && (
        <Image className={darkCx} src={imageDark} width={1200} height={628} alt={alt} />
      )}
    </>
  )
}
