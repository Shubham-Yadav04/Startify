import Demo from "@/components/home/animated/Demo"
import CommanNav from "../../../components/CommonNav"
function page() {
  return (
    <div
  className="
    min-h-screen  px-4 md:px-8
    bg-slate-50
    dark:bg-[#0b0b0b]
    text-slate-900
    dark:text-neutral-200
  "
>
  <CommanNav />

  {/* Profile Card */}
  <div
    className="
      max-w-4xl mx-auto mb-10
      rounded-xl p-6 md:p-8
      bg-white
      dark:bg-[#111]
      border border-slate-200
      dark:border-white/10
      shadow-sm
      dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]
    "
  >
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Avatar */}
      <div
        className="
          w-24 h-24 md:w-32 md:h-32 rounded-full flex-shrink-0
          bg-gradient-to-br from-indigo-500 via-blue-500 to-emerald-500
          shadow-md
        "
      />

      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          John Doe
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-neutral-400">
          john@example.com
        </p>

        <p className="mt-4 max-w-xl text-slate-600 dark:text-neutral-400 leading-relaxed">
          Passionate entrepreneur and startup enthusiast with a vision to innovate.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button
            className="
              inline-flex items-center gap-2
              px-6 py-2.5 rounded-lg
              bg-indigo-600 hover:bg-indigo-500
              text-white text-sm font-semibold
              shadow-sm transition
            "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email
          </button>

          {/* Stats */}
          <div
            className="
              flex items-center gap-2
              px-4 py-2 rounded-lg
              bg-slate-100
              dark:bg-white/5
              border border-slate-200
              dark:border-white/10
            "
          >
            <p className="text-sm text-slate-600 dark:text-neutral-400">
              Total Pitches
            </p>
            <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              12
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* User Pitches */}
  <div className="flex flex-col items-center gap-5 max-w-4xl mx-auto">
    {Array.from({ length: 3 }).map((_, index) => (
      <Demo
        key={index}
        id={322}
        tags={["#billionaire", "Startup"]}
        title={"Pitch 1"}
        summary={"this is the summary of my startup"}
      />
    ))}
  </div>
</div>

  )
}

export default page