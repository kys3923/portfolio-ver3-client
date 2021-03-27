import Head from 'next/head'
import { API_URL } from '../../utils/urls'



export default function DevWork({ work }) {
  return (
    <div>
      <Head>
        <title>YK | Dev</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>
      <div className="dev-page-container2">
        <div className="dev-page-intro">
          <h3>{work.name}.</h3>
        </div>
        <div className="dev-page-detail">
          <h3>Project Name: {work.name}</h3>
          <h5>{work.type}</h5>
          <ul>
            <p>Tech used:</p>
            {work.tech.map((skill) => (
              <span key={skill.id}>{skill.tech} &nbsp; </span>
            ))}
          </ul>
        </div>
        <div className="dev-page-image">
          {work.images.map((image) => (
            <div key={image.id} className="page-image">
              <img src={image.image} />
            </div>
          ))}
        </div>
        <div className="dev-page-detail2">
          <p>{work.task}</p>
          <p>{work.solution}</p>
        </div>
      </div>
    </div>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/design-works`);
  const works = await res.json();

  const paths = works.map((work) => ({
    params: { name: work.name }
  }))

  return {
    paths,
    fallback: false,
  }
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {


  const { name } = params;

  const res = await fetch(`${API_URL}/design-works?name=${name}`)
  const data = await res.json()

  const work = data[0];

  return {
    props: { work }
  }
}