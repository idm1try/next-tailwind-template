import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = () => {
  const router = useRouter()

  return (
    <Head>
      <meta name='msapplication-TileColor' content='#171717' />
      <meta name='theme-color' content='#171717' />
      <meta name='description' content='Next.js + TailwindCSS template' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Next.js + TailwindCSS template' />
      <meta
        property='og:description'
        content='Next.js + TailwindCSS template'
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Next.js + TailwindCSS template' />
      <meta name='darkreader-lock' />
      <title>Next.js + TailwindCSS template</title>
    </Head>
  )
}

export default Meta
