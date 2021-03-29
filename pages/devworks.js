import Head from 'next/head'
import Link from 'next/link'
import { API_URL } from '../utils/urls'

// importing material UI
import { makeStyles } from '@material-ui/core/styles'
import { 
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
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
  cover: {
    width: "100%%",
    height: 151,
  },
  cardGrid: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    padding: '1em',
    textAlign: 'center'
  },
  list: {
    paddingLeft: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  listItem: {
    display: 'block',
    padding: '1em 2em',
    backgroundColor: 'grey',
    borderRadius: '10px',
    fontSize: '0.25rem',
    color: 'white',
    marginRight: '1em'
  }
}))

export default function DevWorks( { works }) {

  const classes = useStyles()

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
          key="devPageJS"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          >
            <Grid item xs={12}>
              <Paper className={classes.title} elevation={0}>
                <h3 className={classes.titleText}>Dev.</h3>
              </Paper>
            </Grid>
            <Grid container spacing={3}>
              {works &&
                works.map((work) => (
                  <Grid item className={classes.cardGrid} key={work.id} xs={12} sm={6}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1}}>
                      <Link href={`/dev/${work.name}`}>
                        <a>
                          <Card className={classes.card}>
                            <CardMedia 
                              className={classes.cover}
                              image={work.bgImg[0].image}
                              title={work.name}
                            />
                            <div className={classes.details}>
                              <CardContent className={classes.content}>
                                <h2>{work.name}</h2>
                                <p>{work.type}</p>
                              </CardContent>
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </motion.div>
                  </Grid>
                ))
              }
            </Grid>
          </motion.div>
        </Grid>
      </div>
    </div>
  )
}

export async function getStaticProps() {

  // get posts from the api
  const res = await fetch(`${API_URL}/dev-works`);
  const works = await res.json();

  return {
    props: { works },
  };

}