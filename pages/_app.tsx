import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Navbar from '@/components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ChakraProvider>
    <Head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
  </Head>
  <Navbar />
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
