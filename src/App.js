import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nav';
import MyParticles from './components/particles';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Resume from './components/skills';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';
import { inView, animate } from "motion";
import React,{useEffect} from 'react';

function App() {
  useEffect(() => {
    inView("section", ({ target }) => {
      animate(
        target.querySelector("div"),
        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  });
  
  return (
    <>
    <MyParticles/>
    <Navigation/>
    <section>
      <div id='home'>
      <Home/>
    </div>
    </section>
    <section>
<div id='about'>
      <About/>
    </div>
    </section>
    <section>
      <div id='resume'>
      <Resume/>
      </div>
    </section>
    <section>
      <div id='work'>
      <Work/>
    </div>
    </section>
    <section>
       <div id='contact'>
      <Contact/>
    </div>
    </section>
     <Footer/>
    </>
  );
}

export default App;