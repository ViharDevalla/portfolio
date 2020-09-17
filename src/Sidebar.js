import React, { useState, useEffect } from 'react';
import { FaUserAlt,FaRegLightbulb,FaCertificate}  from 'react-icons/fa';
import { MdAssignmentInd , MdAssignment }  from 'react-icons/md';
import {TiContacts} from 'react-icons/ti'
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
            </div><br></br><br></br>
 
            <div className = "sidetext icons item">
                <a href="#profile"> < MdAssignmentInd className="icons icon1"/></a>

                <a href="#skills"><FaRegLightbulb className="icons"/></a>

                <a href="#projects">< MdAssignment className="icons"/></a>
                <a href="#achieve">< FaCertificate className="icons"/></a>

                <a href="#contact">< TiContacts className="icons"/></a>
            </div>
        </div>
    )
}

export default Sidebar
