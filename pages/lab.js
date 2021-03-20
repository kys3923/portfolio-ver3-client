import Head from 'next/head'
import { useEffect } from 'react'

export default function Lab( { posts }) {

  // useEffect(() => {

  // })

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
              <h2>{post.Title}</h2>
              <div>{post.User.username}</div>
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