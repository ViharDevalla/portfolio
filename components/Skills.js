import React from 'react'
import Image from 'next/image'



const Skills = () => {

    const skills = [
        {name:'JavaScript', src:'/icons/js.svg'},
        {name:'Python', src:'/icons/python.svg'},
        {name:'C', src:'/icons/c.svg'},
        {name:'React', src:'/icons/react.svg',react:true},
        {name:'NextJS', src:'/icons/nextjs.svg'},

        {name:'Tailwind CSS', src:'/icons/tailwind.svg'},
        {name:'Firebase', src:'/icons/firebase.svg'},
        {name:'MongoDB', src:'/icons/mongo.svg'},
        {name:'Google Cloud', src:'/icons/gcp.svg'},
        {name:'AWS', src:'/icons/aws.svg'},

        {name:'Docker', src:'/icons/docker.svg'},

        {name:'Bash', src:'/icons/bash.svg'},
        {name:'Metasploit', src:'/icons/metasploit.svg'},
        {name:'Burp Suite', src:'/icons/burp.png'},

        {name:'Kubernetes', src:'/icons/k8.svg'},
        {name:'Hack The Box', src:'/icons/htb.svg'},
        
        {name:'Tensorflow', src:'/icons/tensorflow.svg'},
        {name:'Keras', src:'/icons/keras.svg'},

        {name:'Raspberry Pi', src:'/icons/rpi.svg'},
        {name:'Arduino', src:'/icons/arduino.svg'},

        
    ]

    return (
        <div className="text-white py-2 md:py-10">
            <h1 className="text-4xl font-bold">Skills</h1>
            <div className="md:flex"> 
                <div className="hidden md:block w-1/2 p-24 border-r-2 font-semibold border-gray-600">
                    <h1 className="text-lg py-1">Deployment - Docker and Kubernetes</h1>
                    <h1 className="text-lg py-1">Automation</h1>
                    <h1 className="text-lg py-1">Web Development</h1>
                    <h1 className="text-lg py-1">Cyber Security</h1>
                    <h1 className="text-lg py-1">AI/ML and IoT</h1>
                </div>
                <div className="md:w-1/2 md:px-10 grid grid-cols-5 lg:grid-cols-5">
                    {skills.map((skill) => {
                        return <SkillCard key={skill.name} name={skill.name} src={skill.src} react={skill.react} />
                    })}
                </div>
            </div>

        </div>
    )
}

const SkillCard = (props) => {
    return (
        <div className="pt-5 flex flex-col w-8 md:w-24 items-center text-xs outer text-white ">
            <div className={props.react?"react-logo":"block"}>
                <Image src={props.src} alt="JavaScript" width={60} height={60} />
            </div>
                
                <h5 className="inner font-thin">{props.name}</h5>
        </div>
    )
}

export default Skills
