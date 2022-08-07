import React from 'react'
import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='GUAJARAMA FEST' />
      <meta property='og:site_name' content='Guajarama Music Festival en los Guajares' />
      <meta property='og:url' content='https://guajarama.com' />
      <meta
        property='og:description'
        content='Guajarama es el festival mas divertido, gamberro y a la vez cercano!'
      />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/OG.png' />
    </Head>
  )
}

export default Meta
