
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'

function CommonNav({id}:{id:string |undefined}) {
  return (
     <nav className={`px-6 py-6 flex items-center justify-between h-[20px] sticky top-0 w-full backdrop-blur `}>
                
                <Link href="/" className='text-2xl font-bold'>Startify</Link>
                <div className='flex items-center'>
              <ThemeToggle/>
                <button className="text-2xl cursor-pointer" > <a href={`/profile/${id || 1}`}>👤</a></button>
                </div>
            </nav>
  )
}

export default CommonNav