import Head from 'next/head'
import Link from 'next/link'
import { API_URL } from '../utils/urls'

// importing material UI
import { makeStyles } from '@material-ui/core/styles'
import { 
  Grid,
  Paper,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8vh',
    flexGrow: 1,
  },
  title: {
    padding: '9em',
  },
  titleText: {
    fontSize: '10vw',
    letterSpacing: '-0.5vw',
  },

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
          <Grid item xs={12}>
            <Paper className={classes.title} elevation={0}>
              <h3 className={classes.titleText}>Dev.</h3>
            </Paper>
          </Grid>
          <Grid container>
            {works &&
              works.map((work) => (
                <Grid item className={classes.card} key={work.id} xs={6} sm={3} >
                  <Paper className={classes.cardPaper}>
                    <Link href={`/dev/${work.name}`}><a><img src={work.bgImg[0].image} /></a></Link>                    
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
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