import React, { useState, useEffect } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Simple scroll prevention
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navBar">
        {/* Desktop Menu */}
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
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            <li>About</li>
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

        {/* Mobile Hamburger Menu - PERFECTLY POSITIONED */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <div className="close-btn" onClick={closeMenu}>×</div>
          </div>
          
          <ul className="mobile-menu-list">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              offset={-80}
              onClick={closeMenu}
            >
              <li>Home</li>
            </Link>

            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-80}
              onClick={closeMenu}
            >
              <li>About</li>
            </Link>

            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-80}
              onClick={closeMenu}
            >
              <li>Projects</li>
            </Link>

            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-80}
              onClick={closeMenu}
            >
              <li>Contact</li>
            </Link>

            <li
              className="mobile-resume-btn"
              onClick={() => {
                window.open("/resume.pdf", "_blank");
                closeMenu();
              }}
            >
              Resume
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;