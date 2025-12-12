import React from 'react'

function page() {
  return (
     <aside className=" h-screen overflow-y-auto ">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-6 ">Filters</h2>
                
                {/* Category Filter */}
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
                    <div className="space-y-2">
                        {['Tech', 'Finance', 'Health', 'Education', 'E-commerce'].map(cat => (
                            <label key={cat} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm text-gray-600">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Status</h3>
                    <div className="space-y-2">
                        {['Active', 'Upcoming', 'Closed'].map(status => (
                            <label key={status} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm text-gray-600">{status}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>

  )
}

export default page