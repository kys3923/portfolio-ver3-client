import Head from 'next/head'
import Link from 'next/link'
import { API_URL } from '../utils/urls'

export default function Lab({ posts }) {

  return (
    <div>
      <Head>
        <title>YK | Lab</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>

      <main className="dev-page-container">
        <div className="placeholder">

        </div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h2><Link href={`/lab/${post.Slug}`}><a>{post.Title}</a></Link></h2>
              <h3>author: {post.user.username}</h3>
            </div>
          ))
        }
      </main>
    </div>
  )
}

export async function getStaticProps() {

  // get posts from the api
  const res = await fetch(`${API_URL}/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };

}