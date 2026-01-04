import React from 'react'

function page() {
  return (
    <aside
  className="
    h-screen overflow-y-auto
    bg-white
    dark:bg-[#0f0f0f]
    border-r border-slate-200
    dark:border-white/10
   
  "
>
  <div className="p-6 space-y-8">
    {/* Title */}
    <h2 className="text-lg font-bold tracking-tight
                   text-slate-800
                   dark:text-neutral-200">
      Filters
    </h2>

    {/* Category Filter */}
    <div className="space-y-4">
      <h3 className="text-sm font-medium uppercase tracking-wide
                     text-slate-500
                     dark:text-neutral-400">
        Category
      </h3>

      <div className="space-y-2">
        {['Tech', 'Finance', 'Health', 'Education', 'E-commerce'].map(cat => (
          <label
            key={cat}
            className="
              flex items-center gap-3 cursor-pointer
              text-sm
              text-slate-600
              dark:text-neutral-400
              hover:text-slate-900
              dark:hover:text-neutral-200
              transition-colors
            "
          >
            <input
              type="checkbox"
              className="
                h-4 w-4 rounded
                border-slate-300
                text-emerald-500
                focus:ring-emerald-500
                dark:border-white/20
                dark:bg-transparent
              "
            />
            {cat}
          </label>
        ))}
      </div>
    </div>

    {/* Status Filter */}
    <div className="space-y-4">
      <h3 className="text-sm font-medium uppercase tracking-wide
                     text-slate-500
                     dark:text-neutral-400">
        Status
      </h3>

      <div className="space-y-2">
        {['Active', 'Upcoming', 'Closed'].map(status => (
          <label
            key={status}
            className="
              flex items-center gap-3 cursor-pointer
              text-sm
              text-slate-600
              dark:text-neutral-400
              hover:text-slate-900
              dark:hover:text-neutral-200
              transition-colors
            "
          >
            <input
              type="checkbox"
              className="
                h-4 w-4 rounded
                border-slate-300
                text-indigo-500
                focus:ring-indigo-500
                dark:border-white/20
                dark:bg-transparent
              "
            />
            {status}
          </label>
        ))}
      </div>
    </div>
  </div>
</aside>

  )
}

export default page