"use client"
import React, { useEffect, useRef } from "react";

type Props={
    
    id:string,
    tags:string[],
    title:string,
    summary:string,


}
function Demo({id,title,tags,summary}:Props) {
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
  };

  const handleMouseLeave = () => {
    const glow = targetRef.current;
    if (!glow) return;

    glow.style.opacity = "0";
  };
  return (
    <article
      key={id}
      className="relative rounded-lg shadow-[rgba(59,130,246,0.4)] shadow-xs p-5 hover:shadow-sm  transition-shadow duration-150 overflow-hidden "
      aria-labelledby={`pitch-${id}-title`}
      ref={containerRef}
      onMouseMove={(e)=>handleMouseMove(e)}
      onMouseLeave={()=>handleMouseLeave()}
    >
    <div className="
          pointer-events-none
          absolute 
          w-[350px] h-[350px] 
          -translate-x-1/2 -translate-y-1/2
          blur-3xl
          opacity-0
          transition-opacity duration-300
        "
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)"
        }} ref={targetRef}></div>
      <h3
        id={`pitch-${id}-title`}
        className="text-lg font-semibold font-sans text-gray-900 dark:text-gray-100"
      >
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-sans italic">
        {summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-800 rounded-full "
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-gray-500">Est. effort: 2-6 wks</div>
        <button
          type="button"
          className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          aria-label={`Explore ${title}`}
        >
          View
        </button>
      </div>
    </article>
  );
}

export default Demo;
