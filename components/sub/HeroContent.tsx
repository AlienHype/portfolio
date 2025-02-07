"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center lg:text-start m-auto">

            <div className="typeAnimation aos-init aos-animate text-4xl lg:text-6xl font-bold text-white max-w-full w-auto h-auto">
                 <span>Hi, I'm Arpan Khetha </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  <Typewriter
                           words={['a web developer', 'Technical support']}
                            loop={0}
                                 cursor
                                 cursorStyle="|"
                                         typeSpeed={70}
                                                deleteSpeed={50}
                                                           delaySpeed={1000}
                                                                          />
                                   </span>
                        </div>

            <small className="block text-gray-500 italic text-left my-2">
              Try <motion.div variants={slideInFromTop} className="inline-block Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4">
                <h1 className="Welcome-text inline text-sm lg:text-[13px]">
                  <code>npx arpan_k</code>
                </h1>
              </motion.div> on your terminal for a small resume.
            </small>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base lg:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          I&apos;m a Junior Web Developer passionate about crafting user-friendly websites. Explore my journey and the projects I've worked on as I continue to grow and learn in the world of web development.
        </motion.p>
 

        <motion.a
         variants={slideInFromLeft(1)}
         className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] mx-auto lg:mx-0 mt-4 lg:mt-6"
        href="https://alienhype.github.io/digital-cv/" // Updated link here
         >
         Digital CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-[80%] max-w-[650px] mx-auto"
        />
      </motion.div>
      <small className="block text-gray-500 italic text-left my-2">
             I made this website using NextJS.
            </small>
    </motion.div>
  );
};

export default HeroContent;
