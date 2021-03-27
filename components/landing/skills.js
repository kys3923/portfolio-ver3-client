// importing material UI & framer motion
import { Paper, Grid, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion'


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     fontWeight: 900,    
//   },
// }))

const Skills = (props) => {


  // const classes = useStyles()

  return (
    <motion.div 
    key="skillsJS"
    className="skills"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity:0 }}
    >
      <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={12}>
          <div className="skills">
            <h3>Skills</h3>
          </div>
          {/* <Paper elevation={0} className={classes.paper}>
            <Typography variant="h3" gutterBottom>
              Skills
            </Typography>
          </Paper> */}
        </Grid>
        <Grid item>
          <div className="skills-card">
            <div className="skills-card-title">
              <h4>Languages</h4>
            </div>
            <div className="skills-card-content">
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Dart</li>
                <li>HTML5/CSS3</li>
                <li>SQL</li>
                <li>ES6</li>
                <li>Sass</li>
                <li>Material-UI</li>
                <li>Tailwindcss</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="skills-card">
            <div className="skills-card-title">
              <h4>Frameworks</h4>
            </div>
            <div className="skills-card-content">
              <ul>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Flask</li>
                <li>Flutter</li>
                <li>Strapi</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div className="skills-card">
            <div className="skills-card-title">
              <h4>Databases</h4>
            </div>
            <div className="skills-card-content">
              <ul>
                <li>PostgreSQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
              </ul>
            </div>     
          </div>
        </Grid>
        <Grid item>
          <div className="skills-card">
            <div className="skills-card-title">
            <h4>Design</h4>
            </div>
            <div className="skills-card-content">
              <ul>
                <li>Photoshop</li>
                <li>illustrator</li>
                <li>InDesign</li>
                <li>Principle</li>
                <li>Sketch</li>
                <li>Figma</li>
                <li>Premier</li>
                <li>Adobe XD</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </motion.div>

  );
}
export default Skills;
