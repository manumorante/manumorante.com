import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script async src='https://www.googletagmanager.com/gtag/js?id=UA-109329806-1' />
      <Script id='gtag-base' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', 'UA-109329806-1')
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
