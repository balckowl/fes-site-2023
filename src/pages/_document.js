import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head> 
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
