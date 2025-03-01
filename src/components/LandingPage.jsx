"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import MotionHeadings from "./MotionHeadings";
import heroImg from "../../public/assets/hero-img.jpg";

const LandingPage = () => {
  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  // Track mouse movement
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const xPos = (e.clientX / innerWidth - 0.5) * 30; // Rotate within 30 degrees
    const yPos = (e.clientY / innerHeight - 0.5) * 30;
    x.set(xPos);
    y.set(-yPos); // Invert y for natural effect
  };

  return (
    <div 
      className="flex flex-col w-full bg-black min-h-screen"
      onMouseMove={handleMouseMove} // Attach mouse movement
    >
      <div className="relative flex flex-col justify-center items-center h-[100vh] w-full">
        {/* 3D Animated Image Wrapper */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            perspective: 1000, // 3D Perspective
          }}
        >
          <motion.div
            className="relative w-full h-full"
            style={{
              rotateX: smoothY,
              rotateY: smoothX,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              alt="Muscular man showcasing his back muscles."
              src={heroImg}
              placeholder="blur"
              quality={100}
              priority
              sizes="100vw"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
          </motion.div>
        </motion.div>

        {/* Motion Headings should be ABOVE the image */}
        <div className="relative z-10 text-white text-center">
          <MotionHeadings />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

