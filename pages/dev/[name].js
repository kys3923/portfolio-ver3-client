import Head from 'next/head'
import { API_URL } from '../../utils/urls'
import { FormattedDate, IntlProvider } from 'react-intl'

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
} from '@material-ui/core'

import { motion } from 'framer-motion'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4vh',
    flexGrow: 1,
    padding: '3em',
    backgroundColor: 'rgb(246, 243, 240)'
  },
  title: {
    padding: '6em',
    paddingLeft: '4em',
    backgroundColor: 'rgb(246, 243, 240)'

  },
  titleText: {
    fontSize: '10vw',
    letterSpacing: '-0.5vw',
  },
  imageCard: {
    width: '100%',
    marginBottom: '3vh',
    margin: 'auto'
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  desCard: {
    backgroundColor: 'rgb(246, 243, 240)',
    paddingLeft: '2em',
    paddingRight: '3em',
  },
  skill: {
    backgroundColor: 'white',
    display: 'inline-block',
    padding: '5px',
    marginRight: '5px',
    marginBottom: '5px',
    borderRadius: '10px'
  }
}))

export default function DevWork({ work }) {

  const classes = useStyles()

  let newYear = (
    <IntlProvider locale='en' defaultLocale="en">
        <FormattedDate value={work.created_at} month='2-digit' year='numeric' />
    </IntlProvider>
  )

  return (
    <div>
      <Head>
        <title>YK | Dev</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>
      <div className={classes.root}>
        <Grid container>
          <motion.div
            key="designPageDetailJS"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
          >
            <Grid item xs={12}>
              <Paper className={classes.title} elevation={0}>
                <h3 className={classes.titleText}>{work.name}</h3>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={10} className={classes.cardContainer}>
              {work.images.map((image) => (
                <Paper key={image.id} className={classes.imageCard}>
                  <img src={image.image} className={classes.image} />
                </Paper>
              ))}
            </Grid>
            <Grid item xs={12} sm={10}>
              <Paper className={classes.desCard} elevation={0}>
                <h1>{work.name}</h1>
                <h4>{work.type}</h4>
                <h5>{newYear}</h5>
                <p>
                  {work.tech.map((skill) => (
                    <span key={skill.id} className={classes.skill}>{skill.tech}</span>
                  ))}
                </p>
                <p>{work.task}</p>
                <p>{work.solution}</p>
                <p className="work_link"><a href={work.link} target="_blank" className="work-link">Live View</a></p>
              </Paper>
            </Grid>
          </motion.div>
        </Grid>
      </div>
    </div>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/dev-works`);
  const works = await res.json();

  const paths = works.map((work) => ({
    params: { name: work.name }
  }))

  return {
    paths,
    fallback: false,
  }
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {


  const { name } = params;

  const res = await fetch(`${API_URL}/dev-works?name=${name}`)
  const data = await res.json()

  const work = data[0];

  return {
    props: { work }
  }
}