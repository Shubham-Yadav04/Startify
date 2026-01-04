"use client"
import { useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useEffect, useRef ,useState} from 'react'
import {motion} from 'motion/react'

import { AnimatePresence } from 'framer-motion';


function InfoCard() {
    const containerRef=useRef<HTMLDivElement | null>(null);
    const childRef=useRef<HTMLDivElement | null>(null);
const [index,setIndex]= useState(0)
    const motionX=useMotionValue(0);
    const motionY=useMotionValue(0);

    const springX= useSpring(motionX,{
        damping:10,
        stiffness:100
    })
    const springY= useSpring(motionY,
        {
        damping:10,
        stiffness:100
    }
    )
    const rotX=useTransform(springY,[-0.5,0.5],["-15deg", "15deg"])
    const rotY=useTransform(springX,[-0.5,0.5],["-15deg", "15deg"])
    const handelMouseMove=(e:React.MouseEvent)=>{
const container= containerRef.current;
const child= childRef.current;
if(!container || !child) return 
const rect= container.getBoundingClientRect();
const mouseX = e.clientX - rect.left;
const mouseY = e.clientY - rect.top;
const x=mouseX/rect.width -0.5;
const y=mouseY/rect.height -0.5;
motionX.set(x);
motionY.set(y)
    }

    const handleMouseLeave=()=>{
motionX.set(0);
motionY.set(0)
    }
    const demoPitchess = [
        {
            id: 'p1',
            title: 'Micro-mentor Matchmaker',
            desc: 'AI-powered short mentoring sessions matched by goals, industry and availability. Ideal for rapid skill growth.',
            tags: ['AI', 'Mentorship', 'Marketplace'],
        },
        {
            id: 'p2',
            title: 'Local Skills Barter',
            desc: 'Community barter platform to exchange services (e.g., coding for design) without money — trust built through ratings.',
            tags: ['Community', 'Marketplace', 'Sharing Economy'],
        },
    ];

   
    const toggleContent = () => {
        setIndex(prev=>(prev + 1) % demoPitchess.length);
    };

    useEffect(() => {
        const interval = setInterval(toggleContent, 8000);
        return () => clearInterval(interval);
        },[])

  return (
     <motion.div className="flex items-center justify-center preserve-3d " 
     ref={containerRef} onMouseMove={handelMouseMove} onMouseLeave={handleMouseLeave}
                style={{
                    rotateX:rotX,
                    transformStyle:"preserve-3d",
                    rotateY:rotY
                }}
     >
                {/* ... inside return ... */}
                
                    <motion.div
  key={demoPitchess[index].id}
  ref={childRef}
  className="
    w-full max-w-md rounded-xl p-5
    backdrop-blur-md
    bg-gradient-to-br
    from-white via-slate-50 to-white
    shadow-[0_20px_50px_rgba(0,0,0,0.12)]
    hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
    transition-shadow duration-300

    dark:from-[#111] dark:via-[#000] dark:to-[#222]
    dark:shadow-[0_25px_70px_rgba(0,0,0,0.7)]
    dark:hover:shadow-[0_35px_90px_rgba(0,0,0,0.9)]
    card-l-cut-frame
  "
  style={{
    transformStyle: "preserve-3d",
    transform: "translateZ(55px)",
  }}
>
                 
                        <InfoContent
                            key={demoPitchess[index].id}
                            title={demoPitchess[index].title}
                            desc={demoPitchess[index].desc}
                            tags={demoPitchess[index].tags}
                        />

                        <div className="mt-4 flex items-center justify-start">
                            <button
  className="
    px-4 py-2 rounded-md text-sm font-semibold
    bg-emerald-500 hover:bg-emerald-400
    text-black
    shadow-[0_8px_20px_rgba(16,185,129,0.35)]
    transition

    dark:shadow-[0_8px_20px_rgba(16,185,129,0.25)]
  "
>
  View Listing
</button>
                        </div>
                    </motion.div>
              
            </motion.div>
  )
}

export default InfoCard

type Props={
title:string,
tags:string[],
desc:string
}
function InfoContent(props:Props){
    const animation={
        initial:{
            opacity:0,
            y:20
        },
        animate:{
            opacity:1,
            y:0
        }
        ,
        transition:{
            duration:1
        }
    }
    return(
 <>
<div
  className="
    h-48 sm:h-56 rounded-md p-4
    flex flex-col justify-center items-start

    bg-white
    border border-slate-200
    shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]

    dark:bg-[#111]
    dark:border-white/5
  "
>   
                        <div className="w-full flex items-center justify-between">
  <motion.div {...animation}>
    <div className="font-semibold text-slate-800 dark:text-neutral-200">
      {props.title}
    </div>

    <div className="text-xs mt-1 text-slate-500 dark:text-neutral-400">
      Seed · SaaS · $120K MRR
    </div>
  </motion.div>

  <div className="text-xs text-slate-400 dark:text-neutral-400">
    2d ago
  </div>
</div>

                        <motion.div
  className="mt-4 flex flex-wrap gap-2"
  {...animation}
>
  {props.tags?.map((tag, i) => (
    <span
      key={i}
      className="
        text-xs px-2 py-1 rounded-full
        bg-slate-100 text-slate-600
        border border-slate-200

        dark:bg-neutral-800
        dark:text-neutral-300
        dark:border-white/5
      "
    >
      {tag}
    </span>
  ))}
</motion.div>
                    </div>

                   <motion.div
  {...animation}
  className="
    mt-4 text-sm leading-relaxed
    text-slate-600
    dark:text-neutral-400
  "
>
  {props.desc}
</motion.div>
                    </>
 
    )
}