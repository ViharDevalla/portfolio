import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import './style.css'
function Sidebar() {
    const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

    return (
        <div className="splitleft left">
            <div className="sidetext">
                VIHAR DEVALLA
            </div>
            <Typist className="type" key={count} cursor={{show:false}} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span >DATA SCIENTIST</span>
                <Typist.Backspace count={50} delay={3500} />
                <span >SECURITY RESEARCHER</span>
                <Typist.Backspace count={50} delay={3500} />
                <span >WEB DEVELOPER</span>
                <Typist.Backspace count={50} delay={3500} />
            </Typist>
        </div>
    )
}

export default Sidebar
