import "./landingpage.css";
import React, { Component}  from 'react';
import { Typography, Button } from "@material-ui/core";
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Shushawn from "./Shushawn Saha.png";


function LandingPage() {
    return (
        <div className="landingpage" id="landingpage">
            <div className="landingpage-top">
                <section className="landingpage-left">

                    <Typography variant="button" className="text">Hey 👋, my name is ...</Typography>
                    <Typography variant="h1" className="text name">Shushawn Saha. </Typography>
                    <Typewriter 
                        options={{
                            strings: [
                                    "I am: a coder",
                                    "I am: a developer",
                                    "I am: an innovator",
                                    "I am: always learning",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    /> 
                    <hr></hr>
                    <Typography variant="body1" className="text">Systems Design Engineering Student @uWaterloo 🏫. | Seeking Fall '22 Internships</Typography>
                    <div className="linkButton">
                        <Button variant="contained" size="large" color="secondary" className="lButton" href="mailto:s62saha@waterloo.ca" ><ContactMailIcon fontSize="small" /><b>&nbsp;Email</b></Button>
                        <Button variant="contained" size="large" color="primary" classname="linkedinButton lButton" href="https://www.linkedin.com/in/shushawn-saha/" ><LinkedInIcon fontSize="small"/><b>&nbsp;Linkedin</b></Button>
                        <Button variant="contained " size="large" className="githubButton lButton" href="https://github.com/ShushawnS" ><GitHubIcon fontSize="small" /><b>&nbsp;Github</b></Button> 
                    </div>

                </section>  

                <section className="landingpage-right"> 
                    <img src={Shushawn} alt="" className="shushawnAnimated" />
                </section> 

            </div>

            <div className="landingpage-bottom">
                <section className="icon">
                    <a href="#about" ><ExpandMoreIcon fontSize="large" /></a>
                </section>
                
            </div>

        </div>
    )
};

export default LandingPage
