"use client"; // Ensure it's a client component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import class1 from "../../../public/assets/class-1.jpg";
import class2 from "../../../public/assets/class-2.jpg";
import class3 from "../../../public/assets/class-3.jpg";
import styles from "./Classes.module.css"; // Import the CSS module

const Classes = () => {
  const gymClasses = [
    {
      name: "30 Minute Circuits",
      info: "Lorem Ipsum gravida nibh vel velit auctor aliquam sollicitudin lorem quis bibendum auci elit consequat ipsum...",
      image: class2,
    },
    {
      name: "One Hour HIIT!",
      info: "Lorem Ipsum gravida nibh vel velit auctor aliquam sollicitudin lorem quis bibendum auci elit consequat ipsum...",
      image: class1,
    },
    {
      name: "Bootcamp",
      info: "Lorem Ipsum gravida nibh vel velit auctor aliquam sollicitudin lorem quis bibendum auci elit consequat ipsum...",
      image: class3,
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const paragraphText =
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < paragraphText.length) {
        setTypedText((prev) => prev + paragraphText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed of typing effect
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="classes"
      className={`min-h-screen w-full ${styles["animated-bg"]}`}
      style={{ scrollMarginTop: "5em" }}
    >
      {/* Floating Particles */}
      <div className={styles["particles-container"]}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 py-16">
        <div className="flex flex-col justify-center items-center gap-5 text-center mb-10">
          {/* Glitch Effect for Heading */}
          <h2 className={`${styles.glitch} text-4xl md:text-5xl uppercase tracking-wide text-[#29282D] w-full`}>
            Try Our Classes
          </h2>

          {/* Typing Effect for Paragraph */}
          <p className="text-xl w-full md:w-[50%] text-[#808080]">
            {typedText}
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {gymClasses.map((gymClass, index) => (
            <div key={gymClass.name} className="w-full max-w-[400px] shadow-xl mx-auto relative">
              {/* Dark background for image */}
              <div className={`${styles.darkBackground} ${isHovered ? styles.open : ""}`}>
                <div className="w-full h-[260px] overflow-hidden relative">
                  <Image
                    src={gymClass.image}
                    alt={gymClass.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className={`${styles.rotateOnce} ${styles["flip-image"]} ${styles["zoom-image"]}`}
                  />
                </div>
              </div>

              {/* White background for text */}
              <div className={`${styles.whiteBackground} p-5`}>
                <h3 className="text-accent text-2xl uppercase tracking-wider cursor-pointer py-3 transition-all duration-300 hover:scale-105">
                  {gymClass.name}
                </h3>
                <p className="text-[#808080] leading-7">{gymClass.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;


