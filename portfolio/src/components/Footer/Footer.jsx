import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Footer.css";

function Footer() {
  const socialLinksRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation
      gsap.from(socialLinksRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer-section" aria-label="Footer section">
      <div className="footer-container" ref={socialLinksRef}>
        <div className="footer-divider"></div>
        
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">Menu</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#projects" className="footer-link">Works</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Socials</h3>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/in/ayush-bhandarkar-555730286/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="footer-link">LinkedIn</a></li>
              <li><a href="https://leetcode.com/u/ayushbhandarkar7/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
              //        className="footer-link">LeetCode</a></li>
              // <li><a href="https://github.com/Aayushbhandarkar" 
              //        target="_blank" 
              //        rel="noopener noreferrer" 
                     className="footer-link">Github</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Certificates</h3>
            <ul className="footer-links">
              <li><a href="https://www.hackerrank.com/certificates/75dfca7ab52d" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="footer-link">HackerRank REST API</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:ayushbhandarkar7@gmail.com" 
                   className="footer-link">
                  ayushbhandarkar7@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917767934036" 
                   className="footer-link">
                  +91 7767934036
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="local-time" ref={timeRef}>
            LOCAL TIME
            <br />
            {new Date().toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit', 
              second: '2-digit',
              hour12: true 
            }).toUpperCase()}, IST
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;