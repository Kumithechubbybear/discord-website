import Link from "next/link";



export default function Contact() {
  return (
        <div className="container">
        <h1>Contact us</h1>
            <div className="grid">
                <h3>Contact us on discord</h3>
                <p>
                    Join our discord  
                    <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank"> Click here!</a></Link>
                </p>
            </div>
            <div className="grid">
                <h3>Contact us on email</h3>
                <p>
                <Link href="mailto:kumithechubbybearwebsite@gmail.com"><a target="_blank">kumithechubbybearwebsite@gmail.com</a></Link>
                </p>
            </div>
            <div className="grid">
                <h3>Contact us on google form</h3>
                <p>
                <Link href="https://bit.ly/2YffIzt"><a target="_blank">Click here!</a></Link>
                </p>
            </div>
            <h6>Notice : We will answer you as soon as possible</h6>
        </div>
  );
}