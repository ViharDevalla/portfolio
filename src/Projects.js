import React from 'react'
import csaweb from './img/csaweb.jpg'
import research from './img/research.jpg'
import fakenews from './img/fakenews.jpg'
import fpsgame from './img/fpsgame.jpg'
import firstapp from './img/mitraapp.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardActions,Button} from '@material-ui/core/';
import Popup from 'reactjs-popup';

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

  


export default function Projects() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div className="box" id="projects">
            <div className="titlefont">
                PROJECTS
            </div><br></br>
            <div className="pro">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={csaweb}
                            title="Cloud Security Alliance Bangalore Chapter"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Cloud Security Alliance Bangalore Chapter Website</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://csabangalorechapter.org/">
                                    Read More
                                </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={research}
                            title="Research Paper on Raga Classification"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Research Paper on Raga Classification </b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Popup trigger={<Button className="button"> Read More </Button>} modal nested >
                                        {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                            &times;
                                            </button>
                                            <div className="header">Research Paper Abstract</div>
                                            <div className="content">
                                        
                                            <img src={research}></img>
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
                            image={fakenews}
                            title="Fake News Classifier - HackerSpace Project"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>Fake News Classifier - HackerSpace Project</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://github.com/ViharDevalla/fakenews-classifier">
                                    Read More
                                </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={firstapp}
                            title="My First App - School Management Ap"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>My First App - School Management App</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://github.com/ViharDevalla/JGRVK_Mitra">
                                    Read More
                                </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={fpsgame}
                            title="Research Paper on Neural Network"
                        />
                        <CardContent>
                            <Typography variant="body" color="textSecondary" component="p">
                            <b>My First FPS Game</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" color="primary" align="center" href="https://gamejolt.com/games/vihardevalla-secretservice/255245">
                                    Read More
                                </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                </Grid>
            </div>
            </div>
    )
}
