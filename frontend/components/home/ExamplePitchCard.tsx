"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function ExamplePitchCard() {
  const [upvoted, setUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(842);
  const [wouldUse, setWouldUse] = useState(false);
  const [interestedCount, setInterestedCount] = useState(327);
  const [activeTab, setActiveTab] = useState<"problem" | "solution" | "target" | "prototype">("problem");

  const toggleUpvote = () => {
    if (upvoted) {
      setUpvotes((prev) => prev - 1);
      setUpvoted(false);
    } else {
      setUpvotes((prev) => prev + 1);
      setUpvoted(true);
    }
  };

  const toggleWouldUse = () => {
    if (wouldUse) {
      setInterestedCount((prev) => prev - 1);
      setWouldUse(false);
    } else {
      setInterestedCount((prev) => prev + 1);
      setWouldUse(true);
    }
  };

  return (
    <section id="discover" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-[#050505] dark:to-black text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Interactive Pitch Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            See how product validation works in practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Below is an authentic pitch card format. Experience how founders collect real validation metrics.
          </p>
        </div>

        {/* Pitch Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl shadow-purple-500/5 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Pitch Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/10 dark:bg-purple-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-300 flex items-center justify-center font-bold text-sm">
                AF
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  AutoInvoice AI
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>by Alex Foster</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-medium">
                    Prototype Stage
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-transparent dark:border-zinc-700">
                SaaS & Productivity
              </span>
            </div>
          </div>

          {/* Headline Title */}
          <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            "What if freelancers never had to create invoices manually?"
          </h3>

          {/* Tab Selection */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-gray-100 dark:border-zinc-800 pb-4">
            {[
              { id: "problem", label: "Problem" },
              { id: "solution", label: "Solution" },
              { id: "target", label: "Target Users" },
              { id: "prototype", label: "Prototype / MVP" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-transparent dark:border-zinc-700/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="mt-6 min-h-[120px] p-5 rounded-2xl bg-gray-50 dark:bg-zinc-950/80 border border-gray-200/60 dark:border-zinc-800">
            <AnimatePresence mode="wait">
              {activeTab === "problem" && (
                <motion.div
                  key="problem"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                    The Problem
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Freelancers lose 4-6 hours every week manually calculating billable hours, formatting invoices, drafting follow-up emails for late payments, and reconciling payment gateways across multiple platforms.
                  </p>
                </motion.div>
              )}

              {activeTab === "solution" && (
                <motion.div
                  key="solution"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                    The Proposed Solution
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    AutoInvoice AI connects to your calendar, GitHub, Figma, and Slack to automatically construct itemized invoices when projects complete, sending automated friendly reminders until payment settles.
                  </p>
                </motion.div>
              )}

              {activeTab === "target" && (
                <motion.div
                  key="target"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                    Target Audience
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Independent software developers, UX designers, freelance copywriters, and small agencies managing 3-10 active client retainers monthly.
                  </p>
                </motion.div>
              )}

              {activeTab === "prototype" && (
                <motion.div
                  key="prototype"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                    Interactive Prototype Demo
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-center justify-between">
                    <span>Alpha interactive demo ready. Test automated calendar sync.</span>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 underline cursor-pointer">
                      Launch Demo →
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Interactivity Actions */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Upvote Button */}
              <button
                onClick={toggleUpvote}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  upvoted
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                }`}
              >
                <span>👍</span>
                <span>{upvotes}</span>
              </button>

              {/* Comments counter */}
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 px-3 py-2">
                <span>💬</span>
                <span>126 Comments</span>
              </div>
            </div>

            {/* "I'd use this" Validation Button & Interested Counter */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400">
                {interestedCount} people interested
              </span>

              <button
                onClick={toggleWouldUse}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  wouldUse
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                    : "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20"
                }`}
              >
                {wouldUse ? "✓ You'd use this!" : "I'd use this"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ExamplePitchCard;
