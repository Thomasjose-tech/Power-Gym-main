"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaTrophy, FaDumbbell } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import styles from "./static.css";

const StatsSection = () => {
  const [hours, setHours] = useState(1);
  const [trainers, setTrainers] = useState(1);
  const [equipment, setEquipment] = useState(1);

  // Counting animation
  useEffect(() => {
    const interval1 = setInterval(() => {
      setHours((prev) => (prev < 12 ? prev + 1 : 12));
    }, 100);

    const interval2 = setInterval(() => {
      setTrainers((prev) => (prev < 10 ? prev + 1 : 10));
    }, 150);

    const interval3 = setInterval(() => {
      setEquipment((prev) => (prev < 30 ? prev + 1 : 30));
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <section className="bg-#FFFF00 text-black py-20 text-center">
      <h2 className="text-3xl font-bold mb-8 uppercase typing">Why Choose Us?</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        {/* Stats Cards with 3D Flip and Tilt Effects */}
        {[
          { value: hours, icon: <FaClock size={60} className="text-yellow-500 mt-2" />, label: "Working Hours" },
          { value: trainers, icon: <FaTrophy size={60} className="text-blue-500 mt-2" />, label: "Certified Trainers" },
          { value: equipment, icon: <FaDumbbell size={60} className="text-red-500 mt-2" />, label: "Modern Equipment" },
        ].map((item, index) => (
          <Tilt key={index} glareEnable={true} glareMaxOpacity={0.4} scale={1.1} transitionSpeed={2000} className="tilt-card">
            <motion.div
              className="flip-card"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="circle">{item.value}+</div>
                  {item.icon}
                  <p className="text-lg text-gray-600 mt-2">{item.label}</p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back flex flex-col items-center justify-center">
                  <p className="text-lg font-bold">{item.label}</p>
                  <p className="text-sm text-gray-300">Join us to experience the best!</p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
