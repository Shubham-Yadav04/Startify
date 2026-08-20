"use client";

import { motion } from "motion/react";

function WhyAndCTASection() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white/60 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-200/60 dark:border-white/5 overflow-hidden backdrop-blur-sm">
      {/* Centered Soft Purple Glow */}
      <div
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none opacity-0 dark:opacity-30 blur-[120px] rounded-full transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.35) 0%, rgba(126,34,206,0.1) 60%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Why This Exists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-purple-400">
            Why This Exists
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Great products start with real problems.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            We believe founders shouldn't have to build for months in isolation before discovering whether people actually want what they're building. Validation should happen on day one.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-slate-300 dark:bg-purple-800/40 mx-auto mb-20" />

        {/* Final CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/90 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl shadow-slate-900/10 dark:shadow-none backdrop-blur-md"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-teal-900 dark:text-purple-400">
            Have an idea people might need?
          </h3>
          <h4 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Don't just build it.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 dark:from-purple-300 dark:to-indigo-200 drop-shadow-sm">
              Test it.
            </span>
          </h4>

          <div className="mt-8 flex justify-center">
            <a
              href="http://localhost:8002/oauth2/authorization/google"
              className="px-8 py-4 rounded-xl text-base font-bold bg-slate-900 hover:bg-slate-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Pitch Your Idea
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyAndCTASection;
