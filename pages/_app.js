import React from 'react'
import App from 'next/app'
import Providers from '../components/providers'
import { GlobalStyle } from '../globalStyle'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <GlobalStyle />
        <Component {...pageProps} />
      </Providers>
    )
  }
}

export default MyApp
