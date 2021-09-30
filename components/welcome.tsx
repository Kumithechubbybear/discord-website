import Image from 'next/image';
import Link from "next/link";


export default function Welcome() {
    return (
        <div className="container">
            <div className="center-text">
                <br />
                <h1>Kumi discord server 🐻</h1>
                <h3>Join <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank">Kumi discord server</a></Link></h3>
                <Image src="/kumi-bear.png" alt="bear" width={250} height={250} />

            </div>
            <br />
            <section id="preview">
                <h2>Our server</h2>
                <p>We have a lot of thing you that make you want to join! <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank">CLick here to join</a></Link></p>
                <article className="grid">
                    <div>
                        <hgroup>
                            <h1>Powerful bot</h1>
                            <h2>Kumi&apos;s Utilities bot for kumi discord server have a lot of power and useful feature. You can ask any thing about server or kumi by using <kbd>{'>'}</kbd> prefix. To start use <kbd>{'>'}help</kbd></h2>
                        </hgroup>
                    </div>
                    <div>
                        <Image src="/kumiprofile.jpg" alt="kumi" width={300} height={300} />
                    </div>
                </article>
            </section>
      </div>
    );
  }