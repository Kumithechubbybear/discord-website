import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
    <nav className="container-fluid">
    <ul>
      <li><a href="./" className="contrast"><strong>Kumi</strong></a></li>
    </ul>
    <ul>
      <li><a href="#" className="contrast" data-theme-switcher="auto">Auto</a></li>
      <li><a href="#" className="contrast" data-theme-switcher="light">Light</a></li>
      <li><a href="#" className="contrast" data-theme-switcher="dark">Dark</a></li>
    </ul>
  </nav>
  );
}