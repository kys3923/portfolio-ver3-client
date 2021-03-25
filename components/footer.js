const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-YK">
        <h3>YK | Portfolio</h3>
      </div>
      <div className="footer-lists">
        <ul>
          <li><a href="https://drive.google.com/file/d/1ludrrUAsFFopnH-OxWjIMLWrGdu_Vb29/view?usp=sharing" target="_blank"><i className="fas fa-file-alt"></i> &nbsp; View Resume</a></li>
          <li><a href="https://www.linkedin.com/in/youngsang-kim/" target="_blank"><i className="fab fa-linkedin-in"></i> &nbsp; LinkedIn</a></li>
          <li><a href="https://github.com/kys3923" target="_blank"><i className="fab fa-github"></i> &nbsp; Github</a></li>
        </ul>
      </div>
      <div className="footer-copy">
        <p>Made with ♥ & ☕️ &nbsp;<span id="copyright">©</span> designykim.com, YK, 2021</p>
      </div>
    </div>
  );
}
export default Footer;