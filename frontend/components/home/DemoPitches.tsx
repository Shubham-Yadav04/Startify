"use client"
import React from 'react'
import Demo from './animated/Demo'
import { motion } from 'motion/react'
function DemoPitches() {
  return (
<div
  className="min-h-screen w-full px-6
             bg-gradient-to-b
             from-white via-slate-50 to-white
             dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]"
>
  <div className="max-w-7xl mx-auto px-6 py-16">
    <header className="mb-12 text-center">
  <h2 className="md:text-6xl sm:text-4xl font-serif tracking-tight">
    <span
      className="bg-clip-text text-transparent
                 bg-gradient-to-br
                 from-emerald-600 via-emerald-500 to-teal-400
                 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-200"
    >
      Demo
    </span>{" "}
    <span className="text-gray-900 dark:text-gray-100">
      Pitches
    </span>
  </h2>

  <p
    className="mt-4 max-w-4xl mx-auto
               font-sans text-center italic leading-relaxed
               text-gray-600
               dark:text-neutral-400"
  >
    A curated set of short idea pitches to inspire your next prototype.
    Browse the cards below to get a quick sense of the problem, the
    proposed solution and key tags. Expand to see more demos.
  </p>

  {/* Subtle gradient divider */}
 <motion.div
  initial={{ opacity: 0, scaleX: 0 }}
  whileInView={{ opacity: 1, scaleX: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mt-10 h-px w-[30vw] mx-auto origin-center
             bg-gradient-to-r from-transparent via-emerald-800/40 to-transparent
             dark:via-emerald-300/30"
/>
</header>

    <PitchGrid />
  </div>
</div>

  )
}
function PitchGrid() {
        const pitches: Pitch[] = [
            {
                id: 'p1',
                title: 'Micro-mentor Matchmaker',
                summary:
                    'AI-powered short mentoring sessions matched by goals, industry and availability. Ideal for rapid skill growth.',
                tags: ['AI', 'Mentorship', 'Marketplace'],
            },
            {
                id: 'p2',
                title: 'Local Skills Barter',
                summary:
                    'Community barter platform to exchange services (e.g., coding for design) without money — trust built through ratings.',
                tags: ['Community', 'Marketplace', 'Sharing Economy'],
            },
            {
                id: 'p3',
                title: 'GreenRoute Planner',
                summary:
                    'Route planner that optimizes trips for lowest carbon output using multimodal transport options and live data.',
                tags: ['Sustainability', 'Routing', 'Data'],
            },
          
        ]

        // const [showAll, setShowAll] = React.useState(false)
        // const visibleCount = 3
        // const visible = pitches.slice(0, visibleCount)

        return (
            
               <section
  className="relative w-full py-12
             bg-gradient-to-b
             from-white via-slate-50 to-white
             dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]"
>
  <AutoCarousel pitches={pitches} />
  <AutoCarousel pitches={pitches} isRight />

  <div className="mt-10 flex justify-center">
    <button
      type="button"
      className="inline-flex items-center gap-2
                 px-6 py-2.5 rounded-lg
                 text-sm font-semibold
                 bg-gradient-to-r from-violet-600 to-purple-500
                 text-white
                 shadow-[0_10px_30px_rgba(139,92,246,0.35)]
                 hover:shadow-[0_15px_45px_rgba(139,92,246,0.5)]
                 hover:scale-[1.02]
                 active:scale-[0.98]
                 transition-all duration-300
                 dark:shadow-[0_10px_30px_rgba(139,92,246,0.25)]"
    >
      Show more
    </button>
  </div>
</section>

          )
        }

      function AutoCarousel({
  pitches,
  isRight,
}: {
  pitches: Pitch[];
  isRight?: boolean;
}) {
  const duplicatedPitches = [...pitches, ...pitches];

  return (
    <div className="relative w-full overflow-hidden py-6 group">
      {/* Left fade */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none
                   bg-gradient-to-r
                   from-white via-white/80 to-transparent
                   dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80"
      />

      {/* Right fade */}
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none
                   bg-gradient-to-l
                   from-white via-white/80 to-transparent
                   dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80"
      />

      <div
        className={`flex w-max ${
          isRight ? "animate-scroll-reverse" : "animate-scroll"
        }
        group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${pitches.length * 20}s`,
        }}
      >
        {duplicatedPitches.map((p, index) => (
          <div
            key={`${p.id}-${index}`}
            className="w-[350px] px-4 flex-shrink-0"
          >
            <div
              className="h-fit rounded-xl
                         bg-white
                         shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                         transition-all duration-300
                         dark:bg-[#111111]
                         dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)]
                         dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.9)]
                         dark:border dark:border-white/5"
            >
              <Demo
                id={p.id}
                title={p.title}
                summary={p.summary}
                tags={p.tags}
                width='[400px]'
               
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


    

    /* Types */
    type Pitch = {
        id: string
        title: string
        summary: string
        tags: string[]
    }
export default DemoPitches