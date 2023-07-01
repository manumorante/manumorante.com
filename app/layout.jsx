import { meta } from 'config'
import 'styles/globals.css'
import Image from 'next/image'
import { Header } from 'components'
import { Social } from 'components'

export default function RootLayout({ children }) {
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
        
        <Header />
        {children}
        <Image
          className='Avatar block w-24 h-24 ml-8 sm:ml-auto sm:mr-auto mt-20 mb-10 sm:mb-20 rounded-full '
          src='https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e?s=256'
          width={128}
          height={128}
          loading='eager'
          alt='Manu Morante'
        />
        <Social />
        <footer className='Footer w-full py-20 text-center font-medium opacity-50'>
          © 2023 Manu Morante
        </footer>
      </body>
    </html>
  )
}
