"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
function Navlinks() {
  const [active, setActive] = useState(0);
  return (
    <motion.ul className="flex space-x-6 itmes-center " onMouseLeave={()=>setActive(0)}>
      <motion.li className="relative transition-all duration-500"
    onMouseEnter={()=>setActive(1)}
      >
        <Link href="#about" className={`${active===1?"text-black":"text-white"} relative z-10 md:text-sm text-base font-semibold transition-all duration-500 p-1 `}>
          About
        </Link>
        {active===1 && 
        <motion.span
          className="absolute inset-0 rounded bg-green-600 w-full h-full rounded-md"
          layoutId="navLinks"
          
          transition={{ duration: 0.3 }}
        ></motion.span>
}
      </motion.li>
      <motion.li className="relative" onMouseEnter={()=>setActive(2)}>
        <Link href="/startups" className={`${active===2?"text-black":"text-white"} relative z-10 md:text-sm text-base font-semibold transition-all duration-500 p-1 `}>
          Ideas
        </Link>
        { active===2 && 
        <motion.span
          className="absolute inset-0 rounded bg-white w-full h-full rounded-md"
          layoutId="navLinks"
          transition={{ duration: 0.3 }}
          onMouseEnter={()=>setActive(2)}
        ></motion.span>
}
      </motion.li>
    </motion.ul>
  );
}

export default Navlinks;
