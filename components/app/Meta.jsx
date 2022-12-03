import React from 'react'
import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='Manu Morante' />
      <meta property='og:site_name' content='Manu Morante' />
      <meta property='og:url' content='https://manumorante.com' />
      <meta
        property='og:description'
        content='Portfolio of Manu Morante, a software engineer and web developer'
      />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/og.png' />
    </Head>
  )
}

export default Meta