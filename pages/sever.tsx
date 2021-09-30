import Head from 'next/head';
import Link from "next/link";


import Nav from '../components/nav'
import Info from '../components/info'
import Rules from '../components/rules'
import Question from '../components/faq'
import Footer from '../components/footer'


export default function Home() {
    return (
      <div className="container">
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

        <hr />

        <Rules />

        <br /><br /><hr /><br />

        <h2>FAQ</h2>
        <Question
            question="How do I get unban"
            answer="You can get unban by fill in ban appeal. Go to banappeal page to get form link" />


        <Footer />
      </div>
    );
  }