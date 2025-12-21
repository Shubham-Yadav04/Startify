import StartupBox from '@/components/startups/StartupBox'
import React from 'react'
import { start } from 'repl'

function page() {
 
  return (
    <div className="flex h-fit">
        <div className="md:ml-[20%] md:w-[75%] flex-1 flex flex-col">
            {/* Startups Container */}
            <div className="flex-1 md:max-w-4xl overflow-y-auto scrollbar-hidden p-6">
                <div className="flex flex-col gap-6">
                    {[...Array(12)].map((_, i) => (
                        <StartupBox key={i} 
                        props={{
                            id:i+"",
                            title:"title",
                            desc:"innovative idea if you want to join watch it ",
                            tags:[]
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