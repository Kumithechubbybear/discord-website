import Head from 'next/head';

import Nav from '../components/nav'
import Info from '../components/info'


export default function Home() {
    return (
      <div >
        <Head>
          <title>Kumi discord server | info</title>
            <meta name="description" content="Kumi discord server website" />
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
  
        <Nav />

        <Info />
      </div>
    );
  }