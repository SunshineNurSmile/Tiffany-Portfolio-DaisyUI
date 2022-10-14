import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
