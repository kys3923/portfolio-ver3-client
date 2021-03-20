import Head from 'next/head'

// importing pages
import Welcome from '../components/landing/welcome'
import Statement from '../components/landing/statement'

export default function Home() {
  return (
    <div>
      <Head>
        <title>YK | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </ Head>
      <Welcome />
      <Statement />
      <h3>Recent Dev works</h3>
      <h3>Recent Design works</h3>
    </div>
  )
}
