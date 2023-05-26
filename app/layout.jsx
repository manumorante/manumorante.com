import { meta } from 'config'
import 'styles/globals.css'
import Script from 'next/script'
import cx from 'clsx'
import { Aside, Avatar, Content, Social, Footer, Container, ToggleDarkButton } from 'components'
import Link from 'next/link'

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
      </head>

      <body>
        <Aside>
          <Link href='/'>
            <Avatar />
          </Link>
          <Social className='hidden sm:flex' />
        </Aside>

        <Content>
          {/* CHILDREN */}
          {children}

          <Footer>
            <Container>
              <Social className='sm:hidden mt-12' />
            </Container>

            <div
              className={cx('mt-12 mb-12', 'border-t border-neutral-200 dark:border-neutral-700')}
            />

            <Container>
              <p className={cx('mb-12', 'text-neutral-300 dark:text-neutral-500', 'text-center')}>
                © 2023 Manu Morante
              </p>
            </Container>
          </Footer>
        </Content>

        <ToggleDarkButton />
      </body>
    </html>
  )
}
