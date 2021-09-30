import Image from 'next/image';
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="container">
            <hr />
            <small>2021 ©️ Kumi discord server | <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank">Click here to join server</a></Link></small>
            <br /><br />
        </footer>
    );
  }