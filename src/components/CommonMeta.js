import Head from 'next/head'

export default function CommonMeta({ title, imgUrl }) {

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${process.env.SITE_URL}${imgUrl}`} />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}