import Link from 'next/link'

const Header = (props) => {

  function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });  
  }
    
  function closeSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.addEventListener("click", (event) => {

      nav.classList.toggle("nav-active")
      
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
    })

  }
  

  return (
    <nav className="header-nav">
      <div className="logo">
      <Link href="/"><a><img id="header-logo" src="/img/logo.png" /></a></Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/devworks" ><a onClick={closeSlide}>DEV</a></Link></li>
        <li><Link href="/designworks" ><a onClick={closeSlide}>DESIGN</a></Link></li>
        <li><Link href="/lab" ><a onClick={closeSlide}>LAB</a></Link></li>
        <li><Link href="/contact" ><a onClick={closeSlide}>CONTACT</a></Link></li>
      </ul>
      <div className="burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default Header;