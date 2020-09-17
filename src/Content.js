import React from 'react';
import image from './img/profile.jpg';
import Profile from './Profile.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Achieve from './Achieve.js';
import './style.css';
import Contact from './Contact.js';

function Content() {
    return (
        <div className='splitright right clearfix'>
            <div className="content">
                <div className='image'>
                    <img src={image} loading='lazy'></img>
                </div>
                <Profile />
                <Skills />
                <Projects />
                <Achieve />
                <Contact />
            </div>
        </div>
    )
}

export default Content
