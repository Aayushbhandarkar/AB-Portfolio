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

  // Scroll prevention
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  // Menu items animation
  useEffect(() => {
    if (isMenuOpen && menuItemsRef.current) {
      menuItemsRef.current.forEach((item, index) => {
        if (item) {
          item.style.animation = `slideInRight 0.6s ease ${index * 0.1}s both`;
        }
      });
    } else {
      menuItemsRef.current.forEach((item) => {
        if (item) {
          item.style.animation = '';
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
        {/* Desktop Menu - SAME AS BEFORE */}
        <ul className="centerMenu">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            <li>Home</li>
          </Link>

          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            <li>Services</li>
          </Link>

          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            <li>Projects</li>
          </Link>

          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            <li>About</li>
          </Link>

          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            <li>Contact</li>
          </Link>

          {/* Resume open in new tab */}
          <li
            className="resumeBtn"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </li>
        </ul>

        {/* Mobile Hamburger Menu - NORMAL HAMBURGER (NO CIRCLE) */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - OTHERNAVBAR STYLE */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()} ref={menuRef}>
          
          {/* Animated Background Elements */}
          <div className="menu-bg-elements">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
          </div>

          {/* Close Button - VISIBLE AND CLEAR */}
          <div className="close-btn" onClick={closeMenu}>
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Navigation Links - OTHERNAVBAR STYLE */}
          <div className="nav-links-container">
            <ul className="mobile-menu-list">
              <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 0)}>
                  <span className="menu-text">Home</span>
                </li>
              </Link>

              <Link to="services" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 1)}>
                  <span className="menu-text">Services</span>
                </li>
              </Link>

              <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 2)}>
                  <span className="menu-text">Projects</span>
                </li>
              </Link>

              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 3)}>
                  <span className="menu-text">About</span>
                </li>
              </Link>

              <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
                <li ref={(el) => setMenuItemRef(el, 4)}>
                  <span className="menu-text">Contact</span>
                </li>
              </Link>
            </ul>
          </div>

          {/* Contact Info - OTHERNAVBAR STYLE */}
          <div className="contact-info" ref={(el) => setMenuItemRef(el, 5)}>
            <div className="contact-email">
              <h4>EMAIL ADDRESS</h4>
              <p>ayushbhandarkar7@gmail.com</p>
            </div>
            
            <div className="social-links">
              <h4>CONNECT</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ayush-bhandarkar-555730286/" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Aayushbhandarkar" target="_blank" rel="noopener noreferrer">
                  <span>Github</span>
                </a>
              </div>
            </div>

            {/* Resume Button in Mobile Menu */}
            <div className="mobile-resume-section">
              <div
                className="mobile-resume-btn"
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                  closeMenu();
                }}
              >
                Resume
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Nav;