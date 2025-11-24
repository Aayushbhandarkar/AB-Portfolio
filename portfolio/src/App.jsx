import React, { useEffect, useState, useRef } from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'

function App() {

  const homeRef = useRef(null);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setShowNav(entries[0].isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (homeRef.current) observer.observe(homeRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <>
      {/* Navbar only shows on HOME */}
      {showNav && <Nav />}

      <div id="home" ref={homeRef}>
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default App
