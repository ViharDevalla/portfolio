import React from 'react'
import Image from 'next/image'
const Experience = () => {
    return (
        <div className="text-white pb-16">
            <h1 className="text-xl md:text-4xl font-bold md:py-10">Experience</h1>

            <ExpCard src='/company/arc.png' height={518} width={482} role='Platform Site Reliability Engineer Intern' 
                company='Arcesium' fromDate='January 2023' toDate='Present'/>

            <ExpCard src='/company/csablr.png' height={518} width={482} role='Student Community Developer Volunteer' 
                company='Cloud Security Alliance Bangalore Chapter' fromDate='July 2020' toDate='Present'/>

            <ExpCard src='/company/basel.png' height={167} width={149} role='Technical Developer Intern' 
                company='Basel Practitioners' fromDate='June 2021' toDate='July 2022'/>

            <ExpCard src='/company/ccbd.png' height={200} width={200} role='Research Intern' 
                company='Centre for Cloud Computing and Big Data PESU' fromDate='June 2021' toDate='December 2021'/>

            <ExpCard src='/company/zd1.png' height={1075} width={1055} role='Head Of Club' 
                company='Zero Day ISFCR Club' fromDate='Feb 2021' toDate='July 2022'/>

            

        </div>
    )
}

const ExpCard = (props) => {
    return(
        <div className="md:flex items-center">
                <div className="w-16 h-16 rounded-md p-3">
                    <Image src={props.src} alt="Basel Practitioners" height={props.height} width={props.width} layout="responsive" />
                </div>
                <div className="md:px-5">
                    <h1 className="text-xs md:text-xl font-semibold">{props.role} <span className="text-blue-400 font-bold">@ {props.company}</span></h1>
                    <p className=" text-xs md:text-lg text-gray-400 ">{props.fromDate} - {props.toDate}</p>
                </div>
            </div>
    )
}

export default Experience
