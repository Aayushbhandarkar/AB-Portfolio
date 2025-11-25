import React, { useState, useEffect, useRef } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && menuItemsRef.current) {
      menuItemsRef.current.forEach((item, index) => {
        if (item) {
          item.style.animation = `slideInRight 0.6s ease ${index * 0.1}s both`;
        }
      });
    }
  }, [isMenuOpen]);

  const setMenuItemRef = (element, index) => {
    menuItemsRef.current[index] = element;
  };

  return (
    <>
      <nav className="navBar">
        <ul className="centerMenu">
          <Link to="home" smooth={true} duration={500} offset={-80}><li>Home</li></Link>
          <Link to="services" smooth={true} duration={500} offset={-80}><li>Services</li></Link>
          <Link to="projects" smooth={true} duration={500} offset={-80}><li>Projects</li></Link>
          <Link to="about" smooth={true} duration={500} offset={-80}><li>About</li></Link>
          <Link to="contact" smooth={true} duration={500} offset={-80}><li>Contact</li></Link>
          <li className="resumeBtn" onClick={() => window.open("/resume.pdf", "_blank")}>Resume</li>
        </ul>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()} ref={menuRef}>
          
          <div className="menu-bg-elements">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
          </div>

          <div className="close-btn" onClick={closeMenu}>
            <div className="close-icon"><span></span><span></span></div>
          </div>

          <div className="nav-links-container">
            <ul className="mobile-menu-list">
              <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 0)}><span className="menu-text">Home</span></li>
              </Link>
              <Link to="services" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 1)}><span className="menu-text">Services</span></li>
              </Link>
              <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 2)}><span className="menu-text">Projects</span></li>
              </Link>
              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 3)}><span className="menu-text">About</span></li>
              </Link>
              <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 4)}><span className="menu-text">Contact</span></li>
              </Link>
              
              {/* RESUME AS REGULAR NAV LINK - SAME STYLE */}
              <li 
                ref={(el) => setMenuItemRef(el, 5)}
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                  closeMenu();
                }}
              >
                <span className="menu-text resume-text">Resume</span>
              </li>
            </ul>
          </div>

          <div className="contact-info" ref={(el) => setMenuItemRef(el, 6)}>
            <div className="contact-email">
              <h4>EMAIL ADDRESS</h4>
              <p>ayushbhandarkar7@gmail.com</p>
            </div>
            <div className="social-links">
              <h4>CONNECT</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ayush-bhandarkar-555730286/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a>
                <a href="https://github.com/Aayushbhandarkar" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;