import React from "react";
import ProfilePic from "../../assets/Images/Profile_pic.jpg";
import "./menu.css";
import { FaHome } from "react-icons/fa";
import { MdWorkspacePremium, MdContactPage } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { GrTechnology, GrContactInfo } from "react-icons/gr";
import { GiUnstableProjectile } from "react-icons/gi";
import { Link } from "react-scroll";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
          <div className="nevbar-profile-pic">
            <img src={ProfilePic} alt="Profile-Pic"></img>
          </div>
        </Zoom>
        <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FaHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrContactInfo />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoSchool />
                  Education
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrTechnology />
                  Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GiUnstableProjectile />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workExp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdWorkspacePremium />
                  Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdContactPage />
                  Contact
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FaHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrContactInfo title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoSchool title="Education " />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrTechnology title=" Tech Stack" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GiUnstableProjectile title="Projects" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workExp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdWorkspacePremium title="Work Experience" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdContactPage title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
