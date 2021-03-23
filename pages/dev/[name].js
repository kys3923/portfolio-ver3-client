import Head from 'next/head'


export default function DevWork({ work }) {
  return (
    <div>
      <Head>
        <title>YK | Dev</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
      </ Head>
      <h3>{work.name}</h3>
      <p>{work.task}</p>
    </div>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch('https://enigmatic-journey-17277.herokuapp.com/dev-works');
  const works = await res.json();

  const paths = works.map((work) => ({
    params: { name: work.name }
  }))

  return {
    paths,
    fallback: true,
  }
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {


  const { name } = params;

  const res = await fetch(`https://enigmatic-journey-17277.herokuapp.com/dev-works?name=${name}`)
  const data = await res.json()

  const work = data[0];

  return {
    props: { work }
  }
}