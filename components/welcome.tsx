import Image from 'next/image';
import Link from "next/link";


export default function Welcome() {
    return (
        <div className="container">
            <div className="center-text">
                <br />
                <h1>Kumi discord server 🐻</h1>
                <h3>Join <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank">Kumi discord server</a></Link></h3>
                <Image src="/kumiprofile.jpg" width={250} height={250} />

            </div>
            <br />
            <section id="preview">
        <h2>Our server</h2>
        <p>We have a lot of thing you that make you want to join! <Link href="https://discord.gg/etYUej9Gzw"><a target="_blank">CLick here to join</a></Link></p>
        <article class="grid">
        <div>
          <hgroup>
            <h1>Sign in</h1>
            <h2>A minimalist layout for Login pages</h2>
          </hgroup>
          <form>
            <fieldset>
              <label for="remember">
                Remember me
              </label>
            </fieldset>
          </form>
        </div>
        <div></div>
      </article>
      </section>
      </div>
    );
  }