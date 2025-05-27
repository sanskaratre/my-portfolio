import React from 'react'
import ProfilePic from "../../assets/Images/Profile_pic.jpg";
import "./about.css"
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
        <div className="about" id='about'>
            <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img">
                    <img src={ProfilePic} alt='profile-pic'></img>
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-content">
                    <h1>About Me</h1>
                    <p>
                    I am a goal-oriented Software Developer with experience in IT and Fintech, focused on solving complex problems and delivering business solutions, especially in payment applications. I excel in project ownership, mentorship, and collaboration, having also taken on roles like Team Lead and Scrum Master.

I see Software Engineering as an endless puzzle that I’m passionate about solving. My drive for organization and continuous learning fuels my work, as I strive to create products that simplify life for others.
                    </p>
                </div>
            </div>
        </div>
        </Jump>
    </>
  )
}

export default About