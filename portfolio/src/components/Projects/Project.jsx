import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Project.css";

import Ogne from "../../assets/ogne.png";
import CodeReviewer from "../../assets/Code.jpg";
import Linkdin from "../../assets/linkdin.png";

import { FaGithub, FaGlobe, FaVideo, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const cursorRef = useRef(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const projects = [
    {
      id: "01",
      title: "OGNÉ – FULL STACK E-COMMERCE PLATFORM",
      desc: "A modern e-commerce platform with full authentication, cart, product management and admin control.",
      img: Ogne,
      links: {
        github: "https://github.com/Aayushbhandarkar/OGNE-Ecommerce",
        live: "https://ogne-ecommerce-frontend.onrender.com",
        demo: "https://drive.google.com/file/d/1oKeufPCuf8N__hbn7TkhawtE1e6ZxclR/view",
      },
    },
    {
      id: "02",
      title: "AI POWERED CODE REVIEWER & BUG FINDER",
      desc: "An AI-powered tool that reviews code, detects bugs, and suggests improvements automatically.",
      img: CodeReviewer,
      links: {
        github: "https://github.com/Aayushbhandarkar/Ai-powered-code-review.git",
        live: "https://ai-powered-code-review-udq1.onrender.com",
        demo: "https://drive.google.com/file/d/1g7MQck0-lFd2N_FlkwVJ6emI8it-I7fh/view",
      },
    },
    {
      id: "03",
      title: "LINKEDIN FULL STACK CLONE",
      desc: "A full working LinkedIn clone with posts, auth, profiles, and real-time UI.",
      img: Linkdin,
      links: {
        github: "https://github.com/Aayushbhandarkar/LinkedIn_mega.git",
        demo: "https://drive.google.com/file/d/1T4V1Kilg5Ur6tG_BQ0s7Qg6Pz624rwAa/view",
      },
    },
  ];

  // Custom cursor logic - ONLY for image hover
  useEffect(() => {
    let isMounted = true;

    const handleMouseMove = (e) => {
      if (!isMounted || !cursorRef.current || !isHoveringImage) return;
      
      gsap.to(cursorRef.current, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleImageEnter = () => {
      if (isMounted) {
        setIsHoveringImage(true);
      }
    };

    const handleImageLeave = () => {
      if (isMounted) {
        setIsHoveringImage(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add event listeners to all project media links
    const mediaLinks = document.querySelectorAll('.proj-media-link');
    mediaLinks.forEach(link => {
      link.addEventListener('mouseenter', handleImageEnter);
      link.addEventListener('mouseleave', handleImageLeave);
    });

    return () => {
      isMounted = false;
      document.removeEventListener('mousemove', handleMouseMove);
      
      mediaLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleImageEnter);
        link.removeEventListener('mouseleave', handleImageLeave);
      });
    };
  }, [isHoveringImage]);

  // GSAP Animations - PRESERVED EXACTLY
  useEffect(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block) => {
        const media = block.querySelector(".proj-media");

        // Big number fade
        gsap.from(block.querySelector(".proj-left"), {
          scrollTrigger: { 
            trigger: block, 
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Right content fade
        gsap.from(block.querySelector(".proj-right"), {
          scrollTrigger: { 
            trigger: block, 
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          },
          x: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        // Image parallax & scale
        ScrollTrigger.create({
          trigger: block,
          start: "top 100%",
          end: "bottom top",
          scrub: 1,
          onUpdate(self) {
            const p = self.progress;
            gsap.to(media, {
              y: gsap.utils.mapRange(0, 1, 40, -40, p),
              scale: gsap.utils.mapRange(0, 1, 1.05, 1, p),
              ease: "power3.out",
              overwrite: true,
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cursor visibility animation - ONLY show when hovering images
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: isHoveringImage ? 1 : 0,
        scale: isHoveringImage ? 1 : 0.8,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [isHoveringImage]);

  // Helper to choose the clickable URL
  const chooseUrl = (links = {}) => {
    return links.live || links.demo || links.github || null;
  };

  return (
    <section className="proj-section" ref={sectionRef}>
      {/* Custom Gaming Cursor - Only shows on image hover */}
      <div 
        className="custom-cursor" 
        ref={cursorRef}
      >
        <div className="cursor-circle"></div>
        <span className="cursor-text">VIEW</span>
      </div>

      {/* Header */}
      <div className="proj-header">
        <h1 className="proj-title">SELECTED WORKS /</h1>
        <div className="proj-sub">
          <p className="proj-mini">(PROJECTS)</p>
          <p className="proj-desc">
            A collection of refined digital products built with modern engineering and thoughtful design.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="proj-list">
        {projects.map((p, idx) => {
          const url = chooseUrl(p.links);
          return (
            <div className="proj-item" key={p.id} ref={(el) => (blocksRef.current[idx] = el)}>
              <div className="proj-left">
                <h1>{p.id}</h1>
              </div>

              <div className="proj-right">
                <div className="proj-media-wrapper">
                  {url ? (
                    <a
                      className="proj-media-link"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} — ${url}`}
                    >
                      <img src={p.img} alt={p.title} className="proj-media" />
                      <div className="media-overlay">
                        <div className="overlay-content">
                          <span className="view-text">View Project</span>
                          <div className="arrow-icon">→</div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <img src={p.img} alt={p.title} className="proj-media" />
                  )}
                </div>

                {/* UPDATED: Added data-number attribute for minimalist number styling */}
                <h2 className="proj-name" data-number={p.id}>
                  {p.title}
                </h2>
                <p className="proj-text">{p.desc}</p>

                <div className="proj-links">
                  {p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> <span>Repo</span>
                    </a>
                  )}
                  {p.links.live && (
                    <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                      <FaGlobe /> <span>Live</span>
                    </a>
                  )}
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                      <FaVideo /> <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Projects Button */}
      <div className="view-all-projects">
        <a 
          href="https://github.com/Aayushbhandarkar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-btn"
        >
          <span>VIEW ALL PROJECTS</span>
          <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </section>
  );
}

export default Project;