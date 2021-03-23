import Head from 'next/head'
import Link from 'next/link'

export default function Lab({ posts }) {

  return (
    <div>
      <Head>
        <title>YK | Lab</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/2862dff1da.js" crossorigin="anonymous"></script>
      </ Head>

      <main className="dev-page-container">
        <div className="placeholder">

        </div>
        {/* getting the posts */}
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
  const res = await fetch('https://enigmatic-journey-17277.herokuapp.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };

}