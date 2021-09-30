import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
    <nav className="container-fluid">
    <ul>
      <li><a href="/" className="contrast"><strong>Kumi discord sever</strong></a></li>
    </ul>
    <ul>
      <li><a href="#" className="contrast" >Home</a></li>
      <li><a href="#" className="contrast" >Server info</a></li>
      <li><a href="#" className="contrast" >Contact us</a></li>
    </ul>
  </nav>
  );
}