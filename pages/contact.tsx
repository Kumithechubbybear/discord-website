import Head from 'next/head';
//import Link from "next/link";


import Nav from '../components/nav'
import First from '../components/contactpage'
//import Rules from '../components/rules'
import Contact from '../components/contact'
import Footer from '../components/footer'


export default function Home() {
    return (
      <div className="container">
        <Head>
          <title>Kumi discord server | contact</title>
            <meta name="description" content="Kumi discord server website" />
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
  
        <Nav />

        <First />



        <br /><br /><hr /><br />

        <Contact />

        <Footer />
      </div>
    );
  }