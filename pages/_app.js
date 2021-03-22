import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'


import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <Footer />
    </div>
  )
}

export default MyApp
