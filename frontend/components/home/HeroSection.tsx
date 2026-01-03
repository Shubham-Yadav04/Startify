"use client";
import { Rubik_80s_Fade } from "next/font/google";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

const rubik_80 = Rubik_80s_Fade({ weight: "400" });

function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'center start']
  });
  
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      className="w-full h-[200vh] overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-300" 
      ref={containerRef}
    >
      <div className="w-full h-[100vh] flex items-center relative z-10">
        {/* Left Panel */}
        <motion.div
          className="fixed top-0 left-0 w-[50%] h-full bg-white dark:bg-black text-6xl font-bold uppercase md:text-[20vmin]"
          style={{ x: leftX }}
        >
          <h1 className="text-end w-full bg-clip-text text-transparent pl-4 top-[50vh] absolute md:top-[37%] bg-gradient-to-b from-gray-900 to-gray-500 dark:from-green-800 dark:to-white/60">
            Con <br />
          </h1>
          <motion.h1 className="md:pl-4 mt-3 w-full top-[62.5vh] absolute md:top-[55%] md:text-end md:pr-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-700 via-gray-400 to-transparent dark:from-white dark:via-white/60 dark:to-transparent">
            Pitch
          </motion.h1>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="fixed top-0 right-0 w-[50%] h-full bg-gray-50 dark:bg-black text-6xl font-bold uppercase md:text-[20vmin]"
          style={{ x: rightX }}
        >
          <motion.h1 className="absolute top-[37.5vh] md:top-[17%] w-full md:text-start md:pl-8 right-0 bg-clip-text text-transparent bg-gradient-to-b from-gray-700 via-gray-400 to-transparent dark:from-white dark:via-white/60 dark:to-transparent">
            Grow
          </motion.h1>
          <h1 className="text-start bg-clip-text text-transparent top-[50vh] absolute md:top-[37%] bg-gradient-to-b from-gray-900 to-gray-500 dark:from-green-800 dark:to-white/60">
            nect
          </h1>
        </motion.div>
      </div>

      {/* Hero Content Section */}
      <div className="w-full min-h-[100vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="relative max-w-4xl h-[100vh] w-full flex flex-col justify-center items-center bg-[radial-gradient(circle_at_center,rgba(220,220,220,0.4),rgba(255,255,255,1),#fff)] dark:bg-[radial-gradient(circle_at_center,rgba(80,80,80,0.25),rgba(0,0,0,1),#000)]">
          <h1 className="text-gray-900 dark:text-white/60 font-extrabold leading-tight text-4xl sm:text-5xl lg:text-[9vmin]">
            Craft Pitches That Win Attention — And Investment
          </h1>
          <p className="mt-6 text-gray-600 dark:text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Create clear, compelling, investor-ready pitches that showcase traction, validate messaging, and get you in front of the right people faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg font-semibold transition-all bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white shadow-lg shadow-green-600/20 dark:shadow-green-900/30">
              Get Started — It&apos;s Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;