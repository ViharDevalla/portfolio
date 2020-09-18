import React from 'react';
import './style.css';

import ethicalhack from './img/hacker.webp';
import appsec from './img/protection.webp';
import ctf from './img/ctftime.webp'
import ml from "./img/ml.webp"
import python from './img/python.webp';
import ReactJS from './img/react.webp';
import c from './img/c.webp';
import gcp from './img/gcp.webp';
import firebase from './img/firebase.webp';
import nextjs from './img/nextjs.webp';
import tensor from './img/tensor.webp';
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
