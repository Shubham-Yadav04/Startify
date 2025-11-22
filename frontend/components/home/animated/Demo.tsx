import React from 'react'

function Demo({props}) {
  return (
     <article
                                key={props.id}
                                className="bg-white dark:bg-[#111] rounded-lg shadow-green-200 shadow-sm p-5 hover:shadow-md transition-shadow duration-150"
                                aria-labelledby={`pitch-${props.id}-title`}
                            >
                                <h3
                                    id={`pitch-${props.id}-title`}
                                    className="text-lg font-semibold font-sans text-gray-900 dark:text-gray-100"
                                >
                                    {props.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-sans">
                                    {props.summary}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {props.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-800 rounded-full "
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-xs text-gray-500">Est. effort: 2-6 wks</div>
                                    <button
                                        type="button"
                                        className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                                        aria-label={`Explore ${props.title}`}
                                    >
                                        View
                                    </button>
                                </div>
                            </article>

  )
}

export default Demo