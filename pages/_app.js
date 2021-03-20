import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h2>static here</h2>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
