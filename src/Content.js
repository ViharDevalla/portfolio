import React from 'react';
import image from './profile.jpg';
import Profile from './Profile.js';
import './style.css'

function Content() {
    return (
        <div className='splitright right clearfix'>
            <div className="content">
                <div className='image'>
                    <img src={image} loading='lazy'></img>
                </div>
                <Profile />
            </div>
        </div>
    )
}

export default Content
