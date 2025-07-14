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
I am a Frontend Developer with experience in Software Development and Fintech, focused on solving complex
 problems and delivering business solutions, especially for payment applications. I excel in project ownership,
 mentorship, cross-team collaboration, and have experience with compliance and security audits such as VAPT of
 applications.I have also taken on roles such as Team Lead and Scrum Master. I am passionate about writing clean,
 efficient code and contributing innovative ideas for new business solutions. I continuously strive to learn new
 technologies. I am proficient in React.js, JavaScript, HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB, SQL, and
 REST APIs. 
                    </p>
                </div>
            </div>
        </div>
        </Jump>
    </>
  )
}

export default About