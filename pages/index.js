import Head from 'next/head'
import Link from 'next/link'
import { API_URL } from '../utils/urls'
import cx from 'clsx'

// importing material UI & framer motion
import { motion, AnimatePresence } from 'framer-motion'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { 
  Grid,
  CardContent,
  Card,
  CardMedia,
} from '@material-ui/core'
import {
  useBlogTextInfoContentStyles
} from '@mui-treasury/styles/textInfoContent/blog'
import {
  useOverShadowStyles
} from '@mui-treasury/styles/shadow/over'
import TextInfoContent from '@mui-treasury/components/content/textInfo'


// importing pages
import Welcome from '../components/landing/welcome'
import Statement from '../components/landing/statement'
import Skills from '../components/landing/skills'


// Material UI styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: 'rgb(246, 243, 240)',
  },

}))

const useStyles2 = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    width: "70vw",
    marginLeft: 'auto',
    marginBottom: "5vh",
    overflow: 'initial',
    background: 'rgb(246, 243, 240)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '80%',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}))

export default function Home({ desWorks, devWorks }) {
  
  const classes = useStyles()
  const styles = useStyles2()

  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles()

  const shadowStyles = useOverShadowStyles()

  return (
    <div className={classes.root}>
      <Head>
        <title>YK | Portfolio</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </ Head>
      <AnimatePresence>
        <Grid container>
          <Welcome />
          <Statement />
          <Skills />
          <div className="skills">
            <h3>Dev</h3>
          </div>
          <Grid item xs={12} style={{ margin: 0 }}>
            <div className="cards">
              {devWorks &&
                devWorks.map((devWork) => (
                  <Link  key={devWork.id} href={`/dev/${devWork.name}`}>
                    <a>
                      <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                          className={styles.media}
                          image={devWork.bgImg[0].image}
                        />
                        <CardContent>
                          <TextInfoContent
                            classes={contentStyles}
                            heading={devWork.name}
                            body={devWork.type}
                          />
                        </CardContent>
                      </Card>
                    </a>
                  </Link>
                ))
              } 
            </div>
          </Grid>
          <div className="skills">
            <h3>Design</h3>
          </div>
          <Grid item xs={12}>
            <div className="cards">
              {desWorks &&
                desWorks.map((desWork) => (
                  <Link key={desWork.id} href={`/design/${desWork.name}`}>
                    <a>
                      <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                          className={styles.media}
                          image={desWork.bgImg[0].image}
                        />
                        <CardContent>
                          <TextInfoContent
                            classes={contentStyles}
                            heading={desWork.name}
                            body={desWork.type}
                          />
                        </CardContent>
                      </Card>
                    </a>
                  </Link>
                ))
              }
            </div> 
          </Grid>
        </Grid>
      </AnimatePresence>
    </div>
  )
}


export async function getStaticProps() {

  // get posts from the api
  const resDesign = await fetch(`${API_URL}/design-works`);
  const resDev = await fetch(`${API_URL}/dev-works`);
  const desWorks = await resDesign.json();
  const devWorks = await resDev.json();

  return {
    props: { desWorks, devWorks },
  };

}

{/* <motion.div
exit={{ opacity: 0 }}
animate={{ opacity: 1 }}
initial={{ opacity: 0 }}
transition={{ duration: 1 }}
> */}