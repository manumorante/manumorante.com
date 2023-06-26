'use client'

import cx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ToggleDarkButton } from 'components'

export default function Header() {
  const [avatarAn, setAvatarAn] = useState(false)
  const [helloAn, setHelloAn] = useState(false)

  const mainCx = cx('Header w-full h-[60vh] max-w-3xl mx-auto overflow-hidden')
  const avatarCx = cx('Avatar block w-24 h-24 mm:w-32 mm:h-32 ml-6 mt-8 sm:ml-8')
  const avatarImageCx = cx('AvatarImage w-24 h-24 mm:w-32 mm:h-32 rounded-full')
  const avatarHiddenAn = { opacity: 0, y: -120 }
  const avatarVisibleAn = { opacity: 1, y: 0 }

  const helloCx = cx(
    'Hello',
    'p-7 sm:p-9',
    'mm:w-2/3 md:w-1/2',
    'text-2xl font-extralight text-slate-400 md:leading-relaxed'
  )
  const strongCx = 'whitespace-nowrap font-light text-slate-500 dark:text-slate-300'
  const helloHiddenAn = { opacity: 0, y: -40 }
  const helloVisibleAn = { opacity: 1, y: 0 }

  return (
    <div className={mainCx}>
      <motion.div
        className={avatarCx}
        initial={avatarHiddenAn}
        animate={avatarAn ? avatarVisibleAn : avatarHiddenAn}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}>
        <Image
          className={avatarImageCx}
          src='https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'
          width={128}
          height={128}
          loading='eager'
          alt='Manu Morante'
          onLoadingComplete={() => {
            setAvatarAn(true)
            setTimeout(() => setHelloAn(true), 300)
          }}
        />
      </motion.div>

      <motion.h1
        initial={helloHiddenAn}
        animate={helloAn ? helloVisibleAn : helloHiddenAn}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
        //
        className={helloCx}>
        <span className='block'>¡Hola!,</span> soy{' '}
        <strong className={strongCx}>Manu Morante</strong>, programador{' '}
        <strong className={strongCx}>frontend</strong>.
      </motion.h1>

      <ToggleDarkButton />
    </div>
  )
}
