"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 px-4 sm:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto py-3">
        {/* Left: Logo Box */}
        <Link
          href="/"
          className="flex items-center space-x-3 px-4 py-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/favicon/favicon.svg"
            alt="Startify Logo"
            width={38}
            height={38}
            className="object-contain"
          />
          <span className="text-2xl italic font-[Poppins] font-black tracking-tight text-gray-900 dark:text-white">
            Startify
          </span>
        </Link>

        {/* Center: Separated Nav Links Box with Backdrop Blur */}
        <div className="hidden md:flex items-center space-x-6 px-6 py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 shadow-md text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link
            href="#discover"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Discover
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
          <Link
            href="#how-it-works"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            How It Works
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
          <Link
            href="#about"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Right: Actions Box */}
        <div className="flex items-center space-x-3 px-3 py-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 shadow-md">
          <ThemeToggle />
          <a
            href="http://localhost:8002/oauth2/authorization/google"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white px-2 py-1 transition-colors"
          >
            Login
          </a>
          <a
            href="http://localhost:8002/oauth2/authorization/google"
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-sm shadow-purple-500/20 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Explore Ideas
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;