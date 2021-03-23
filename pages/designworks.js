import Head from 'next/head'
import Link from 'next/link'

export default function DesignWorks( { works }) {

  return (
    <div>
      <Head>
        <title>YK | Design</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/2862dff1da.js" crossorigin="anonymous"></script>
      </ Head>

      <main className="dev-page-container">
        <div className="dev-page-intro">
          <h3>Design.</h3>
        </div>
        <div className="dev-page-cards">
          {works &&
            works.map((work) => (
              <div key={work.id} className="dev-page-card">
                <Link href={`/design/${work.name}`}><a><img src={work.bgImg[0].image} /></a></Link>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {

  // get posts from the api
  const res = await fetch('https://enigmatic-journey-17277.herokuapp.com/design-works');
  const works = await res.json();

  return {
    props: { works },
  };

}