import { Layout } from '@/components'
import Head from 'next/head'
import React from 'react';

const App = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
            <title>Sample app</title>
            <meta name="description" content="description content" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href='/favicon.ico' />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default App