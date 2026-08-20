"use client";

import { motion } from "motion/react";

function ProblemSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-200/60 dark:border-white/5 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-purple-400">
            The Problem
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Don't build in the dark.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md shadow-slate-900/5 dark:shadow-none relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle accent glow inside card */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-400/20 dark:bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <p className="text-lg sm:text-xl text-slate-700 dark:text-gray-300 font-medium">
            Most founders start with a single assumption:
          </p>

          <blockquote className="my-6 text-2xl sm:text-3xl font-extrabold text-teal-900 dark:text-purple-300 italic">
            "People will use this."
          </blockquote>

          <p className="text-base sm:text-lg text-slate-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            They spend months developing an MVP in isolation, only to discover that users don't actually have the problem, the proposed solution isn't useful, or there simply isn't enough demand.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="font-bold text-slate-900 dark:text-white">
              Assumptions aren't validation.
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="text-teal-800 dark:text-purple-400 font-bold">
              Get your idea in front of real future customers first.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemSection;
