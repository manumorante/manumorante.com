import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const colors = ['#262626']
  const htmlStyles = {
    // background: `linear-gradient(314deg, ${colors[0]}, transparent)`,
    // background: colors[0],
  }

  return (
    <Html style={htmlStyles}>
      <Head>
        <Script id='theme-dark' strategy='afterInteractive'>
          {`try {
              if (localStorage.dark === 'true' || (!('dark' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#262626')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
