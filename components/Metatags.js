import Head from 'next/head'

export default function Metatags({
  title = 'My POC to Learn Next JS and Firebase',
  description = 'Personal Project to Learn Web3 Next.js + Firebase',
   image = 'https://firebasestorage.googleapis.com/v0/b/nextfire-1fc9e.appspot.com/o/uploads%2FUchdV35jMlRAFhtfwajpWSzAhxk1%2F1669476656950.png?alt=media&token=2bea8ef3-9a76-4df8-85bb-25a7af282086',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@WillyWeb3x0" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  )
}
