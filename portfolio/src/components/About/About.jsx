import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
// Import your image - replace with your actual image path
import ProfileImage from "../../assets/banner8.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const blocksRef = useRef([]);
  const headerRef = useRef(null);
  const linesRef = useRef([]);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = blocksRef.current;
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

      // Simple fade up animation for blocks
      blocks.forEach((block, index) => {
        if (block) {
          gsap.from(block, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: block,
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

  const servicesData = [
    {
      id: "01",
      title: "Full-Stack Development",
      text: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      tech: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase", 
        "Git, GitHub, Postman"
      ]
    },
    {
      id: "02", 
      title: "UI/UX & Frontend",
      text: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is simplicity, precision, and performance.",
      tech: [
        "HTML, CSS, JavaScript",
        "GSAP, Framer Motion, Animations",
        "Responsive & Modern UI"
      ]
    },
    {
      id: "03",
      title: "Optimization", 
      text: "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
      tech: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        
      ]
    }
  ];

  const skillsData = [
    {
      category: "Languages & Data",
      items: [  "Java", "Server", "Server-style", "JavaScript", "Git", "MongoDB","SQL","C++", "Windows"]
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
    <div className="services-wrapper" ref={aboutRef}>
      {/* TOP HEADER */}
      <div className="services-header" ref={headerRef}>
        <h1 className="services-title">WHAT I DO /</h1>

        <div className="services-right">
          <p className="services-mini">(SERVICES)</p>
          <p className="services-desc">
            I specialize in building full-stack web applications that are fast, reliable,
            and user-friendly. With a solid foundation in both frontend and backend
            technologies, I help bring ideas to life whether it's for a business,
            a startup, or a product team.
          </p>
        </div>
      </div>

      <div className="line" ref={el => linesRef.current[0] = el}></div>

      {/* SERVICE BLOCKS */}
      {servicesData.map((service, index) => (
        <React.Fragment key={service.id}>
          <div
            className="service-block"
            ref={el => {
              if (el && !blocksRef.current.includes(el)) blocksRef.current[index] = el;
            }}
          >
            <div className="service-left">
              <span className="service-number">{service.id}</span>
            </div>

            <div className="service-right">
              <h2 className="service-title">
                {service.title}
              </h2>
              
              <div className="service-content">
                <p className="service-text">
                  {service.text}
                </p>

                <div className="tech-list">
                  {service.tech.map((tech, techIndex) => (
                    <React.Fragment key={techIndex}>
                      <div className="tech-row">
                        <span>0{techIndex + 1}</span> 
                        <p>{tech}</p>
                      </div>
                      {techIndex < service.tech.length - 1 && <div className="divider"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="line" ref={el => linesRef.current[index + 1] = el}></div>
        </React.Fragment>
      ))}

      {/* SKILLS SECTION */}
      <div className="skills-section" ref={skillsRef}>
        <div className="skills-header">
          <h1 className="skills-title">DEVELOPER DESIGNER CREATOR /</h1>
        </div>

        <div className="line"></div>

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

        <div className="line"></div>

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