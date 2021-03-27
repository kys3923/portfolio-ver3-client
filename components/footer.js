import DescriptionIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { motion } from 'framer-motion'

const Footer = (props) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="footer-container">
        <div className="footer-YK">
          <h3>YK | Portfolio</h3>
        </div>
        <div className="footer-lists">
          <ul>
            <li><a href="https://drive.google.com/file/d/1ludrrUAsFFopnH-OxWjIMLWrGdu_Vb29/view?usp=sharing" target="_blank"> <DescriptionIcon style={{ fontSize: '1.25em'}}/> &nbsp; <span id="Lheit-adj"> View Resume</span></a></li>
            <li><a href="https://www.linkedin.com/in/youngsang-kim/" target="_blank"><LinkedInIcon style={{ fontSize: '1.25em'}}/> &nbsp; <span id="Lheit-adj">LinkedIn</span></a></li>
            <li><a href="https://github.com/kys3923" target="_blank"><GitHubIcon style={{ fontSize: '1.25em'}}/> &nbsp; <span id="Lheit-adj">Github</span></a></li>
          </ul>
        </div>
        <div className="footer-copy">
          <p>Made with ❤️,  ☕,  🍣, and  🎸&nbsp;<span id="copyright">©</span> designykim.com, YK, 2021</p>
        </div>
      </div>
    </motion.div>
  );
}
export default Footer;