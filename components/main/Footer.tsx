"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing GitHub and LinkedIn icons

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 py-6 w-full z-[20] bg-transparent"
    >
      <div className="w-full flex flex-col gap-5 justify-center text-center">
        <motion.p
          variants={slideInFromLeft(0.8)} // Passing delay as a number here
          className="text-base lg:text-lg text-gray-400 my-5 max-w-[600px] mx-auto"
        >
          Connect with me on social media
        </motion.p>

        <div className="social-links flex gap-6 mt-6 justify-center">
          <motion.a
            href="https://github.com/AlienHype"
            target="_blank"
            rel="noopener noreferrer"
            variants={slideInFromTop}
            className="text-white hover:text-cyan-500 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/arpan-rai-khetha-533247332/"
            target="_blank"
            rel="noopener noreferrer"
            variants={slideInFromTop}
            className="text-white hover:text-cyan-500 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>

        <div className="text-center text-gray-400 mt-6">
        &copy; Hype {new Date().getFullYear()} Inc. All rights reserved
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

