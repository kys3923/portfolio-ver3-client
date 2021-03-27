import { Typography } from '@material-ui/core'
import { motion } from 'framer-motion'

const Statement = (props) => {
  
  return (
    <motion.div
      className="statement-container"
      key="statementJS"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="statement">
        <Typography variant="subtitle1">
        ❝ I use Strategy, Branding, Digital Design & Technologies to delight the audience. I am proficient in delivering visual languages and logical mapping in developments.❞
        </Typography>
      </div>
    </motion.div>
  );
}
export default Statement;