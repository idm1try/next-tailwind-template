import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = () => {
  const router = useRouter()

  return (
    <Head>
      <meta
        name='theme-color'
        content='#171717'
        media='(prefers-color-scheme: dark)'
      />
      <meta
        name='theme-color'
        content='#fafafa'
        media='(prefers-color-scheme: light)'
      />
      <meta name='description' content='Next.js + TailwindCSS template' />
      <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='apple-touch-icon.png'
      />
      <meta name='robots' content='follow, index' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Next.js + TailwindCSS template' />
      <meta property='og:site_name' content='Next.js + TailwindCSS template' />
      <meta
        property='og:description'
        content='Next.js + TailwindCSS template'
      />
      <meta property='og:locale' content='en_US' />
      <meta
        property='og:url'
        content={`https://template.idm1try.ru${router.asPath}`}
      />
      <link
        rel='canonical'
        href={`https://template.idm1try.ru${router.asPath}`}
      />
      <meta property='og:image' content='https://template.idm1try.ru/og.png' />
      <meta name='twitter:image' content='https://template.idm1try.ru/og.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Next.js + TailwindCSS template' />
      <meta name='twitter:site' content='@idm1try' />
      <meta name='twitter:creator' content='@idm1try' />
      <meta name='darkreader-lock' />
      <title>Next.js + TailwindCSS template</title>
    </Head>
  )
}

export default Meta
