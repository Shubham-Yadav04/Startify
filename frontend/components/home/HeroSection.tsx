"use client";

import { motion } from "motion/react";
import Link from "next/link";

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage:
          "linear-gradient(181.2deg, rgba(181,239,249,1) 10.5%, rgba(254,254,254,1) 86.8%)",
      }}
    >
      {/* Dark theme background override */}
      <div className="absolute inset-0 bg-black opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Centered Soft Purple Glow for Dark Theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-0 dark:opacity-40 blur-[130px] rounded-full transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.45) 0%, rgba(126,34,206,0.15) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />



      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/80 dark:bg-purple-950/60 text-slate-800 dark:text-purple-300 border border-slate-300/80 dark:border-purple-800/50 mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-purple-400 animate-pulse" />
          Startup Validation & Early Customer Discovery
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white"
        >
          Build it.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 dark:from-purple-300 dark:to-indigo-200 drop-shadow-sm">
            Don't guess.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-700 dark:text-gray-300 leading-relaxed font-medium"
        >
          Put your startup idea in front of real people, get honest feedback, and find your first users before you spend months building.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="http://localhost:8002/oauth2/authorization/google"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white shadow-lg shadow-slate-900/15 dark:shadow-purple-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Pitch Your Idea
          </a>
          <Link
            href="#discover"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-semibold bg-white/90 hover:bg-white text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-gray-200 border border-slate-300/90 dark:border-white/10 backdrop-blur-md shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Ideas
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 text-sm italic font-semibold text-slate-600 dark:text-gray-400"
        >
          "Built for founders. Powered by users."
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
