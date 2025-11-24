"use client"
import React from 'react'
import Demo from './animated/Demo'

function DemoPitches() {
  return (
    <div className='h-screen w-full bg-[#0A0A0A] px-6'>
        <div className="max-w-7xl mx-auto px-6 py-12">
            <header className="mb-8 text-center">
                <h2 className="md:text-6xl sm:text-4xl font-serif tracking-tight text-green-800">
                    Demo Pitches
                </h2>
                <p className="mt-2 text-gray-400 max-w-4xl mx-auto font-sans text-center italic ">
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

        const [showAll, setShowAll] = React.useState(false)
        const visibleCount = 3
        const visible = pitches.slice(0, visibleCount)

        return (
            
                <section className='h-fit w-full'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visible.map((p,i) => 
                            (  <Demo key={i} id={p.id} title={p.title} summary={p.summary} tags={p.tags}/>   
                               )                 
                        )}
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setShowAll((s) => !s)}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-md  bg-purple-600 text-sm font-semibold hover:bg-purple-900 transition"
                            aria-expanded={showAll}
                        >
                            {showAll ? 'Show less' : `Show more`}
                        </button>
                    </div>
                </section>
        )
    }

    /* Types */
    type Pitch = {
        id: string
        title: string
        summary: string
        tags: string[]
    }
export default DemoPitches