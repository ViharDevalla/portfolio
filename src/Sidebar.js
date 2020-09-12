import React, { useState, useEffect } from 'react';
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
            <Typist className="type" key={count} cursor={{show:false}} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span >DATA SCIENTIST</span>
                <Typist.Backspace count={50} delay={3000} />
                <span >SECURITY RESEARCHER</span>
                <Typist.Backspace count={50} delay={3000} />
                <span >WEB DEVELOPER</span>
                <Typist.Backspace count={50} delay={3000} />
            </Typist>
        </div>
    )
}

export default Sidebar
