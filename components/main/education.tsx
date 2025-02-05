"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";

const Education = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center lg:text-start m-auto text-center">
        <div className="typeAnimation aos-init aos-animate text-4xl lg:text-6xl font-bold text-white max-w-full w-auto h-auto">
          <span>My Educational and Professional Journey</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            <Typewriter
              words={['Student in Information Systems', 'Exploring Web Development', 'Working at Lasentinelle (intern)']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base lg:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          I am currently pursuing a diploma in Information Systems while gaining professional experience in the field of web development and business computing. Below is a look at my academic and work experience.
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/arpan-rai-khetha-533247332/"
          variants={slideInFromLeft(1)}
          className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] mx-auto lg:mx-0 mt-4 lg:mt-6"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FaLinkedin size={30} />
        </motion.a>

        

        <div className="education-timeline mt-10">
            
             <motion.div
              variants={slideInFromTop}
              className="education-item my-4 p-4 bg-gray-800 rounded-lg shadow-lg flex items-center"
            >
              <div className="flex-shrink-0 mr-4">
                <span className="text-xs text-gray-400">Education</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">University Malaysia of Computer Science & Engineering - Information Systems</h3>
                <p className="text-gray-400">2021 - 2024</p>
                <p className="text-gray-500 mt-2">
                The program covers courses in accounting, computing, programming, business statistics, information systems, marketing, economics, and more, with practical training in the final year.            
                </p>
              </div>
            </motion.div>


          <motion.div
              variants={slideInFromTop}
              className="education-item my-4 p-4 bg-gray-800 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div>
              <h3 className="text-2xl font-bold text-white">High School</h3>
              <p className="text-gray-400">2015 - 2019</p>
              <p className="text-gray-500 mt-2">
              Completed high school with a focus on sciences and mathematics, laying a strong foundation for further studies in Information Systems and technology.
              </p>
              </div>
              <div className="flex-shrink-0 ml-4">
              <span className="text-xs text-gray-400">Education</span>
              </div>
            </motion.div>

        
            <motion.div
              variants={slideInFromTop}
              className="education-item my-4 p-4 bg-gray-800 rounded-lg shadow-lg flex items-center"
            >
              <div className="flex-shrink-0 mr-4">
                <span className="text-xs text-gray-400">Work Experience</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Lasentinelle</h3>
                <p className="text-gray-400">Nov 2024 - Feb 2025</p>
                <p className="text-gray-500 mt-2">
                  Worked at Lasentinelle, gaining practical experience in web development and contributing to various projects.
                </p>
              </div>
            </motion.div>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 lg:mt-0"
      >
        <div className="text-xl lg:text-2xl font-mono p-6 rounded-lg bg-opacity-20 bg-black border border-green-500">
          <span className="text-green-400">
        <Typewriter
          words={['"My IT instructor said it\'s ok to use AI tools, all you just need is to meet the request of your client, they don\'t matter how you\'d do it"']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={40}
          deleteSpeed={50}
          delaySpeed={2000}
        />
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
