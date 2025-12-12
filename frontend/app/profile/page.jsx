import Demo from "@/components/home/animated/Demo"
function page() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 bg-[radial-gradient(circle_at_center,rgba(80,80,80,0.25),rgba(0,0,0,1))]">
        <div className="max-w-4xl mx-auto border border-neutral-800 shadow-[5px_2px_14px_0px_rgb(64_64_64)] rounded-lg p-6 md:p-8 mb-8 ">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-black to-purple-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">John Doe</h1>
                    <p className="text-gray-400 mb-3">john@example.com</p>
                    <p className="text-gray-300 mb-6">Passionate entrepreneur and startup enthusiast with a vision to innovate.</p>
                    <div className='flex items-center gap-5 w-full '>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto md:mx-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        Email
                    </button>
                     <div className=" rounded-lg p-6 text-center flex space-x-3 items-center ">
                    <p className="text-gray-300">Total Pitches</p> 
                    <p className="text-xl font-bold text-blue-400">12</p> 
                </div>
                </div>
                </div>
            </div>
        </div>

        {/* Pitches Section */}
        <div className="max-w-4xl mx-auto bg-white/3 backdrop-blur-lg border border-white/2 rounded-xl p-4 
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/7 before:to-black before:rounded-xl border-b-0">
        <div className="flex flex-col items-center gap-5 h-fit">
            {Array.from({ length: 3 }).map((_, index) => (
                <Demo key={index} id={322} tags={["#billionaire","Startup"]} title={"Pitch 1 "} summary={"this is the summary of my statup"}/>
            ))}
        </div>
        </div>
        </div>
 
  )
}

export default page