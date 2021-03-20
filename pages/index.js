import Head from 'next/head'

// importing pages
import Welcome from '../components/landing/welcome'
import Statement from '../components/landing/statement'
import About from '../components/landing/about'

export default function Home({ desWorks, devWorks }) {

  return (
    <div>
      <Head>
        <title>YK | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </ Head>
      <Welcome />
      <Statement />
      <h3>Recent Dev works</h3>
      {devWorks &&
        devWorks.map((devWork) => (
          <div key={devWork.id}>
            <h3>{devWork.name}</h3>
            {/* TODO: add card to display */}
          </div>
        ))
      }
      <h3>Recent Design works</h3>
      {desWorks &&
        desWorks.map((desWork) => (
          <div key={desWork.id}>
            <h3>{desWork.name}</h3>
            {/* TODO: add card to display */}
          </div>
        ))
      }
      <About />
    </div>
  )
}


export async function getStaticProps() {

  // get posts from the api
  const resDesign = await fetch('http://localhost:1337/design-works');
  const resDev = await fetch('http://localhost:1337/dev-works');
  const desWorks = await resDesign.json();
  const devWorks = await resDev.json();

  return {
    props: { desWorks, devWorks },
  };

}