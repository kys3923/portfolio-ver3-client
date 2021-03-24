import Head from 'next/head'
import { API_URL } from '../../utils/urls'



export default function LabPage({ post }) {
  return (
    <div>
      <Head>
        <title>YK | Lab</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/2862dff1da.js" crossorigin="anonymous"></script>
      </ Head>
      <h3>{post.Title}</h3>
    </div>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.Slug }
  }))

  return {
    paths,
    fallback: false,
  }
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`${API_URL}/posts?Slug=${slug}`)
  const data = await res.json()
  const post = data[0];

  return {
    props: { post }
  }
}