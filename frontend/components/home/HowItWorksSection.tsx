"use client";

import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Pitch",
    desc: "Explain your problem, proposed solution, target audience, and current stage with a clear startup listing.",
    badge: "For Founders",
  },
  {
    step: "02",
    title: "Discover",
    desc: "Real users, early adopters, and industry builders explore products and vote on ideas they genuinely need.",
    badge: "For Community",
  },
  {
    step: "03",
    title: "Validate",
    desc: "Collect upvotes, comments, feature requests, and waitlist signups to prove demand before heavy development.",
    badge: "For Growth",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-200/60 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-purple-400"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Three steps to product-market fit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-700 dark:text-gray-400 font-medium"
          >
            A simple, structured framework designed around rapid validation and customer discovery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-teal-400 dark:hover:border-purple-600 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-teal-800/30 dark:text-purple-400/30 group-hover:text-teal-700 dark:group-hover:text-purple-400 transition-colors">
                  {item.step}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-purple-950/80 text-teal-800 dark:text-purple-300 border border-teal-200 dark:border-purple-800/40">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-gray-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
