/* eslint-disable react/no-unknown-property */
import '../styles/globals.css'
import Image from 'next/image'
function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <div className="hidden md:block py-96 pl-16 fixed">
            <div className="flex flex-col w-6 ">
              <a className="py-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href="https://github.com/ViharDevalla">
                <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>

              <a className="py-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href="https://www.linkedin.com/in/vihardevalla/">
                <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>

              <a className="py-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href="https://www.instagram.com/vihar.devalla.007/">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              <a className="pt-2 pb-12 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href="mailto:vihardevalla@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg"  role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>              
              </a>
              <div className='border-l-2 border-gray-500 h-96 m-auto' />

            </div>
            
            {/* <div className="left-auto fixed flex flex-col text-white">
              <a className="rotate-90">vihardevalla@gmail.com</a>
              <div className='border-r w-1  border-white h-24 m-auto' />
            </div> */}

        </div>
        
        <Component {...pageProps} />
      
    </div>
  )

}

export default MyApp
