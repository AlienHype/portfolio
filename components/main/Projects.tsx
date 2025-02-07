"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const ProjectContent = () => {
  const projects = [
    {
      title: " Top 100 Companies by La Sentinelle",
      description: "Created the 2024 edition of the Top 100 Companies website for La Sentinelle, a leading media company in Mauritius.",
      image: "/top100.png",
      link: "https://top100companies.mu/",
    },
    {
      title: "Petite Annonce by La Sentinelle",
      description: "Working from scratch to create a classified ads platform for La Sentinelle, a leading media company in Mauritius.",
      image: "/petite.png",
      link: "https://www.lexpress-petites-annonces.mu/en",
    },
    {
      title: "Happy Pizza",
      description: " E-commerce platform for a pizza restaurant, allowing customers to order online and view the menu.",
      image: "/pizza.png",
      link: "/https://happy-pizza.vercel.app/",
    },
    {
      title: "Hype Rentals",
      description: "Made this project using React, Next.js, and Tailwind CSS. It is a car rental platform.",
      image: "/hype.png",
      link: "https://hyperentals.vercel.app/home",
    },
    {
      title: "Espace Toiture",
      description: "A platform for roofers to showcase their work and connect with potential clients.",
      image: "/esp.png",
      link: "https://espace-toiture.vercel.app/",
    },
    {
      title: "Rezone",
      description: "An platform for educate people about sea pollution and how to prevent it.",
      image: "/re.png",
      link: "https://re-zone.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center lg:text-start m-auto text-center">
      <div className="typeAnimation aos-init aos-animate text-4xl lg:text-6xl font-bold text-white max-w-full w-auto h-auto">
      <span>My Projects</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block min-w-[200px]">
    <Typewriter
      words={['React Projects', 'Business Solutions', 'E-commerce Platforms', 'Working on']}
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
          variants={slideInFromLeft(0.8)} // Passing delay as a number here
          className="text-base lg:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          Here are some of the projects I have worked on. Click to view project about each one.
        </motion.p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
            id="Projects"
              key={index}
              variants={slideInFromTop} // No delay needed for top animation
              className="project-card p-4 bg-transparent rounded-lg shadow-lg "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                className="w-full h-auto rounded-lg "
              />
              <h3 className="text-2xl font-bold text-white mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <motion.a
                href={project.link}
                variants={slideInFromLeft(1)} // Delay for left slide-in
                className="mt-4 inline-block py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContent;
