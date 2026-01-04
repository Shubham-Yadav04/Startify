import StartupBox from '@/components/startups/StartupBox'
import React from 'react'
import { start } from 'repl'

function page() {
 
  return (
   <div
  className="
    flex h-fit w-full
    bg-slate-50
    dark:bg-[#0b0b0b]
  "
>
  <div
    className="
      md:ml-[20%] md:w-[75%] flex-1 flex flex-col
      border-l border-slate-200
      dark:border-white/10
    "
  >
    {/* Startups Container */}
    <div
      className="
        flex-1 md:max-w-4xl
        overflow-y-auto scrollbar-hidden
        p-6 sm:p-8

        bg-white
        dark:bg-[#0f0f0f]
      "
    >
      {/* Optional subtle header spacing */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-neutral-200">
          Startup Listings
        </h2>
        <p className="text-sm text-slate-500 dark:text-neutral-400 mt-1">
          Discover ideas seeking early traction and funding
        </p>

        <div className="mt-4 h-px w-full
                        bg-gradient-to-r
                        from-transparent via-slate-300/60 to-transparent
                        dark:via-white/10" />
      </div>

      <div className="flex flex-col gap-5">
        {[...Array(12)].map((_, i) => (
          <StartupBox
            key={i}
            props={{
              id: i + "",
              title: "title",
              desc: "innovative idea if you want to join watch it",
              tags: [],
            }}
          />
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default page