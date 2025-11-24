import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const inputsRef = useRef([]);
  const btnRef = useRef(null);
  const bgVideoRef = useRef(null);
  const socialLinksRef = useRef(null);

  // helper to collect inputs
  const addInput = (el) => {
    if (el && !inputsRef.current.includes(el)) inputsRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // section fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // title pop
      gsap.from(titleRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // form pop with subtle scale
      gsap.from(formRef.current, {
        scale: 0.96,
        y: 20,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "back.out(1.2)",
      });

      // stagger inputs
      gsap.from(inputsRef.current, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.35,
        ease: "power2.out",
      });

      // social links animation
      if (socialLinksRef.current) {
        gsap.from(socialLinksRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.7,
          ease: "power2.out",
        });
      }

      // button reveal
      gsap.from(btnRef.current, {
        y: 10,
        opacity: 0,
        duration: 0.6,
        delay: 0.9,
        ease: "back.out(1.1)",
      });

      // subtle slow parallax on background video (very light)
      if (bgVideoRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          onUpdate(self) {
            const v = gsap.utils.mapRange(0, 1, -6, 6, self.progress);
            gsap.to(bgVideoRef.current, { y: v, duration: 0.6, overwrite: true });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef} aria-label="Contact section">
      {/* Subtle background video (local path) */}
      <video
        ref={bgVideoRef}
        className="contact-bg-video"
        src="/mnt/data/Screen Recording 2025-11-23 145113.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <h1 className="contact-title" ref={titleRef}>
        BUILDING SOMETHING COOL? <span className="break">LET’S TALK</span>
      </h1>

      <div className="contact-form-wrap" ref={formRef} role="region" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="form-head">Say Hello</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/movkvdwd"
          method="POST"
          autoComplete="on"
        >
          <input
            ref={addInput}
            name="name"
            type="text"
            placeholder="Drop a name"
            required
            aria-label="Your name"
          />

          <input
            ref={addInput}
            name="email"
            type="email"
            placeholder="Wanna hear back? Add your email"
            required
            aria-label="Your email"
          />

          <textarea
            ref={addInput}
            name="message"
            placeholder="Say hello or drop a note..."
            aria-label="Message"
            required
          />

          <button ref={btnRef} className="send-btn" type="submit" aria-label="Send message">
            Send Message
          </button>
        </form>

        {/* Contact Info & Social Links */}
        <div className="contact-info" ref={socialLinksRef}>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>ayushbhandarkar7@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 7767934036</span>
            </div>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/Aayushbhandarkar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/ayush-bhandarkar-555730286/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;