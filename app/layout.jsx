import { meta } from 'config'
import 'styles/globals.css'
import Script from 'next/script'

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
        <link rel='icon' href='/favicon.ico' />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.dark === 'true' || (!('dark' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${meta.bgcolor.dark}')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
              `,
          }}
        />
      </head>

      <body>
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${meta.ga}', {
                  page_path: window.location.pathname,
                });
              } catch (_) {}
            `,
          }}
        />
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
        />
      </body>
    </html>
  )
}
