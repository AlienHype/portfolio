"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard1";

const Certifications = () => {
  const certifications = [
    { id: 1, src: "/cs50.png", title: "Certification in Phython CS50", description: "Project made with Phython" },
    { id: 2, src: "/react1.png", title: "Certification in React", description: "Master the art of raect.js." },
    { id: 3, src: "/git12.png", title: "Certification in Git", description: "Unlock insights with powerful data tools." },
    { id: 4, src: "/web.png", title: "Certification in Web Development", description: "Build modern, responsive websites." },
    { id: 5, src: "/linux.png", title: "Certification in Linux", description: "Design and manage secure networks." },
    { id: 6, src: "/cct.png", title: "Introduction into Computing", description: "Explore the future of computing." },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-1" id="Certifications">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certifications
      </h1>
      <div className="h-full w-full flex flex-col gap-10 px-4 md:px-10">
        {/* Certification Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {certifications.map((cert) => (
            <div key={cert.id} className="w-full">
              <ProjectCard
                src={cert.src}
                title={cert.title}
                description={cert.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
