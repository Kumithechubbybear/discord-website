import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Nav from '../components/nav'
import Welcome from '../components/welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kumi discord sever</title>
        <meta name="description" content="Kumi discord server website" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Nav />

      <Welcome />
      
    </div>
  )
}

export default Home
