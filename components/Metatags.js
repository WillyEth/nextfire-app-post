import Head from 'next/head'

export default function Metatags({
  title = 'My POC to Learn Next JS and Firebase',
  description = 'A complete Next.js + Firebase course by Fireship.io',
  image = 'https://firebasestorage.googleapis.com/v0/b/nextfire-1fc9e.appspot.com/o/uploads%2FUchdV35jMlRAFhtfwajpWSzAhxk1%2F1669475526358.png?alt=media&token=82acab2e-e1c9-44a7-82c4-6f9472942b31',
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
