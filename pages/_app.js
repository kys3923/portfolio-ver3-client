import '../styles/globals.css'
import React from 'react'
import propTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTopBtn from '../components/scrollTop'

export default function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header />
          <div className="total-container">
            <Component {...pageProps} />
          </div>
          <Footer />
          <ScrollToTopBtn />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: propTypes.elementType.isRequired,
  pageProps: propTypes.object.isRequired,
}
