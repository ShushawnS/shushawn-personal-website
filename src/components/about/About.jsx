import "./about.css";
import react, { Component}  from 'react';
import shushawn from "./shushawn.png";
import { Typography, Button } from "@material-ui/core";

import React from 'react'

function About() {
    return (
        <div className="about" id="about">

            <div className="about-top">
                <Typography variant="h4" className="text name">01. About Me <hr></hr></Typography>
            </div> 

            <div className="about-bottom"> 
                <div className="about-left">
                    <img src={shushawn} alt="shushawnReal" className="shushawnReal" /> 
                </div>

                <div className="about-right">
                    <Typography variant="body2" className="description-top">🧒Hello! My name is Shushawn and I want to use my passion for technology to better society, specifically for the well-being of children.</Typography> <br /> <br />
                    
                    <div className="description-bottom">
                        <Typography variant="body1">🔧I am a firm believer that to get the most out of anything, you have to put your 100% into it. <br /><br /> Here is a note of appreciation from a former employer:   </Typography> <hr className ="quoteLine" /> 
                        <Typography variant="caption" align="justify">"He has maintained excellent records, engaged with students brilliantly, and been a wonderful support to make this year a success. He has exceeded expectations in every way,
                         remaining self-motivated and always in pursuit of excellence. I really admire his commitment, positive attitude, and keenness to help very much. The students have appreciated him very much as well."</Typography> <hr className ="quoteLine" />
                        <Typography variant="body1">
                            🖥️Here are some of my skills:

                            <ol>
                                <li><Typography gutterBottom="true" display="inline" color="secondary" variant='overline'>LANGUAGES -</Typography> C, Python, Java, Javascript, PHP, HTML/CSS</li>
                                <li><Typography gutterBottom="true" display="inline" color="secondary" variant='overline'>TECHNOLOGIES -</Typography> React.js, MySQL, jQuery, Bootstrap, AJAX</li> 
                                <li><Typography gutterBottom="true" display="inline" color="secondary" variant='overline'>TOOLS -</Typography> Git, Vs Code</li>
                            </ol>

                        </Typography> 

                        <Typography variant="body1">🏒In my free time I enjoy: watching hockey, working out and investigating the impact of technology on society!</Typography>
                    </div>
                    
                </div>

            </div>

            

        </div>
    );
}

export default About
