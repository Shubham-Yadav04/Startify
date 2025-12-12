"use client";
import { Rubik_80s_Fade } from "next/font/google";
import {  useScroll, useTransform } from "motion/react";
import {  useRef } from "react";
import { motion } from "motion/react";
const rubik_80 = Rubik_80s_Fade({ weight: "400" });
function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress  } = useScroll({
    target: containerRef,
    offset: ['start start', 'center start']
  });
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%","-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%","100%"]);
  //  initial={{
  //               opacity:0,
  //           }}
  //           animate={{
  //               opacity:1,
  //           }}
  //           transition={{
  //               duration:2
  //           }}
  return (
   <div className=" w-full h-[200vh] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(80,80,80,0.25),rgba(0,0,0,1))]" ref={containerRef}>
        <div className="w-full h-[100vh] flex items-center relative">
          <motion.div
            className={`fixed top-0 left-0 w-[50%] h-full bg-black text-6xl font-bold uppercase md:text-[20vmin] `}
            style={{ x: leftX, colorScheme: "only light" }}

          >
           
            <h1 className=" text-end w-full bg-gradient-to-b from-green-800  to-white/60 bg-clip-text text-transparent pl-4 top-[50vh] absolute md:top-[37%]">Con <br/></h1>
             <motion.h1 className="md:pl-4  w-full top-[62.5vh] absolute md:top-[55%] md:text-end md:pr-8 bg-gradient-to-b from-white via-white/60 to-transparent bg-clip-text text-transparent " 
            >Pitch</motion.h1>  
          </motion.div>
          <motion.div
            className="fixed top-0 right-0 w-[50%] h-full  bg-black text-6xl font-bold uppercase md:text-[20vmin]"
            style={{ x: rightX }}
          >
            <motion.h1 className="absolute top-[37.5vh] md:top-[17%] w-full md:text-start md:pl-8 right-0 text-transparent bg-clip-text bg-gradient-to-b  from-white via-white/60 to-transparent "
            >Grow</motion.h1>
            <h1 className=" text-start bg-gradient-to-b from-green-800  to-white/60 bg-clip-text text-transparent top-[50vh] absolute md:top-[37%]">nect</h1> 
          </motion.div>
        </div>
        <div
  className={`
    w-full min-h-[100vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden
    
  `}
>
  
  <div className="absolute inset-0 pointer-events-none "></div>

  <div className="relative max-w-4xl w-full z-10  ">
    <h1 className={`${rubik_80.className} text-white font-extrabold leading-tight 
      text-4xl sm:text-5xl lg:text-[9vmin] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]`}> 
      Craft Pitches That Win Attention — And Investment 
    </h1>
    <p className="mt-6 text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">  
      Create clear, compelling, investor-ready pitches that showcase traction, validate messaging, 
      and get you in front of the right people faster.
    </p>
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <button
        className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold shadow-lg shadow-green-900/30 transition-all"
      >
        Get Started — It&apos;s Free
      </button>

      <a
        href="#templates"
        className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg transition-all backdrop-blur-sm"
      >
        Browse Templates
      </a>
    </div>
  </div>
</div>

       
      </div>
  );
}

export default HeroSection;
