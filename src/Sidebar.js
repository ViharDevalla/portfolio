import React, { useState, useEffect } from 'react';
import { FaGithubSquare,FaInstagram,FaLinkedin }  from 'react-icons/fa';
import Typist from 'react-typist';
import './style.css'
function Sidebar() {
    const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

    return (
        <div className="splitleft left clearfix">
            <div className="sidetext">
                VIHAR DEVALLA 
            </div>
            

            <div className="typer">
            <Typist className="type" key={count} cursor={{show:false}} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span >DATA SCIENTIST</span>
                <Typist.Backspace count={30} delay={3000} />
                <span >SECURITY RESEARCHER</span>
                <Typist.Backspace count={50} delay={3000} />
                <span >WEB DEVELOPER</span>
                <Typist.Backspace count={50} delay={3000} />
            </Typist>
            </div><br></br>
            <div className = "sidetext icons">
                <a href="https://github.com/ViharDevalla">< FaGithubSquare className="icons"/></a>
                <a href="https://www.linkedin.com/in/vihar-devalla-3499881a3/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/vihar.devalla.007/">< FaInstagram className="icons"/></a>
            </div>
        </div>
    )
}

export default Sidebar
