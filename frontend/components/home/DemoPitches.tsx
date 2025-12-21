"use client"
import React from 'react'
import Demo from './animated/Demo'

function DemoPitches() {
  return (
    <div className='min-h-screen w-full  px-6'>
        <div className="max-w-7xl mx-auto px-6 py-12">
            <header className="mb-8 text-center">
                <h2 className="md:text-6xl sm:text-4xl font-serif tracking-tight text-white">
                    <span className='text-neutral-500'>Demo</span> Pitches
                </h2>
                <p className="mt-2 text-blue-200 max-w-4xl mx-auto font-sans text-center italic ">
                    A curated set of short idea pitches to inspire your next prototype.
                    Browse the cards below to get a quick sense of the problem, the
                    proposed solution and key tags. Expand to see more demos.
                </p>
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
            
                <section className='h-fit w-full'>
                   
                    <AutoCarousel pitches={pitches} />
<AutoCarousel pitches={pitches} isRight={true}/>
                    <div className="mt-8 flex justify-center">
                        <button
                            type="button"
                            // onClick={() => setShowAll((s) => !s)}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-md  bg-purple-700 text-sm font-semibold hover:bg-transparent hover:border-1 hover:border-b-0 hover:border-purple-800 hover:text-white/50 transition-all duration-1000 font-bold"
                           
                        >
                          Show more
                        </button>
                    </div>
                </section>

           
          )
        }

        function AutoCarousel({ pitches,isRight }: { pitches: Pitch[] ,isRight?:boolean}) {
          const duplicatedPitches = [...pitches, ...pitches];

  return (
    <div className="relative w-full overflow-hidden py-4 group">
  
  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

  <div
    className={`flex w-max ${isRight?"animate-scroll-reverse":"animate-scroll"}
              group-hover:[--state:paused]
      hover:[--state:paused]
               `}
    style={{
      animationDuration: `${pitches.length * 20}s`,
    }}
  >
    {duplicatedPitches.map((p, index) => (
      <div
        key={`${p.id}-${index}`}
        className="w-[350px] px-3 flex-shrink-0"
       
      >
        <Demo
          id={p.id}
          title={p.title}
          summary={p.summary}
          tags={p.tags}
        />
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