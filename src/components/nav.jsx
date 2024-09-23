import React from "react";
import "./css/nav.css";

function Navigation() { 
  // const scrollToSection = () => {
  //   const targetSection = document.getElementById();
  //   if (targetSection) {
  //     window.scrollTo({
  //       top: targetSection.offsetTop,
  //       behavior: "smooth"
  //     });
  //   }
  // };
  return (
    <>
      <nav class="nav" >
        <div className="logo" >
        Portfolio
        </div>
        <label for="hamburger">&#9776;</label>
  			<input type="checkbox" id="hamburger"/>
	      <div class="links">
	        <a href="/" >Home</a>
          <a href="#about" >About Me</a>
          <a href="#resume">Resume</a>
          <a href="#work">Works</a>
          <a href="#contact" >Contact Me</a>
          {/* <a href="/" onClick={() => scrollToSection("home")}>Home</a>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#goals" onClick={() => scrollToSection("goals")}>Goals</a>
          <a href="#officers" onClick={() => scrollToSection("officers")}>Officers</a>
          <a href="#events" onClick={() => scrollToSection("events")}>Events</a> */}
	    </div>
      
    </nav>
    </>
  );
}

export default Navigation;
