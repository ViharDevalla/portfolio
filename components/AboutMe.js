import React from 'react'

const AboutMe = () => {
    return (
        <div className="py-5 md:py-10 text-white">
            <h1 className="text-xl md:text-4xl font-bold">About Me</h1>
            <div className="font-semibold">
                <p className="py-5 text-sm md:text-lg text-gray-400 ">
                    Hello! My name is Vihar and I love building stuff on the internet.
                    I am fascinated by the complexity and security aspects of the products we use everyday and try to build
                    with security as priority.
                </p>
                <p className="py-2 text-sm md:text-lg text-gray-400 ">
                    I wrote my first code when I was 12 years old and was fascinated by the simplicity of code 
                    and how it can be used to make much more complex things possible. After experimenting with game development,
                    I stepped into the world of cybersecurity and participated in many Capture the Flag competitions. This is where 
                    I started to learn about the security aspects of the internet and the necessity of security in the first place. 
                </p>
                <p className="py-2 text-sm md:text-lg text-gray-400 ">
                    Since then, I have I use the Web as my primary platform to build applications and websites 
                    for various domains like Machine Learning, Cyber Security, IoT, etc. I still try to learn new things and
                    keep myself updated with the latest trends in the industry.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
