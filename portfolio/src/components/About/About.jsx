import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
// Import your image - replace with your actual image path
import ProfileImage from "../../assets/banner8.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const lines = linesRef.current;
      const skillsSection = skillsRef.current;
      const profileImage = imageRef.current;

      // Header animation
      gsap.from(header, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Lines animation
      lines.forEach((line) => {
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          });
        }
      });

      // Skills section and image animation
      if (skillsSection && profileImage) {
        gsap.from([skillsSection, profileImage], {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      }

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const skillsData = [
    {
      category: "Languages & Data",
      items: ["Java", "JavaScript", "Git", "MongoDB", "SQL", "C++", "Windows"]
    },
    {
      category: "Framework & Library",
      items: ["React", "Node.js", "Express.js"]
    },
    {
      category: "Core OS Concepts",
      items: ["IPv4", "DNS", "IPv6", "Operating Systems", "System Config"]
    }
  ];

  return (
    <div className="about-wrapper" ref={aboutRef} id="about">
      {/* SKILLS SECTION */}
      <div className="skills-section" ref={skillsRef}>
        <div className="skills-header" ref={headerRef}>
          <h1 className="skills-title">DEVELOPER DESIGNER CREATOR /</h1>
        </div>

        <div className="line" ref={el => linesRef.current[0] = el}></div>

        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="line" ref={el => linesRef.current[1] = el}></div>

        {/* About Me Description WITH IMAGE */}
        <div className="about-description-with-image">
          <div className="description-content">
            <p className="description-text">
              I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.
            </p>
            
            <div className="group-section">
              <p className="group-label">GROUP 201</p>
              <p className="group-description">
                My journey has been shaped by building real-world products, understanding systems at a deeper level, and creating experiences that feel effortless, fast, and intuitive. I love working across the stack—architecting clean, scalable backends, crafting thoughtful user interfaces, and transforming ideas into reliable, production-ready solutions.
              </p>
              <p className="group-description">
                Beyond code, I think in collaborative environments where ideas grow through discussions, creativity, and iteration. I believe in clarity, consistency, and building solutions that genuinely solve problems. Every project I work on reflects my focus on clean architecture, thoughtful design, and engineering that feels effortless to the user.
              </p>
            </div>
          </div>

          {/* PROFILE IMAGE - RIGHT SIDE OF DESCRIPTION */}
          <div className="description-image-right">
            <div className="profile-image-container">
              <img 
                ref={imageRef}
                src={ProfileImage} 
                alt="Ayush Bhandarkar" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;