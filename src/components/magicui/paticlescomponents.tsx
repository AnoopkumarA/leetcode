"use client";
import '../../App.css'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff"); 
  }, [theme]);

  return (
    <><div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#05081E] md:shadow-xl px-4">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-7xl font-mystery-quest text-white mb-4">LeetCode Diaries</h1>
          <p className="text-lg md:text-5xl text-gray-300 mb-8 font-light">
            Your Ultimate Code Companion &<br /> Web Design Studio
          </p>
          <div className=" md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 mt-5">
            <button className="px-8 py-2 md:px-16 md:py-2 -ml-1 mx-4 md:mx-14 bg-white text-black rounded-md shadow-lg">Join Us</button>
            <button className="px-8 py-2 md:px-16 md:py-2 border border-white text-white rounded-md">Services</button>
          </div>
        </div>
      </div>
 
    <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh />
    </div></>
  );
};

export default ParticlesDemo;
