"use client"
import React, { useEffect, useRef } from "react";

type Props={
    
    id:string,
    tags:string[],
    title:string,
    summary:string,


}
function Demo({id,title,tags,summary}:Props) {
  const [hovered,setHovered]=React.useState<boolean>(false);
const containerRef=useRef<HTMLDivElement | null>(null)
    const targetRef=useRef<HTMLDivElement | null>(null);
   const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const container = containerRef.current;
    const glow = targetRef.current;

    if (!container || !glow) return;

    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.transform = `translate(${x}px, ${y}px)`;
    glow.style.opacity = "1";
    setHovered(true)
  };

  const handleMouseLeave = () => {
    const glow = targetRef.current;
    setHovered(false)
    if (!glow) return;

    glow.style.opacity = "0";
    

  };
  const handleClick=()=>{
    window.location.href=`${process.env.FRONTEND_URL || ""}/startup/${id}`
  }
  return (
    <article
      key={id}
      className="relative w-[400px] min-w-[300px] h-[300px] rounded-lg shadow-[1px_3px_8px_rgba(36,120,255,0.25)]  p-5    duration-150 overflow-hidden w-full bg-gradient-to-br
from-[#6f90c63a]
to-transparent"
      aria-labelledby={`pitch-${id}-title`}
      ref={containerRef}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      onClick={()=>handleClick()}
      // onMouseMove={(e)=>handleMouseMove(e)}
      // onMouseLeave={()=>handleMouseLeave()}
    >
    
      
      
    
    <div className=" relative 
   
    h-full flex flex-col  gap-5
            text-white

        "
        ref={targetRef}>
      <h3
        id={`pitch-${id}-title`}
        className="text-lg font-semibold font-sans text-gray-900 dark:text-gray-100"
      >
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-sans italic">
        {summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 justify-start w-full">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-neutral-400 text-indigo-800 rounded-full "
          >
            {t}
          </span>
        ))}
      </div>

</div>
 {    
hovered && <div className="absolute inset-0 flex flex-col justify-center bg-black/20 backdrop-blur-[1px] h-full z-10 cursor-pointer">
        
        <h1
        
          className="text-md px-3 py-1 text-white rounded-md  transition-colors w-fit mx-auto mb-3 "
          aria-label={`Explore ${title}`}
        >
          Click to Explore
        </h1>
      </div>
     
 }
    </article>
  );
}

export default Demo;
