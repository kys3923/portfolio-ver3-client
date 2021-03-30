import Head from 'next/head'
import Link from 'next/link'
import { API_URL } from '../utils/urls'
import { FormattedDate, IntlProvider } from 'react-intl'


import { makeStyles } from '@material-ui/core/styles'
import { 
  Grid,
  Paper,
  Card,
  CardContent
} from '@material-ui/core'

import { motion } from 'framer-motion'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4vh',
    flexGrow: 1,
    padding: '3em'
  },
  title: {
    padding: '6em',
    paddingLeft: '4em'
  },
  titleText: {
    fontSize: '10vw',
    letterSpacing: '-0.5vw',
  },
  cardAuthor: {
    fontSize: '0.75em',
    marginBottom: '3em',
  }
}))

export default function Lab({ posts }) {

  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>YK | Lab</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>

      <div className={classes.root}>
        <Grid container>
          <motion.div
            key="LabJS"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
          >
            <Grid item xs={12}>
              <Paper className={classes.title} elevation={0}>
                <h3 className={classes.titleText}>Lab.</h3>
              </Paper>
            </Grid>
            <Grid container spacing={3}>
              {posts &&
                posts.slice(0).reverse().map((post) => {

                  let newDate = (
                    <IntlProvider locale='en' defaultLocale="en">
                      <FormattedDate value={post.published_at} month='2-digit' day='2-digit' year='numeric' />
                    </IntlProvider>
                  )

                  return (
                    <Grid item className={classes.cardGrid} key={post.id} xs={12} sm={4}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                        <Link href={`/lab/${post.Slug}`}>
                          <a>
                            <Card className={classes.card}>
                              <CardContent className={classes.details}>
                                <h2>{post.Title}</h2>
                                <p className={classes.cardAuthor}>{post.user.username}, {newDate}</p>
                                <p>{post.Slug}</p>
                              </CardContent>
                            </Card>
                          </a>
                        </Link>
                      </motion.div>
                    </Grid>
                  )
                })
              }
            </Grid>
          </motion.div>
        </Grid>
      </div>

      {/* <main className="dev-page-container">
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
      </main> */}
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