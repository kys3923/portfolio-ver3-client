const Welcome = (props) => {

  return (
    <div className="welcome-container">
      <h1 id="letter-on-top" className="layer" data-speed="-2">DESIGN</h1>
      <h1 id="letter-on-middle" className="layer" data-speed="0">&</h1>
      <h1 id="letter-on-bottom" className="layer" data-speed="2">DEVELOP</h1>
    </div>
  );
}
export default Welcome;