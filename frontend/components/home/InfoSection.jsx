
import InfoCard from './animated/InfoCard'

function InfoSection() {
return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 px-6 ">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10">
            {/* Left: headline, description, features, CTAs */}
            <div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-neutral-200 leading-tight  ">
                    Showcase your idea. Reach the right investors.
                </h1>

                <p className="mt-4 text-neutral-400 text-xm md:text-base max-w-xl">
                    A platform to advertise your startup idea and make it visible to small- and mid-cap investors — and potentially VCs.
                    Create concise listings, attach pitch decks, and get noticed by the right people.
                </p>

                <ul className="mt-6 space-y-3 text-[12px] md:text-sm">
                    <li className="flex items-start space-x-3 ">
                        <span className="flex-none bg-emerald-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            1
                        </span>
                        <span className="text-neutral-300">Create a clear listing with traction, ask, and relevant tags.</span>
                    </li>

                    <li className="flex items-start space-x-3">
                        <span className="flex-none bg-amber-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            2
                        </span>
                        <span className="text-neutral-300">Match with investors filtered by stage and sector.</span>
                    </li>

                    <li className="flex items-start space-x-3">
                        <span className="flex-none bg-sky-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
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

           <InfoCard/>
        </div>
    </div>
)
}

export default InfoSection