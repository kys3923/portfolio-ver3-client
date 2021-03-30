import Head from 'next/head'
import { API_URL } from '../../utils/urls'
import { FormattedDate, IntlProvider } from 'react-intl'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper
} from '@material-ui/core'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4vh',
    padding: '5em',
    backgroundColor: 'rgb(246, 243, 240)'
  },
  titleText: {
    fontSize: '6vw',
    letterSpacing: '-0.5vw'
  },
}))

export default function LabPage({ post }) {

  const classes = useStyles()

  let newDate = (
    <IntlProvider locale="en" defaultLocale="en">
      <FormattedDate value={post.updated_at} month='2-digit' day="2-digit" year="numeric" />
    </IntlProvider>
  )

  return (
    <div>
      <Head>
        <title>YK | {post.Title}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>
      <div className={classes.root}>
        <Grid container>
          <motion.div
            key="blogJS"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
          >
            <Grid item xs={12} sm={10}>
              <h3 className={classes.titleText}>{post.Title}</h3>
              <h3 className={classes.titleSlug}>{post.Slug}</h3>
              <h5 className={classes.titleAuthor}>{post.user.username} | {newDate}</h5>
              <div className="markdown-container">
                <ReactMarkdown source={post.content} escapeHtml={false} />
              </div>
            </Grid>
          </motion.div>
        </Grid>
      </div>
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