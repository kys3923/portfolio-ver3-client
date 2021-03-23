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
      </ Head>

      <main>
        {/* getting the posts */}
        {works &&
          works.map((work) => (
            <div key={work.id}>
              <h2><Link href={`/design/${work.name}`}><a>{work.name}</a></Link></h2>
            </div>
          ))
        }
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