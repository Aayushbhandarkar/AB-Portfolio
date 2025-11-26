import React, { useState, useEffect, useRef } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navBar ${scrolled ? 'scrolled' : ''}`}>
        {/* Desktop Menu - Top Right */}
        <ul className="desktopMenu">
          <Link to="home" smooth={true} duration={500} offset={-80}><li>HOME</li></Link>
          <Link to="services" smooth={true} duration={500} offset={-80}><li>SERVICES</li></Link>
          <Link to="projects" smooth={true} duration={500} offset={-80}><li>PROJECTS</li></Link>
          <Link to="about" smooth={true} duration={500} offset={-80}><li>ABOUT</li></Link>
          <Link to="contact" smooth={true} duration={500} offset={-80}><li>CONTACT</li></Link>
          <li className="resumeBtn" onClick={() => window.open("/resume.pdf", "_blank")}>RESUME</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()} ref={menuRef}>
          
          <div className="close-btn" onClick={closeMenu}>
            <div className="close-icon"><span></span><span></span></div>
          </div>

          <div className="nav-links-container">
            <ul className="mobile-menu-list">
              <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                <li><span className="menu-text">HOME</span></li>
              </Link>
              <Link to="services" smooth={true} duration={500} onClick={closeMenu}>
                <li><span className="menu-text">SERVICES</span></li>
              </Link>
              <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
                <li><span className="menu-text">PROJECTS</span></li>
              </Link>
              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                <li><span className="menu-text">ABOUT</span></li>
              </Link>
              <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
                <li><span className="menu-text">CONTACT</span></li>
              </Link>
              
              {/* RESUME LINK */}
              <li 
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                  closeMenu();
                }}
              >
                <span className="menu-text resume-text">RESUME</span>
              </li>
            </ul>
          </div>

          <div className="contact-info">
            <div className="contact-email">
              <h4>EMAIL</h4>
              <p>ayushbhandarkar7@gmail.com</p>
            </div>
            <div className="social-links">
              <h4>CONNECT</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ayush-bhandarkar-555730286/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a href="https://github.com/Aayushbhandarkar" target="_blank" rel="noopener noreferrer">GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;