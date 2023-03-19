/* eslint-disable react/no-unknown-property */
import React from 'react'
import Image from 'next/image'
const Projects = () => {

    const projectList = [
        {
            name: "Research Paper on Raga Classification",
            subtitle:"First Research Paper",
            desc: "Presented a paper at NIT Silchar FRSM 2020 Conference, involved in research on Indian Classical Music classification based on Raga using ML and Deep Learning models. The paper was published under AISC, Springer (June 2021)",
            image_url:"/projects/research.jpg",
            tags: ["Python", "Machine Learning", "Deep Learning", "Research"],
            link: "https://link.springer.com/chapter/10.1007/978-981-33-6881-1_18",
            github: false,
            left:true
        },
        {
            name: "Cloud Security Alliance Bangalore Chapter Website",
            subtitle:"Volunteering Project",
            image_url:"/projects/csa_website.jpg",
            desc: "Developed the website for CSA Bangalore Chapter, a non-profit organization that promotes the use of best practices for providing security assurance within Cloud Computing, and provides education on the uses of Cloud Computing to help secure all other forms of computing.",
            tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
            link: "https://csabangalorechapter.com/",
            github: false,
            left:false
        },
        {
            name: "Research Paper on Malicious URLs and Injection Attacks",
            subtitle:"Research Paper - Cyber Security",
            image_url:"/projects/murli.jpg",
            desc: "Written a research paper on Detection of Malicious URLs and Injection Attacks using Machine Learning and Deep Learning models. The paper was published under Procedia Computer Science, Elsevier at the 4th International Conference on Innovative Data Communication Technology and Application",
            tags: ["Python", "Cyber Security","SQL","Deep Learning", "Research"],
            link: "https://www.sciencedirect.com/journal/procedia-computer-science/vol/215/suppl/C",
            github: false,
            left:true
        }
    ]


    return (
        <div id="project" className="text-white py-2 md:py-10">
            <h1 className="text-4xl font-bold py-5">Projects</h1>
            {
                projectList.map((project) => {
                    return (
                        project.left 
                        ? 
                        <LeftCard 
                        key={project} name={project.name} desc={project.desc} 
                        tags={project.tags} link={project.link} github={project.github}
                        image_url={project.image_url} subtitle={project.subtitle}
                        />
                        :
                        <RightCard 
                        key={project} name={project.name} desc={project.desc} 
                        tags={project.tags} link={project.link} github={project.github}
                        image_url={project.image_url} subtitle={project.subtitle}
                        />

                    )
                })
            }
            <div className="flex  w-full">
                <a href="https://github.com/ViharDevalla" target="_blank" rel="noopener noreferrer" className="mx-auto border text-indigo-500 font-semibold border-indigo-500 rounded-xl px-3 py-1 hover:bg-gray-800">Check out my other projects at GitHub</a>
            </div>
            
        </div>
    )
}

const LeftCard = ({name,subtitle,desc,image_url,tags,link,github}) =>{
    return(
        <div className="grid md:grid-cols-10 pb-24">
            <div className="rounded-xl md:row-span-full md:col-start-1 md:col-span-6 md:self-center ">
                <a href={link} target="_blank" rel="noreferrer" className='transition-opacity duration-300 ease-linear opacity-50 hover:opacity-90'>
                    <Image className="rounded-xl" src={image_url?image_url:'/img/logo.png'}  layout="responsive" height={462} width={922} objectFit='cover' alt="Vihar Devalla Picture"/>
                </a>
                
            </div>
            <div className="md:row-span-full md:col-span-5 md:col-end-11 self-center  rounded-xl text-right my-auto z-10">
                <h1 className="pt-5 md:pt-0 text-xs md:text-lg font-mono">{subtitle}</h1>
                <h1 className="text-lg md:text-2xl py-2 font-bold">{name}</h1>
                <div className="w-full md:w-54 bg-gray-800 rounded-xl p-5 px-5 text-sm font-semibold">
                    {desc}
                </div>
                <ul className="flex flex-row gap-2 flex-wrap md:flex-row-reverse  py-2  text-gray-300">
                    {
                        tags &&
                        tags.map((tag) => {
                            return (
                                <li key={tag} className="px-3 py-1 bg-gray-700 rounded-xl">{tag}</li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-row-reverse ">
                    {
                        github &&
                        <a className="w-5 py-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href={github}>
                            <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>

                    }

                    {
                        link &&
                        <a className=" w-5 py-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href={link}>
                            <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                        </a>
                    }
                    
                </div>
                
            </div>
        </div>
    )
}

const RightCard = ({name,subtitle="",desc,image_url,tags,link,github}) =>{
    return(
        <div className="grid md:grid-cols-10 pb-24">
            <div className="md:row-span-full md:col-span-5 md:col-end-6 self-center  rounded-xl text-left my-auto z-10">
                <h1 className="text-xs md:text-lg font-mono">{subtitle}</h1>
                <h1 className="text-lg md:text-2xl py-1 font-bold">{name}</h1>
                <div className="md:w-54 bg-gray-800 rounded-xl p-5 px-5 text-sm font-semibold">
                    {desc}
                </div>
                <ul className="flex flex-row gap-2 flex-wrap md:flex-row-reverse  py-2  text-gray-300">
                    {
                        tags &&
                        tags.map((tag) => {
                            return (
                                <li key={tag} className="px-3 py-1 bg-gray-700 rounded-xl mx-1">{tag}</li>
                            )
                        })
                    }
                </ul>
                <div className="flex ">
                    {
                        github &&
                        <a className="w-5 py-2 mr-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href={github}>
                        <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    }
                    
                    {
                        link &&    
                        <a className=" w-5 py-2 text-gray-500 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100" href={link}>
                            <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                        </a>
                    }
                </div>
                
            </div>


            <div className="rounded-xl md:row-span-full md:col-start-5 md:col-span-6 self-center ">
                <a href={link} target="_blank" rel="noreferrer" className='transition-opacity duration-300 ease-linear opacity-50 hover:opacity-90'>
                    <Image className="rounded-xl" src={image_url?image_url:'/img/logo.png'}  layout="responsive" height={462} width={922} objectFit='cover' alt="Vihar Devalla Picture"/>
                </a>
                
            </div>


        </div>
    )
}

export default Projects
