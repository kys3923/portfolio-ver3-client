import Head from 'next/head'
import Link from 'next/link'

export default function DesignWorks( { works }) {

  return (
    <div>
      <Head>
        <title>YK | Design</title>
        <link rel="icon" href="/favicon.ico" />
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
  const res = await fetch('http://localhost:1337/design-works');
  const works = await res.json();

  return {
    props: { works },
  };

}