import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";
import ResoluteLogo from "../../assets/resoluteAI.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const expRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      expRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Animate each experience item
    if (itemsRef.current.length > 0) {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
    }
  }, []);

  const addToItemsRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const experiences = [
    {
      company: "ResoluteAI Software",
      role: "Frontend Developer Intern",
      period: "Dec 2025 - Present",
      logo: ResoluteLogo,
      description: "Building modern web applications with React and Firebase. Collaborating with teams to deliver scalable frontend solutions."
    }
  ];

  return (
    <section className="exp-wrapper" id="experience">
      <div className="exp-content" ref={expRef}>
        <h2 className="exp-title">Experience</h2>

        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="exp-item" 
            ref={addToItemsRef}
          >
            <div className="exp-header">
              <div className="exp-logo-box">
                <img src={exp.logo} alt={`${exp.company} Logo`} className="exp-logo" />
              </div>
              
              <div className="exp-info">
                <div className="exp-main">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <span className="exp-date">{exp.period}</span>
              </div>
            </div>

            <div className="exp-description">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}