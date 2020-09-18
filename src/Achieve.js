import React from 'react';
import mrd from './img/cert/mrd.jpg';
import nullcon from './img/cert/null.jpg';
import ctfteam from './img/cert/ctfteam.jpg';
import phantom from './img/cert/phantom.jpg';
import hacker1 from './img/cert/hacker101.jpg';
import bsides from './img/cert/bsides.jpg';
import hackerspace from './img/cert/hackerspace.jpg';
import udemy1 from './img/cert/udemy.jpg';
import isfcr from './img/cert/isfcr-hack.jpg';
import aigame from './img/cert/aigame.jpg';
import pesuio from './img/cert/pesuio1.jpg'
import './style.css'
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardActions,Button} from '@material-ui/core/';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "dark grey"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }));


function Achieve() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div className="box" id="achieve">
            <div className="titlefont">
                ACHIEVEMENTS
            </div>
            <div className="pro">
            <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={mrd}
                            title="MRD-Scholarship from PES University"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>MRD-Scholarship from PES University</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://www.pes.edu/scholarships/">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header"> MRD-Scholarship from PES University </div>
                                            <div className="content">
                                        
                                            <img src={mrd}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={nullcon}
                            title="Attended NullCon-2020"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Attended NullCon-2020</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://nullcon.net/website/archives/goa-2020.php">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header"> NullCon-2020 Certificate </div>
                                            <div className="content">
                                        
                                            <img src={nullcon}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={ctfteam}
                            title="Research Paper on Neural Network"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>My CTF Team (nUb5) stats </b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://ctftime.org/team/123643">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header"> My CTF Team (nUb5) stats </div>
                                            <div className="content">
                                        
                                            <img src={ctfteam}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={udemy1}
                            title="Udemy Course completed on Ethical Hacking"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Udemy Course completed on Ethical Hacking</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://www.udemy.com/course/learn-ethical-hacking-from-scratch/">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header"> Udemy Course completed on Ethical Hacking</div>
                                            <div className="content">
                                        
                                            <img src={udemy1}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={isfcr}
                            title="Runner-up at PES-ISFCR Hackathon"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Runner-up at PES-ISFCR Hackathon 2.0</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://www.isfcr.pes.edu/events-1">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header"> PES-ISFCR Hackathon 2.0 Scoreboard</div>
                                            <div className="content">
                                        
                                            <img src={isfcr}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={bsides}
                            title="Placed 11th at Bsides-Blore CMD+CTRL CTF"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Placed 11th at Bsides-Blore CMD+CTRL CTF </b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://bsidesbangalore.in/">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">Bsides-Blore CMD+CTRL CTF Results</div>
                                            <div className="content">
                                        
                                            <img src={bsides}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={hackerspace}
                            title="Completed HackerSpace Summer Project"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Completed HackerSpace Summer Project </b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://github.com/HackerSpace-PESU">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">HackerSpace Completion Certificate</div>
                                            <div className="content">
                                        
                                            <img src={hackerspace}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={hacker1}
                            title="CTF Team placed 146 out of 3663 players at HactivityCTF hosted by Hacker101"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>CTF Team placed 146 out of 3663 players at HactivityCTF hosted by Hacker101</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://ctftime.org/team/123643">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">HactivityCTF Certificate </div>
                                            <div className="content">
                                        
                                            <img src={hacker1}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={pesuio}
                            title="Completed PESUIO-Intro to Reverse Engineering"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Completed PESUIO-Intro to Reverse Engineering</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://pesu.io/">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">PESU-IO Certificate</div>
                                            <div className="content">
                                        
                                            <img src={[pesuio]}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid><Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={aigame}
                            title="Participated in Microsoft Student partner (PESU) AI-Gaming Event"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Participated in Microsoft Student partner (PESU) AI-Gaming Event</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://www.aigaming.com/">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">AI Gaming Certificate</div>
                                            <div className="content">
                                        
                                            <img src={aigame}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={phantom}
                            title="CTF Team placed 2nd at PhantomCTF "
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>CTF Team placed 4th at PhantomCTF</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://ctftime.org/event/1092">
                                    Read More
                                </Button>
                                <Popup trigger={<Button className="button"> Open Image </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">Phantom CTF Certificate</div>
                                            <div className="content">
                                        
                                            <img src={phantom}></img>
                                            <div className="actions">
                                            <Button
                                                className="button"
                                                onClick={() => {
                                                console.log('Popup closed ');
                                                close();
                                                }}
                                            >
                                               Close Image
                                            </Button>
                                            </div>
                                            </div>
                                        </div>
                                        )}
                                    </Popup>
                        </CardActions>
                    </Card>
                    </Grid>
                    
                    
                </Grid>
            </div>
        </div>
    )
}

export default Achieve
