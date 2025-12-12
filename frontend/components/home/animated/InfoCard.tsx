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
                       
                        className="w-full max-w-md bg-gradient-to-br from-[#111] via-[#000] to-[#222] backdrop-blur-md rounded-xl p-5 card-l-cut-frame hover:shadow-[2px_5px_10px_2px_rgba(65,50,23,0.6)]"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "translateZ(55px)"
                        }}
                        ref={childRef}
                    >
                 
                        <InfoContent
                            key={demoPitchess[index].id}
                            title={demoPitchess[index].title}
                            desc={demoPitchess[index].desc}
                            tags={demoPitchess[index].tags}
                        />

                        <div className="mt-4 flex items-center justify-start">
                            <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded-md text-sm font-semibold">
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
<div className="h-48 sm:h-56 bg-[#111] rounded-md flex flex-col justify-center items-start p-4" 
                    
                    >
                        <div className="w-full flex items-center justify-between">
                            <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}  >
                                <div className="text-neutral-200 font-semibold">{props.title}</div>
                                <div className="text-xs text-neutral-400 mt-1">Seed · SaaS · $120K MRR</div>
                            </motion.div>
                            <div className="text-xs text-neutral-400">2d ago</div>
                        </div>

                        <motion.div className="mt-4 flex flex-wrap gap-2"  initial={animation.initial} animate={animation.animate} transition={animation.transition} >
                            {
                            props.tags?.map((tag,i)=>
<span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full" key={i}>{tag}</span>
                                )
                            }
                            
                        </motion.div>
                    </div>

                    <motion.div  initial={animation.initial} animate={animation.animate} transition={animation.transition} className="mt-4 text-neutral-400 text-sm">
                        {props.desc}
                    </motion.div>
                    </>
 
    )
}