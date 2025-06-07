import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
