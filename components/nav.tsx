import Link from "next/link";


export default function Nav() {
  return (
    <nav className="container-fluid">
    <ul>
      <li className="contrast"><Link href='/'><a><strong>Kumi discord sever</strong></a></Link></li>
    </ul>
    <ul>
      <li className="contrast"><Link href='/'><a>Home</a></Link></li>
      <li className="contrast"><Link href='/sever'><a>Server info</a></Link></li>
      <li className="contrast"><Link href='/contact'><a>Contact us</a></Link></li>
    </ul>
  </nav>
  );
}