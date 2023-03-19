/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Head>
        <title>Vihar Devalla - Portfolio</title>
        <meta name="description" content="Portfolio of Vihar Devalla" />
      </Head>
      <Navbar />
      <div className="bg-zinc-900 min-h-screen h-full px-5 md:px-56  ">
        
          <div className="md:flex justify-between pt-24  w-full">
            <div className="md:w-1/2  py-10   text-gray-100  font-extrathin  ">
              <p className="pb-2 font-bold text-3xl">Hi, I'm </p>
              <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-500 to-teal-500">
                Vihar Devalla
              </span>
              <p className="py-5 text-xl font-bold  text-gray-400">
                I love creating websites and breaking into VMs.
              </p>
            </div>


            <div className="md:w-1/2">
                <div className=" md:w-96 rounded-xl md:ml-auto  pr-2 pb-2 border-b-4 border-r-4 border-teal-700">
                  <Image className="rounded-xl border" src="/img/vd.jpg"  layout="responsive" height={3717} width={3717} objectFit='cover' alt="Vihar Devalla Picture"/>
                </div> 
            </div>
          </div>
          
          <AboutMe />

          <Experience />
          <Skills />
          <Projects />
          <Contact />
          
      </div>
    </div>
  )
}
