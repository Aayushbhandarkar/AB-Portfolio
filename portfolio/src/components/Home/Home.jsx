import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Main title scroll animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -150,
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        ease: "power2.out",
      }
    );

    // Typing animation for subtitle
    const subtitle = subtitleRef.current;
    const cursor = cursorRef.current;
    
    if (subtitle && cursor) {
      const text = "Full Stack Developer";
      let index = 0;
      
      gsap.set(cursor, { opacity: 1 });
      
      const typeWriter = () => {
        if (index < text.length) {
          subtitle.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        } else {
          // Blinking cursor effect after typing completes
          gsap.to(cursor, {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          });
        }
      };

      // Start typing after a short delay
      setTimeout(typeWriter, 1000);
    }

  }, []);

  return (
    <div className="heroContainer" id="home">

      {/* Minimal Background Elements */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      <div className="bg-line bg-line-1"></div>
      <div className="bg-line bg-line-2"></div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Main Title */}
        <h1 className="heroTitle" ref={titleRef}>
  HEYA,
  <span className="highlightName">
    <span className="name-first">AYUSH</span>
    <span className="name-last">BHANDARKAR</span>
  </span>
</h1>

        {/* Full Stack Developer Subtitle */}
        <div className="subtitle-container">
          <div className="subtitle-wrapper">
            <span className="subtitle" ref={subtitleRef}></span>
            <span className="typing-cursor" ref={cursorRef}>|</span>
          </div>
        </div>
      </div>

      <div className="bottomShape"></div>
    </div>
  );
}

export default Home;
