'use client'

import { meta } from 'config'
import 'styles/globals.css'
import cx from 'clsx'
import { motion } from 'framer-motion'
import { Social, ToggleDarkButton } from 'components'
import Image from 'next/image'
import { useState } from 'react'

export default function RootLayout({ children }) {
  const [avatarAn, setAvatarAn] = useState(false)
  const [helloAn, setHelloAn] = useState(false)

  const mainCx = cx(
    'Main',
    'relative z-20',
    'max-w-3xl mx-auto',
    'bg-white dark:bg-slate-700',
    'shadow/75'
  )

  const avatarCx = cx('Avatar block w-32 h-32 ml-6 mt-8 sm:ml-8')
  const avatarImageCx = cx('AvatarImage', 'w-32 h-32', 'rounded-full')

  const avatarHiddenAn = { opacity: 0, y: -120 }
  const avatarVisibleAn = { opacity: 1, y: 0 }

  const helloCx = cx(
    'Hello',
    // 'sm:sticky top-0 -z-10',
    'p-7 sm:p-9 mb-4',
    'w-2/3 md:w-1/2',
    'text-2xl font-extralight text-slate-400 md:leading-relaxed'
  )
  const strongCx = 'whitespace-nowrap font-light text-slate-500 dark:text-slate-300'
  const helloHiddenAn = { opacity: 0, y: -40 }
  const helloVisibleAn = { opacity: 1, y: 0 }

  const socialCx = cx(
    'Social',
    'sticky bottom-0 w-full z-10',
    'md:relative',
    'h-40 flex items-center',
    'bg-slate-50',
    'shadow/75'
  )

  const footerTextCx = cx(
    'FooterText',
    'sticky bottom-0 w-full z-0',
    'md:relative',
    'py-10 text-center',
    'text-slate-300 font-medium dark:text-slate-500',
    'bg-slate-100'
  )

  const toggleDarkCx = cx('fixed top-0 right-0 z-40', 'm-7')

  return (
    <html lang={meta.lang}>
      <head>
        <title>Manu Morante</title>
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.url + meta.image} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <link rel='icon' href={meta.url + '/favicon.ico'} />

       
      </head>

      <body>
        <main className={mainCx}>
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
            <strong className={strongCx}>frontend</strong> en{' '}
            <strong className={strongCx}>Domestika</strong>.
          </motion.h1>

          {children}

          <ToggleDarkButton className={toggleDarkCx} />
        </main>

        <Social className={socialCx} />

        <div className={footerTextCx}>© 2023 Manu Morante</div>
      </body>
    </html>
  )
}
