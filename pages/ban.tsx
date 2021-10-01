import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Nav from '../components/nav'
import Welcome from '../components/Hiban'
import Ban from '../components/ban'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Kumi discord sever | Ban appeal</title>
        <meta name="description" content="Kumi discord server website" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <Welcome />

        <br /><hr /><br />

      <Ban />

      <br />

      <Footer />
      
    </div>
  )
}

export default Home
