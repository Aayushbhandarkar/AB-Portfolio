import React, { useEffect, useState, useRef } from 'react'
import Nav from './components/Nav/Nav'
import OtherPagesNav from './components/Nav/OtherPagesNav'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Project from './components/Projects/Project'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  const homeRef = useRef(null);
  const [showWhiteNav, setShowWhiteNav] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setShowWhiteNav(entries[0].isIntersecting);
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
      {/* White Navbar only shows on HOME */}
      {showWhiteNav && <Nav />}
      
      {/* Circle Hamburger Navbar shows on ALL OTHER PAGES */}
      {!showWhiteNav && <OtherPagesNav />}

      <div id="home" ref={homeRef}>
        <Home />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer added here - will show on all pages */}
      <Footer />
    </>
  )
}

export default App