import React from 'react'
import './style.css';
import githubic from './img/github.png'
import {Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import instaic from './img/insta.png' 
import linkedinic from './img/linkedin.png'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      Color: "textPrimary"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }));

function Contact() {
    const classes = useStyles();
    return (
        <div className="box" id="contact">
            <div className="titlefont">
                CONTACT
            </div>
            <div>
                <a href="https://github.com/ViharDevalla">< img src={githubic} className = "contacter"/></a>
                <a href="https://www.linkedin.com/in/vihar-devalla-3499881a3/"><img src={linkedinic} className = "contacter"/></a>
                <a href="https://www.instagram.com/vihar.devalla.007/">< img src={instaic} className = "contacter"/></a>
            </div>
            <div className="subfont">
                Feel Free to contact me about anything :)<br></br> 
                Discord ID : VikedJoker#7297
            </div><br></br>
            <div>
            <form action="https://formsubmit.co/vihardevalla@gmail.com" method="POST">
                <div className="subfont">
                        Name <br></br><input type="text" name="name" required />
                </div>
                <div className="subfont">
                        Email <br></br><input type="email" name="email" required />
                </div>
                <div className="subfont">
                    Message<br></br><textarea name="message" required />
                </div><br></br>
                    <button type="submit">Send</button>
            </form>
            </div>
            
        </div>
    )
}

export default Contact
