"use client";

import { motion } from "motion/react";
import Link from "next/link";

const founderBullets = [
  "Present your startup idea clearly with problem & solution details",
  "Find early customers & adopters before writing thousands of lines of code",
  "Get honest, unfiltered feedback from people who experience the problem",
  "Discover what features users actually care about",
  "Build a passionate early community & waitlist",
  "Validate real market demand before scaling",
];

function TargetAudienceSection() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-200/60 dark:border-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* For Founders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col justify-between shadow-md shadow-slate-900/5 dark:shadow-none relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-purple-400">
                For Founders
              </span>
              <h3 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Your idea deserves an audience.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-gray-400 font-medium">
                Stop building based on guesswork. Put your pitch in front of the people you're actually building for.
              </p>

              <ul className="mt-8 space-y-3.5">
                {founderBullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 dark:text-gray-300 font-medium">
                    <span className="flex-none w-5 h-5 rounded-full bg-slate-900 dark:bg-purple-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="http://localhost:8002/oauth2/authorization/google"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Pitch Your Idea
              </a>
            </div>
          </motion.div>

          {/* For Users */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col justify-between shadow-md shadow-slate-900/5 dark:shadow-none relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
                For Early Adopters & Users
              </span>
              <h3 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Help shape what gets built.
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed font-medium">
                Discover interesting upcoming products, tell founders what you actually think, suggest key improvements, and get exclusive early access to products you're excited about.
              </p>

              <div className="mt-8 space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold">
                    💡
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">
                    Discover cutting-edge prototypes & MVPs early
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold">
                    💬
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">
                    Provide real product feedback directly to creators
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold">
                    🚀
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">
                    Join waitlists & get founder perks
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="#discover"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-white hover:bg-slate-50 text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-slate-300 dark:border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Ideas
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TargetAudienceSection;
