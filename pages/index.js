import Head from 'next/head'
import Link from 'next/link'
import { API_URL } from '../utils/urls'


// importing pages
import Welcome from '../components/landing/welcome'
import Statement from '../components/landing/statement'
import About from '../components/landing/about'

export default function Home({ desWorks, devWorks }) {

  return (
    <div>
      <Head>
        <title>YK | Portfolio</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>
      <Welcome />
      <Statement />
      <div className="title-devworks">
        <h3>Dev works</h3>
      </div>
      {devWorks &&
        devWorks.map((devWork) => (
          <div key={devWork.id} className="devWorks-container">
            <div className="devWorks-card">
              <div className="devWorks-card-image">
                <Link href={`/dev/${devWork.name}`}><a><img src={devWork.bgImg[0].image} /></a></ Link>
              </div>
              <div className="devWorks-text">
                <Link href={`/dev/${devWork.name}`}><a><h3>{devWork.name}</h3></a></Link>
                <p>{devWork.tech.map((type) => (
                  <span className="devWorks-text-tech" key={type.id}>{type.tech}</span>
                ))}
                </p>
              </div>
              {/* TODO: add card to display */}
            </div>
          </div>
        ))
      }
      <div className="title-devworks">
        <h3>Design works</h3>
      </div>
      {desWorks &&
        desWorks.map((desWork) => (
          <div key={desWork.id} className="devWorks-container">
            <div className="devWorks-card">
              <div className="devWorks-card-image">
                <Link href={`/design/${desWork.name}`}><a><img src={desWork.bgImg[0].image} /></a></Link>
              </div>
              <div className="devWorks-text">
                <Link href={`/design/${desWork.name}`}><a><h3>{desWork.name}</h3></a></Link>
                <p>{desWork.tech.map((type) => (
                  <span className="devWorks-text-tech" key={type.id}>{type.tech}</span>
                ))}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export async function getStaticProps() {

  // get posts from the api
  const resDesign = await fetch(`${API_URL}/design-works`);
  const resDev = await fetch(`${API_URL}/dev-works`);
  const desWorks = await resDesign.json();
  const devWorks = await resDev.json();

  return {
    props: { desWorks, devWorks },
  };

}