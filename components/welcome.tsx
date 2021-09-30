import Image from 'next/image'


export default function Welcome() {
    return (
        <div className="container">
        <article className="grid">
          <div>
            <hgroup>
              <h1>Sign in</h1>
              <h2>A minimalist layout for Login pages</h2>
            </hgroup>
            <form>
              <fieldset>
                  Remember me
              </fieldset>
              <button type="submit" className="contrast">Login</button>
            </form>
          </div>
          <div>
            <Image src="/kumiprofile.jpg" width={100} height={100} />

          </div>
        </article>
      </div>
    );
  }