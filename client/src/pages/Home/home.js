import React, { useState } from 'react';
import { useTheme } from '../../Context/themeContext';
import Typewriter from 'typewriter-effect';
import "./home.css";
import Resume from "../../assets/Docs/Fullstack.pdf"
import { IoIosMoon,IoMdSunny } from "react-icons/io";
import Fade from 'react-reveal/Fade';

const Home = () => {

  const [theme, setTheme] = useTheme()

  const themeHandler = () => {
    setTheme((previousState) => (previousState == "light" ? "dark" : "light"))
  }

  return (
   <>
   <div className="container-fluid home-container" id='home'>
    <div className="theme-btn" onClick={themeHandler}>
      {theme == "light" ? <IoIosMoon size={30}/>  : <IoMdSunny size={30} /> }
    </div>
    <div className="container home-content">
      <Fade right>
      <h2>Hi <span className="wave">👋🏻</span> I'm a</h2>
      <h1>
        <Typewriter 
         options={{
          strings: ['Fullstack Developer!', 'MERN Developer!', "React Js Developer!"],
          autoStart: true,
          loop: true,
        }}
        />
      </h1>
      </Fade>
      <Fade top>
      <div className="home-buttons">
        
        <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=7415668522' rel='"noreferrer' target='_blank'>Hire Me!</a>
        <a className='btn btn-cv' href={Resume} download={"Sanskar_Resume.pdf"}>My Resume!</a>
      </div>
      </Fade>
    </div>
   </div>
   </>
  )
}

export default Home