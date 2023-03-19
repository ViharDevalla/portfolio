import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 border-b border-gray-800">
            <div className="max-w-full  md:px-48">
                <div className="flex items-center justify-between h-16">
                <div className="pl-5 md:pl-0 md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-cyan-300 to-sky-600">
                    Vihar Devalla
                </div>

                <div className="flex space-x-4 text-gray-300 uppercase font-semibold">
                    <a className='transition duration-300 ease-in-out hover:scale-105 hover:text-cyan-500' href="#">Blogs</a>
                    <a className='transition duration-300 ease-in-out hover:scale-105 hover:text-teal-500' href="#project">Projects</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
