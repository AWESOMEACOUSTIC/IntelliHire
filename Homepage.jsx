import React from "react";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  const pulseBorder = {
    initial: { scale: 1 },
    pulse: { scale: 1.05, transition: { duration: 0.5, repeat: Infinity } },
  };

  return (
    <div>
      <Navbar />
      <section className="w-full h-screen z-8">
        <div className="flex flex-col items-center justify-center w-full h-full gap-6 bg-grey">
          <motion.h1
            className="text-center text-7xl max-w-prose"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Get the best candidates
            <br /> from IntelliHire
          </motion.h1>
          <motion.h2
            className="text-center text-black/70"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Unleash your confidence with IntelliHire <br />
            AI-powered tools.
          </motion.h2>
          <a href="/resume" className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-purple-500 transparentContainer">
            Explore Our AI
          </a>
        </div>
      </section>

      <footer className="w-full bg-black text-white py-4 text-center">
        <p>&copy; 2023 IntelliHire Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
