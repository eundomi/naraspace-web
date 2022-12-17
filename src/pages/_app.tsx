import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/image/icon.ico" />
        <title>NARA SPACE</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
