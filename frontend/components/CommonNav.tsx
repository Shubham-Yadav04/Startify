
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
function CommonNav({id}:{id:string |undefined}) {
  return (
    <nav
  className="
    sticky top-0 z-50 w-full
    px-6 py-2
    flex items-center justify-between
    backdrop-blur-sm
    border-b border-slate-200/60
    dark:border-white/10
    shadow-sm
    transition-colors
  "
>
  {/* Brand */}
<Link href='/' className='text-2xl font-bold tracking-wide flex items-center space-x-4'><Image 
src={"../favicon/favicon.svg"} alt="Logo" width={30} height={50}></Image><span className='hidden md:flex'>Startify</span></Link>

  {/* Actions */}
  <div className="flex items-center gap-4">
    <ThemeToggle />

    <Link
      href={`/profile/${id || 1}`}
      className="
        h-9 w-9 rounded-full
        flex items-center justify-center
        text-lg
        bg-slate-100
        dark:bg-white/10
        hover:bg-slate-200
        dark:hover:bg-white/20
        transition
      "
      aria-label="Profile"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </Link>
  </div>
</nav>

  )
}

export default CommonNav