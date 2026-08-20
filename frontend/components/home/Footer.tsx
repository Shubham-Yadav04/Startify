import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black text-gray-700 dark:text-gray-300 border-t border-gray-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-purple-600/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center p-1">
            <Image
              src="/favicon/favicon.svg"
              alt="Startify Logo"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-base">
            Startify
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Startup Validation Platform
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="#discover" className="hover:text-purple-600 dark:hover:text-white transition-colors">
            Discover
          </Link>
          <Link href="#how-it-works" className="hover:text-purple-600 dark:hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#about" className="hover:text-purple-600 dark:hover:text-white transition-colors">
            About
          </Link>
          <a href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-white transition-colors">
            Terms
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Startify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;