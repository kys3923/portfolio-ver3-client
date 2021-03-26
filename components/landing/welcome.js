// importing material UI & framer motion
import { Paper, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '8vh',
    paddingTop: '15vh',
    paddingBottom: '24vh',
    paddingLeft: '20vw',
    paddingRight: '20vw',
    textAlign: 'center',
  },
  firstLine: {
    fontFamily: 'helvetica',
    fontWeight: 900,
    fontSize: "9vw"
  },
  secondLine: {
    fontFamily: 'helvetica',
    fontWeight: 900,
    color: 'black',
    fontSize: "9vw"
  },
  thirdLine: {
    fontFamily: 'helvetica',
    fontWeight: 900,
    color: 'white',
    fontSize: "9vw"
  }
}))


const Welcome = (props) => {

  const classes = useStyles()

  // framer-motion
  const x = useMotionValue(0)
  const xInput = [-100, 0, 100]
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)"
  ])
  const background = useTransform(x, xInput, [
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)",
    "rgb(3, 209, 0)"
  ])

  return (
    <Grid item xs={12}>
      <Paper elevation={0} className={classes.paper}>
        <motion.div className="motion-welcome-box1" style={{ color }}>
          <Typography className={classes.firstLine} variant="h1">
            DESIGN
          </Typography>
        </motion.div>
        <motion.div className="motion-box" style={{ x }} drag="x" dragConstraints={{ left: 0, right: 0 }}>
          <Typography className={classes.secondLine} variant="h1">
            <span id="left-arrow-welcome">←</span> & <span id="right-arrow-welcome">→</span>
          </Typography>        
        </motion.div>
        <Typography variant="caption" display="block">
          drag "&" left to right
        </Typography>
        <motion.div className="motion-welcome-box2" style={{ background }}>
          <Typography className={classes.thirdLine} variant="h1">
            DEVELOP
          </Typography>        
        </motion.div>
      </Paper>
    </Grid>
  );
}
export default Welcome;