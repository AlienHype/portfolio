"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 sm:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo and Brand Name */}
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] text-gray-300">
            Arpan's Portfolio
          </span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex items-center">
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-row items-center justify-between w-[500px]">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:text-shadow-[0_0_10px_purple]"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition-all duration-300 hover:text-blue-500 hover:text-shadow-[0_0_10px_blue]"
            >
              Skills
            </a>
            <a
              href="#Certifications"
              className="cursor-pointer transition-all duration-300 hover:text-green-500 hover:text-shadow-[0_0_10px_green]"
            >
              Certifications
            </a>
            <a
              href="#Projects"
              className="cursor-pointer transition-all duration-300 hover:text-red-500 hover:text-shadow-[0_0_10px_red]"
            >
              Projects
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-0 left-0 right-0 bg-[#030014] z-40 p-4 mt-16">
          <div className="flex flex-col gap-4 text-center text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:text-shadow-[0_0_10px_purple]"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition-all duration-300 hover:text-blue-500 hover:text-shadow-[0_0_10px_blue]"
            >
              Skills
            </a>
            <a
              href="#Certifications"
              className="cursor-pointer transition-all duration-300 hover:text-green-500 hover:text-shadow-[0_0_10px_green]"
            >
              Certifications
            </a>
            <a
              href="#Projects"
              className="cursor-pointer transition-all duration-300 hover:text-red-500 hover:text-shadow-[0_0_10px_red]"
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
