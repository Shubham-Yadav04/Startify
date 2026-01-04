
import React from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Startify - Startups",
  description: "Explore a diverse collection of innovative startups. Discover emerging companies, learn about their missions, and find your next investment or inspiration in the startup ecosystem.",
};

function layout({children,sidebar,navbar}:{children:React.ReactNode,sidebar:React.ReactNode,navbar:React.ReactNode}) {
  return (
    <div className='bg-white relative  dark:text-white dark:bg-gradient-to-br dark:from-black/90 dark:via-[#111] dark:to-[#090909] '>
        {navbar}
        {children}
        <div className='fixed top-[40px] left-0 w-[20%] h-screen hidden md:inline-block'>
            {sidebar}
        </div>
    </div>
  )
}

export default layout