import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 border-b border-gray-800">
            <div className="max-w-full  md:px-48">
                <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Image className="rounded-full" src="/logo_2.png" width={60} height={60} alt="logo" />
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
