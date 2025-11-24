import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./PreLoader.css";

function PreLoader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Wait for 2 seconds before removing
    const tl = gsap.timeline();

    tl.to(loaderRef.current, {
      delay: 2,          // <-- 2 seconds wait
      y: "-100%",
      duration: 1.3,
      ease: "power4.inOut"
    });

    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        loaderRef.current.style.display = "none";
      }
    });
  }, []);

  return <div ref={loaderRef} className="preloader"></div>;
}

export default PreLoader;
