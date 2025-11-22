import React from 'react'

function InfoSection() {
return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 px-6 bg-neutral-900">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: headline, description, features, CTAs */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Showcase your idea. Reach the right investors.
                </h1>

                <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-xl">
                    A platform to advertise your startup idea and make it visible to small- and mid-cap investors — and potentially VCs.
                    Create concise listings, attach pitch decks, and get noticed by the right people.
                </p>

                <ul className="mt-6 space-y-3">
                    <li className="flex items-start space-x-3">
                        <span className="flex-none bg-emerald-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            1
                        </span>
                        <span className="text-neutral-300">Create a clear listing with traction, ask, and relevant tags.</span>
                    </li>

                    <li className="flex items-start space-x-3">
                        <span className="flex-none bg-amber-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            2
                        </span>
                        <span className="text-neutral-300">Match with investors filtered by stage and sector.</span>
                    </li>

                    <li className="flex items-start space-x-3">
                        <span className="flex-none bg-sky-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            3
                        </span>
                        <span className="text-neutral-300">Share pitch decks, receive feedback, and schedule meetings.</span>
                    </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                    <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium shadow">
                        Pitch Idea →
                    </button>
                </div>
            </div>

            {/* Right: preview card / illustration */}
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-xl p-5 shadow-lg">
                    <div className="h-48 sm:h-56 bg-neutral-900 rounded-md flex flex-col justify-center items-start p-4">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <div className="text-neutral-200 font-semibold">Acme Analytics</div>
                                <div className="text-xs text-neutral-400 mt-1">Seed · SaaS · $120K MRR</div>
                            </div>
                            <div className="text-xs text-neutral-400">2d ago</div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full">#SaaS</span>
                            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full">#Analytics</span>
                            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full">#Seed</span>
                        </div>
                    </div>

                    <div className="mt-4 text-neutral-400 text-sm">
                        Example preview of a listing — title, short traction, tags and CTA. This card is responsive and hides detailed images on small screens.
                    </div>

                    <div className="mt-4 flex items-center justify-start">
                        <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded-md text-sm font-semibold">
                            View Listing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default InfoSection