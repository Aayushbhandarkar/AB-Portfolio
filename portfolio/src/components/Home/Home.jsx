import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Home.css";

function Home() {
  const homeWrapperRef = useRef(null);
  const mainNameRef = useRef(null);
  const thinArrowRef = useRef(null);
  const newDescRef = useRef(null);
  const newContactBtnRef = useRef(null);
  const availableRef = useRef(null);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([homeWrapperRef.current, mainNameRef.current, thinArrowRef.current, newDescRef.current, newContactBtnRef.current, availableRef.current], {
      opacity: 1,
      y: 0,
      x: 0
    });

    // DHAMAKEDAR ANIMATION SEQUENCE
    tl.fromTo(mainNameRef.current, 
      { 
        opacity: 0,
        y: 100,
        scale: 1.1
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.4, 
        ease: "expo.out",
        stagger: 0.1
      }
    )
    // Arrow - Smooth follow
    .fromTo(thinArrowRef.current,
      { 
        opacity: 0,
        scale: 0,
        rotation: -45
      },
      { 
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1.2, 0.5)"
      },
      "-=0.8"
    )
    // Description - Clean typewriter feel
    .fromTo(newDescRef.current,
      { 
        opacity: 0,
        y: 40
      },
      { 
        opacity: 0.85,
        y: 0,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.5"
    )
    // Contact Button - Punchy entrance
    .fromTo(newContactBtnRef.current,
      { 
        opacity: 0,
        scale: 0.8,
        y: 20
      },
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.7)"
      },
      "-=0.4"
    )
    // Availability - Smooth slide
    .fromTo(availableRef.current,
      { 
        opacity: 0,
        x: 50
      },
      { 
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // ONLY BUTTON HOVER EFFECT - NAME PE NO HOVER
    const btn = newContactBtnRef.current;
    if (btn) {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          y: -2,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }


    // Continuous subtle arrow animation
    gsap.to(thinArrowRef.current, {
      y: -3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <div className="home-wrapper" ref={homeWrapperRef}>

      <h1 className="main-name" ref={mainNameRef}>
        AYUSH <br /> BHANDARKAR
      </h1>

      <div className="thin-arrow" ref={thinArrowRef}>↘</div>

      <div className="left-box">
        <p className="desc new-desc" ref={newDescRef}>
          Open to job opportunities worldwide.
          <br />
          Passionate about building polished,
          intuitive, and thoughtful digital
          experiences that leave a mark.
        </p>

        <button
          className="contact-btn new-contact-btn"
          onClick={scrollToContact}
          ref={newContactBtnRef}
        >
          CONTACT ↗
        </button>
      </div>

      <div className="available" ref={availableRef}>
        <p className="small-availability">AVAILABLE FOR WORK</p>
        <p className="big-availability">OCT'25</p>
      </div>

    </div>
  );
}

export default Home;