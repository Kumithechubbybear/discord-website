import Image from 'next/image';
import Link from "next/link";


export default function Info() {
    return (
        <div className="container">
            <div className="center-text">
                <br />
                <h1>Contact kumi discord support</h1>
                <h3>Join <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank">Kumi discord server</a></Link></h3>
                <Image src="/kumi-bear.png" alt="kumi bear" width={250} height={250} />
                <br /><br /><br />
            </div>
      </div>
    );
  }