import Image from 'next/image';
import Link from "next/link";


export default function Hiban() {
    return (
        <div className="container">
            <div className="center-text">
                <br />
                <h2><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdl6qT9DkaPlWXSFt0jHaPhVmsxahOpOEDNyzdxR0l5CzFkjQ/viewform?usp=sf_link"><a target="_blank">Click here!</a></Link> to get form link or use form down below</h2>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdl6qT9DkaPlWXSFt0jHaPhVmsxahOpOEDNyzdxR0l5CzFkjQ/viewform?embedded=true" width="640" height="900">Loading…</iframe>
            </div>
      </div>
    );
  }