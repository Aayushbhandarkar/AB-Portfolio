import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  const buttonRef = useRef(null);
  const availabilityRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

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

    // Page load animations
    const tl = gsap.timeline();

    // Background shapes - soft fade + slight scale-in
    tl.fromTo(bgRef.current, 
      { 
        opacity: 0, 
        scale: 0.95 
      }, 
      { 
        opacity: 0.4, 
        scale: 1, 
        duration: 1.2, 
        ease: "power2.out" 
      },
      0
    );

    // Heading lines - fade + slide-up with stagger
    tl.fromTo([line1Ref.current, line2Ref.current, line3Ref.current],
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power2.out" 
      },
      0.3
    );

    // Button - small delayed fade-in
    tl.fromTo(buttonRef.current,
      { 
        opacity: 0, 
        y: 10 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      },
      0.8
    );

    // Right-bottom text - slight slide-in from right with very small motion
    tl.fromTo(availabilityRef.current,
      { 
        opacity: 0, 
        x: 20 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.9, 
        ease: "power2.out" 
      },
      1
    );

  }, []);

  return (
    <div className="heroContainer" id="home">
      {/* Background Layer */}
      <div className="hero-bg" ref={bgRef}></div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Main Title */}
        <h1 className="heroTitle" ref={titleRef}>
          <span className="hero-line line-1" ref={line1Ref}>HELLO,</span>
          <span className="hero-line line-2" ref={line2Ref}>I'M AYUSH</span>
          <span className="hero-line line-3" ref={line3Ref}>BHANDARKAR</span>
        </h1>

        {/* Full Stack Developer Subtitle - Normal Text */}
        <div className="subtitle-container">
          <div className="subtitle-wrapper" ref={buttonRef}>
            <span className="subtitle">FULL STACK DEVELOPER</span>
          </div>
        </div>
      </div>

      {/* Right Bottom Block - Premium Minimal */}
      <div className="availability-block" ref={availabilityRef}>
        <div className="availability-label">AVAILABLE FOR WORK</div>
        <div className="availability-date">OCT'25</div>
      </div>
    </div>
  );
}

export default Home;
