import emailjs from 'emailjs-com'
import Head from 'next/head'
import { useState } from 'react'

import { 
  TextField,
  Grid,
  Paper,
  Button,
  FormLabel
} from '@material-ui/core'

import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import { SettingsSystemDaydreamOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4vh',
    flexGrow: 1,
    padding: '3em'
  },
  title: {
    padding: '6em',
    paddingLeft: '4em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleText: {
    fontSize: '10vw',
    display: 'block',
    letterSpacing: '-0.5vw',
  },
  form: {
    width: '100%',
    display: 'block'
  },
  formEntry: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    marginTop: '1em',
    borderRadius: '10px',
  },
  inputLabel: {
    fontSize: '0.75em'
  },
  inputField1: {
    padding: '1em',
    marginBottom: '1em',
    borderRadius: '10px',
    border: '1px solid grey'
  },
  inputField2: {
    overflow: 'hidden',
    padding: '1em',
    resize: 'none',
    fontFamily: ['roboto', 'san-serif'],
    marginBottom: '1em',
    borderRadius: '10px',
    border: '1px solid grey'
  }
}))

const Contact = (props) => {

  const[email, setEmail] = useState('')
  const[name, setName] = useState('')
  const[message, setMessage] = useState('')

  const classes = useStyles()

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_yagd3un', 'template_g93o2eq', e.target, 'user_2tUoSJl6XCCwLYHLE5W5X')
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    })
    e.target.reset()
  }

  return (
    <div>
      <Head>
      <title>YK | Contact</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />        
      </Head>

      <div className={classes.root}>
        <Grid container>
          <motion.div
            key="contactJS"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
          >
            <Grid item xs={12}>
              <Paper className={classes.title}  elevation={0}>
                <h3 className={classes.titleText}>Contact.</h3>
                <form className={classes.form} onSubmit={sendEmail} noValidate>
                  <FormLabel className={classes.formTitle}>
                    <h1>Let's Talk.</h1>
                    <p>New projects, freelance inquiry or even a cup of coffee.</p>
                  </FormLabel>
                  <div className={classes.formEntry}>
                    <label className={classes.inputLabel}>Name</label>
                    <input className={classes.inputField1} type="text" name="name" placeholder="Your Name"/>
                    <label className={classes.inputLabel}>Email</label>
                    <input className={classes.inputField1} type="email" name="email" placeholder="Your Email" />
                    <label className={classes.inputLabel}>Subject</label>
                    <input className={classes.inputField1} type="text" name="subject" placeholder="Email Title"/>
                    <label className={classes.inputLabel}>Message</label>
                    <textarea className={classes.inputField2} name="message" rows="10" placeholder="Write me something"/>
                  </div>
                  <Button className={classes.button} variant="contained" type="submit">
                    <motion.div
                      whileHover={{ scale: 1.17 }}
                      whileTap={{ scale: 1 }}
                    >
                      Contact
                    </motion.div>
                  </Button>
                </form>                
              </Paper>
            </Grid>
          </motion.div>
        </Grid>
      </div>
    </div>
  );
}
export default Contact;