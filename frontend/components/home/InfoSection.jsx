
import InfoCard from './animated/InfoCard'

function InfoSection() {
return (
    <div
  className="w-full min-h-screen flex items-center justify-center py-12 md:px-6
  bg-gradient-to-br
             from-[#F1FDF6]  to-white
             dark:bg-gradient-to-b
             
             dark:from-[#0b0f0d] dark:via-[#0f1412] dark:to-[#0b0f0d]"
>
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10">
    {/* Left Content */}
    <div>
      <h1
        className="text-2xl md:text-4xl font-extrabold leading-tight
                   text-slate-700
                   dark:text-neutral-100"
      >
        Showcase your idea. Reach the right investors.
      </h1>

      <p
        className="mt-4 max-w-xl
                   text-neutral-600
                   dark:text-neutral-400
                   text-xm md:text-base"
      >
        A platform to advertise your startup idea and make it visible to small-
        and mid-cap investors — and potentially VCs. Create concise listings,
        attach pitch decks, and get noticed by the right people.
      </p>
      <div className="mt-6 h-px w-[55%] mx-auto
                bg-gradient-to-r
                from-transparent via-emerald-400/40 to-transparent
                dark:via-emerald-300/30" />

      <ul className="mt-6 space-y-3 text-[12px] md:text-sm">
        <li className="flex items-start space-x-3">
          <span
            className="flex-none w-6 h-6 rounded-full
                       flex items-center justify-center text-sm font-semibold
                       bg-emerald-400 text-black
                       dark:bg-emerald-500"
          >
            1
          </span>
          <span className="italic text-black dark:text-neutral-300">
            Create a clear listing with traction, ask, and relevant tags.
          </span>
        </li>

        <li className="flex items-start space-x-3">
          <span
            className="flex-none w-6 h-6 rounded-full
                       flex items-center justify-center text-sm font-semibold
                       bg-amber-400 text-black
                       dark:bg-amber-500"
          >
            2
          </span>
          <span className="italic text-black dark:text-neutral-300">
            Match with investors filtered by stage and sector.
          </span>
        </li>

        <li className="flex items-start space-x-3">
          <span
            className="flex-none w-6 h-6 rounded-full
                       flex items-center justify-center text-sm font-semibold
                       bg-sky-400 text-black
                       dark:bg-sky-500"
          >
            3
          </span>
          <span className="italic text-black dark:text-neutral-300">
            Share pitch decks, receive feedback, and schedule meetings.
          </span>
        </li>
      </ul>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
        <button
          className="px-5 py-3 rounded-md font-medium
                     bg-indigo-600 hover:bg-indigo-500
                     text-white
                     shadow-[0_10px_30px_rgba(79,70,229,0.35)]
                     dark:shadow-[0_10px_30px_rgba(79,70,229,0.25)]
                     transition"
        >
          Pitch Idea →
        </button>
      </div>
    </div>

    {/* Right Card */}
    <InfoCard />
  </div>
</div>

)
}

export default InfoSection