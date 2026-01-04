"use client";
import { Rubik_80s_Fade } from "next/font/google";
import { scale, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

const rubik_80 = Rubik_80s_Fade({ weight: "400" });

function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, .5], [1, 0.5]);
const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[200vh] overflow-hidden bg-white dark:bg-[#030303]"
    >
      {/* ================= Animated Light Background ================= */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 dark:hidden"
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 50%",
            "0% 100%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 80%, rgba(204, 249, 220, 0.36), transparent 80%),
            linear-gradient(180deg, #ffffff, white 40%, #d1fae5 80%)
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* ================= Split Panels ================= */}
      <div className="relative z-10 w-full h-[100vh] flex items-center ">
        {/* Left Panel */}
        <motion.div
          className="fixed top-0 left-0 w-[50%] h-full text-6xl font-bold uppercase md:text-[20vmin]
                     bg-gradient-to-br from-gray-300/90 to-white 
                      dark:bg-gradient-to-r dark:from-[#111] dark:to-black dark:shadow-none"
          style={{ x: leftX ,opacity:opacity}}
        >
          <h1
            className="absolute top-[50vh] md:top-[37%] w-full text-end 
                       bg-clip-text text-transparent
                       bg-gradient-to-b from-emerald-800 via-green-800 to-green-200
                       dark:from-green-800 dark:to-white/90"
          >
            Con
          </h1>

          <motion.h1
            className="absolute top-[62.5vh] md:top-[55%] w-full text-end pr-8
                       bg-clip-text text-transparent
                       bg-gradient-to-b from-slate-900 via-gray-700 to-gray-200
                       dark:from-white dark:via-white/80"
          >
            Pitch
          </motion.h1>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="fixed top-0 right-0 w-[50%] h-full text-6xl font-bold uppercase md:text-[20vmin]
                    bg-gradient-to-bl from-gray-300/90 to-white 
                     dark:bg-gradient-to-l dark:from-[#111] dark:to-black dark:shadow-none"
          style={{ x: rightX ,opacity:opacity}}
        >
          <motion.h1
            className="absolute top-[37.5vh] md:top-[17%] w-full text-start pl-8
                       bg-clip-text text-transparent
                       bg-gradient-to-t from-slate-900 via-gray-700 to-gray-200
                       dark:from-white dark:via-white/80"
          >
            Grow
          </motion.h1>

          <h1
            className="absolute top-[50vh] md:top-[37%] 
                       bg-clip-text text-transparent
                       bg-gradient-to-b from-emerald-800 via-green-800 to-green-200
                       dark:from-green-800 dark:to-white/90"
          >
            nect
          </h1>
        </motion.div>
      </div>

      {/* ================= Hero Content ================= */}
      <div className="relative  w-full min-h-[100vh] flex items-center justify-center px-6">
        <motion.div
          className="relative w-full max-w-4xl h-[100vh] flex flex-col justify-center items-center text-center
                     rounded-3xl
                      backdrop-blur-xl
                     dark:bg-black/40 dark:shadow-none"
          style={{scale}}
        >
          <h1
            className="font-black leading-tight
                       text-4xl sm:text-5xl lg:text-[9vmin]
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500
                       dark:from-white dark:to-white/60"
          >
            Craft Pitches That Win Attention — And Investment
          </h1>

          <p className="mt-6 max-w-2xl text-gray-800 leading-relaxed dark:text-neutral-500 font-bold">
            Create clear, compelling, investor-ready pitches that showcase traction,
            validate messaging, and get you in front of the right people faster.
          </p>

          <div className="mt-10">
            <button
              className="px-7 py-3 rounded-xl font-semibold
                         bg-gradient-to-r from-green-600 to-emerald-500
                         hover:to-emerald-400
                         text-white
                         shadow-[0_15px_40px_rgba(34,197,94,0.35)]
                         transition-all"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
