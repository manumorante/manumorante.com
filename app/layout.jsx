import { meta } from 'config'
import 'styles/globals.css'

import { Header, Footer, Social } from 'components'

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
        <Social />
        <Footer />
      </body>
    </html>
  )
}
