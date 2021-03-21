export default function DevWork({ work }) {
  return (
    <div>
      <h3>{work.name}</h3>
      <p>{work.task}</p>
    </div>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/design-works');
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

  const res = await fetch(`http://localhost:1337/design-works?name=${name}`)
  const data = await res.json()

  const work = data[0];

  return {
    props: { work }
  }
}