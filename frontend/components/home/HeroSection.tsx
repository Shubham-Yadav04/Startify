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
  return (
   <div className=" w-full h-[200vh] overflow-hidden" ref={containerRef}>
        <div className="w-full h-[100vh] flex items-center">
          <motion.div
            className={`fixed top-0 left-0 w-[50%] h-[100vh] flex flex-col  z-20 bg-black`}
            style={{ x: leftX }}
          >
            <motion.h1 className="text-end text-5xl md:text-[20vmin] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-b  from-white via-white/50 to-transparent w-full top-[46vh] relative md:top-[50%]" 
            initial={{
                opacity:0,
            }}
            
            animate={{
                opacity:1,
            }}
            transition={{
                duration:2
            }}
            ><span className="bg-gradient-to-b from-green-800  to-white/60 bg-clip-text text-transparent pl-4  ">Con <br/></span><span className="pr-9 w-full">Pitch</span></motion.h1>
          </motion.div>
          <motion.div
            className="fixed top-0 right-0 w-[50%] h-[100vh] flex flex-col  z-20  bg-black "
            style={{ x: rightX }}
          >
            <motion.h1 className="relative  top-[40.5vh] md:top-[30%] right-0 text-5xl md:text-[20vmin] font-bold text-transparent bg-clip-text bg-gradient-to-b  from-white via-white/60 to-transparent uppercase"
             initial={{
                opacity:0,
            }}
            animate={{
                opacity:1,
            }}
            transition={{
                duration:2
            }}
            ><span className="pl-6">Grow</span><br /><span className="bg-gradient-to-b from-green-800  to-white/60 bg-clip-text text-transparent">nect</span> </motion.h1>
          </motion.div>
        </div>
         <div className={` w-full h-[100vh] flex flex-col items-center justify-center text-center px-6`}>
          <div className="max-w-4xl w-full">
            <h2 className={`${rubik_80.className} text-3xl sm:text-4xl md:text-5xl lg:text-[6vmin] font-extrabold leading-tight text-white`}>
              Turn Your Idea Into a Pitch Investors and Customers Remember
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-base text-neutral-400 max-w-2xl mx-auto italic">
              Craft clear, compelling pitches tailored to your audience — validate messaging, showcase traction, and get in front of the right people faster.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
          className="inline-flex items-center justify-center px-2 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md text-sm md:text-base font-bold"
              >
          Get Started — It&apos;s Free
              </button>
              <a
          href="#templates"
          className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-md text-sm hover:border-yellow-600 transition-all "
              >Browse Templates
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HeroSection;
