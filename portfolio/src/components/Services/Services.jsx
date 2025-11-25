import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const servicesRef = useRef(null);
  const blocksRef = useRef([]);
  const headerRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = blocksRef.current;
      const header = headerRef.current;
      const lines = linesRef.current;

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

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const servicesData = [
    {
      id: "01",
      title: "Full-Stack Development",
      text: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      tech: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman"
      ]
    },
    {
      id: "02", 
      title: "UI/UX & Frontend",
      text: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
      tech: [
        "NextJs, TailwindCSS, GSAP",
        "Figma to Code", 
        "HTML, CSS, JavaScript"
      ]
    },
    {
      id: "03",
      title: "Optimization", 
      text: "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
      tech: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals"
      ]
    }
  ];

  return (
    <div className="services-wrapper" ref={servicesRef} id="services">
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
    </div>
  );
}

export default Services;