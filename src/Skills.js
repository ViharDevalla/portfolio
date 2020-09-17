import React from 'react';
import './style.css';

import ethicalhack from './img/hacker.png';
import appsec from './img/protection.png';
import ctf from './img/ctftime.png'
import ml from "./img/ml.png"
import python from './img/python.png';
import ReactJS from './img/react.png';
import c from './img/c.png';
import gcp from './img/gcp.png';
import firebase from './img/firebase.png';
import nextjs from './img/nextjs.png';
import tensor from './img/tensor.png';
import colab from './img/colab.png';


function Skills() {
    return (
        <div className="box" id="skills">
            <div className="titlefont">
                SKILLS
            </div><br></br>

                <div class="skill-set">
                    <div class="card">
                    <div class="item">
                        <img src={appsec} />
                        <span className="skillh">Application Security</span>
                    </div>
                    <div class="item">
                        <img src={ethicalhack} />
                        <span className="skillh">Penetration Testing</span>
                    </div>
                    <div class="item">
                        <img src={ctf} />
                        <span className="skillh">CTF Player</span>
                    </div>
                    <div class="item">
                        <img src={ml} />
                        <span className="skillh">Machine Learning</span>
                    </div>
                    <div class="item">
                        <img src={python} />
                        <span className="skillh">Python</span>
                    </div>
                    <div class="item">
                        <img src={c} />
                        <span className="skillh">C language</span>
                    </div>
                    <div class="item">
                        <img src={ReactJS} />
                        <span className="skillh">ReactJS</span>
                    </div>
                    <div class="item">
                        <img src={nextjs} />
                        <span className="skillh">Next JS</span>
                    </div>
                    <div class="item">
                        <img src={gcp} />
                        <span className="skillh">Google Cloud Platform</span>
                    </div>
                    <div class="item">
                        <img src={firebase} />
                        <span className="skillh">Firebase</span>
                    </div>
                    <div class="item">
                        <img src={tensor} />
                        <span className="skillh">Tensor Flow</span>
                    </div>
                    <div class="item">
                        <img src={colab} />
                        <span className="skillh">Google Colab</span>
                    </div>
                    </div>
                </div>
        </div>
        
        
        
    )
}

export default Skills
