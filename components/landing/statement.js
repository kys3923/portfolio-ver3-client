const Statement = (props) => {
  
  return (
    <section className="statement-container">
      <div className="statement">
        <p>I use Strategy, Branding, Digital Design & Technologies to reach the results. I am proficient in delivering visual languages and logical mapping in developments.</p>
      </div>
      <div className="Skills">
        <h3>Skills</h3>
        {/* skills - center */}
        <div className="skills-card">
          <p>Languages</p>
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
        <div className="skills-card">
          <p>Frameworks</p>
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
        <p>Databases</p>
        <ul>
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>MongoDB</li>
          <li>Sequelize</li>
          <li>Mongoose</li>
        </ul>
        <p>Design</p>
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
    </section>
  );
}
export default Statement;