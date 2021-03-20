import Head from 'next/head'
import Link from 'next/link'

export default function Lab({ posts }) {

  return (
    <div>
      <Head>
        <title>YK | Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </ Head>

      <main>
        {/* getting the posts */}
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h2><Link href={`/lab/${post.Slug}`}><a>{post.Title}</a></Link></h2>
              <div>author: {post.User.username}</div>
            </div>
          ))
        }
      </main>
    </div>
  )
}

export async function getStaticProps() {

  // get posts from the api
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };

}