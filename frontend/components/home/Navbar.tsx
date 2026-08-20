"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const navLinks = [
  { href: "#discover", label: "Discover" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 px-4 sm:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto py-3">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 px-4 py-1.5 rounded-2xl shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/favicon/favicon.svg"
            alt="Startify Logo"
            width={38}
            height={38}
            className="object-contain"
          />
          <span className="hidden md:block text-2xl italic font-[Poppins] font-black tracking-tight text-gray-900 dark:text-white">
            Startify
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 px-6 py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 shadow-md text-sm font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />}
              <Link
                href={link.href}
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Right: Actions + Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Desktop actions */}
          <div className="flex items-center space-x-3 px-3 py-1.5 rounded-2xl  shadow-md">
            <ThemeToggle />
            <a
              href="http://localhost:8002/oauth2/authorization/google"
              className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white px-2 py-1 transition-colors"
            >
              Login
            </a>
            <a
              href="http://localhost:8002/oauth2/authorization/google"
              className="hidden sm:block px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-sm shadow-purple-500/20 transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              Explore Ideas
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 shadow-md text-gray-700 dark:text-gray-200 transition-colors hover:text-purple-600 dark:hover:text-purple-400"
          >
            {mobileOpen ? (
              /* X icon */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden pointer-events-auto mx-auto mt-2 max-w-sm rounded-2xl bg-white/20 dark:bg-zinc-900/60  backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col ">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-5 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-white/30 dark:hover:bg-white/10 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  
                  {link.label}
                </Link> 
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="flex items-center gap-3 px-5 py-4 ">
              <a
                href="http://localhost:8002/oauth2/authorization/google"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-black/20 dark:border-white/20 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-colors"
              >
                Login
              </a>
              <a
                href="http://localhost:8002/oauth2/authorization/google"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-sm shadow-purple-500/30 transition-all"
              >
                Explore Ideas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;