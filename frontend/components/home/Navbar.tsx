import Link from 'next/link'
import Navlinks from './Navlinks'
import { Boogaloo } from 'next/font/google'
import Image from 'next/image'
    //  const roboto= Roboto({weight:["200","400","500"]})
    const boogaloo=Boogaloo({weight:["400"]})
function Navbar() {
  return (
    <div className='w-full flex items-center space-x-2 justify-between  md:px-4 sticky top-0 z-50 backdrop-blur-md h-fit'>
        <Link href='/' className='text-3xl font-bold tracking-wide flex items-center space-x-4'><Image src={"./favicon/favicon.svg"} alt="Logo" width={60} height={50}></Image><span className='hidden md:flex'>Startify</span></Link>
<Navlinks/>
        <button className={`px-3 mr-8 py-1 bg-green-500 text-black rounded-lg  text-xl font-bold ${boogaloo.className} text-black`}
        
        ><a className='' href='http://localhost:8002/oauth2/authorization/google'>Pitch</a></button>
    </div>
  )
}



export default Navbar