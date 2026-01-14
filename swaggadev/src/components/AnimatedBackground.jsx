"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
  const splineContainer = useRef(null);
  const [splineApp, setSplineApp] = useState(null);

  useEffect(() => {
    if (!splineApp) return;

    // Setup scroll animations for sections
    const setupScrollAnimations = () => {
      const kbd = splineApp.findObjectByName("keyboard");
      if (!kbd) return;

      // Hero state
      gsap.set(kbd.scale, { x: 1, y: 1, z: 1 });
      gsap.set(kbd.position, { x: 0, y: 0, z: 0 });

      // Create scroll triggers for each section
      const sections = ["#skills", "#projects", "#contact"];
      
      sections.forEach((section) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          },
        });
      });
    };

    setupScrollAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [splineApp]);

  return (
    <Suspense fallback={<div className="w-full h-screen bg-dark-950" />}>
      <div
        ref={splineContainer}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
      >
        <Spline
          scene="https://prod.spline.design/bRhvNqH2LPMcEMyT/scene.splinecode"
          onLoad={(app) => {
            setSplineApp(app);
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Suspense>
  );
};

export default AnimatedBackground;
