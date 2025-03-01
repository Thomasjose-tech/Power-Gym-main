"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import trainer1 from "../../../public/assets/trainer-1.jpg";
import trainer2 from "../../../public/assets/trainer-2.jpg";
import trainer3 from "../../../public/assets/trainer-3.jpg";
import trainer4 from "../../../public/assets/trainer-4.jpg";

const team = [
  { name: "Maria Smith", expertise: "Crossfit expert", image: trainer1 },
  { name: "Chris Smith", expertise: "Powerlifting expert", image: trainer2 },
  { name: "Grace Smith", expertise: "Cardio trainer", image: trainer3 },
  { name: "Michael Smith", expertise: "Combat trainer", image: trainer4 },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateTitle, setAnimateTitle] = useState(false);

  // Auto-slide effect for trainers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
      setAnimateTitle(true);
      setTimeout(() => setAnimateTitle(false), 500); // Reset after animation
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" className="w-full min-h-screen flex flex-col items-center justify-start p-10 bg-transparent">
      {/* Meet Our Team Title with hover & auto animation */}
      <motion.div
        className="bg-gray-900 text-white text-4xl md:text-5xl font-bold uppercase tracking-wide py-4 px-10 rounded-lg text-center shadow-lg cursor-pointer whitespace-nowrap"
        whileHover={{ scale: 1.1, color: "#ff4d4d" }}
        animate={animateTitle ? { scale: 1.1, color: "#ff4d4d" } : {}}
        transition={{ duration: 0.5 }}
      >
        Meet our strongest team
      </motion.div>

      {/* Trainer Carousel */}
      <div className="relative w-full max-w-[1100px] h-[500px] flex justify-center items-center overflow-hidden mt-6">
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length)}
          className="absolute left-4 z-20 bg-gray-800/60 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
        >
          <MdKeyboardArrowLeft size={30} />
        </button>

        {team.map((trainer, index) => {
          const position = (index - currentIndex + team.length) % team.length;
          let translateX = "0%";
          let zIndex = 0;
          let opacity = 1;

          if (position === 0) {
            translateX = "-170%";
            zIndex = 5;
            opacity = 1;
          } else if (position === 1) {
            translateX = "-60%";
            zIndex = 30;
            opacity = 1;
          } else if (position === 2) {
            translateX = "50%";
            zIndex = 5;
            opacity = 1;
          } else {
            translateX = position === 3 ? "240%" : "-240%";
            opacity = 0;
          }

          return (
            <motion.div
              key={trainer.name}
              className="absolute top-[90px] left-1/2 w-[350px] h-[500px] rounded-lg overflow-hidden shadow-lg group"
              style={{ transform: `translateX(${translateX})`, zIndex, opacity }}
              transition={{ duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              {/* Hover Effect for Name */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center">
                <motion.h3
                  className="text-2xl uppercase font-bold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {trainer.name}
                </motion.h3>
                <motion.p
                  className="text-sm tracking-widest"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {trainer.expertise}
                </motion.p>
                <div className="flex gap-4 mt-2">
                  <FaFacebookF size={25} className="hover:text-accent transition duration-300 cursor-pointer" />
                  <FaTwitter size={25} className="hover:text-accent transition duration-300 cursor-pointer" />
                  <ImInstagram size={25} className="hover:text-accent transition duration-300 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % team.length)}
          className="absolute right-4 z-20 bg-gray-800/60 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default Team;
