import React from "react";
import "./projects.css";
import E_comm from "../../assets/Images/E-comm.png"
import Portfolio from "../../assets/Images/Portfolio.jpg";
import Food_order from "../../assets/Images/Food-app.jpg";
import Spin from 'react-reveal/Spin';


const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
          Top Recent Project
        </h2>
        <hr />
        <p className="pb-5 text-center">
          👉🏻 Here are some of the projects I've designed and developed — each
          one a reflection of my skills, creativity, and passion for building
          functional, user-friendly web applications.
        </p>
        {/* Card Design */}
        <div className="row" id="ads">
          <Spin>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image mt-2">
                <span className="card-notify-badge">Full stack</span>
                <img src={Portfolio} alt="project-img" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React Js</span>
                <span className="card-detail-badge">Node Js</span>
                <span className="card-detail-badge">Express Js</span>
                <span className="card-detail-badge">Mongo DB</span>
              </div>
              <div className="card-body text-center">
                    <div className="ad-title ">
                        <div className="text-uppercase ">
                           <h6> Portfolio website </h6>
                        </div>
                        <a className="ad-btn " href="#" >View</a>
                    </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image mt-2">
                <span className="card-notify-badge">Frontend(React Js)</span>
                <img src={Food_order} alt="project-img" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React Js</span>
                <span className="card-detail-badge">Node Js</span>
                <span className="card-detail-badge">Java Script</span>
              </div>
              <div className="card-body text-center">
                    <div className="ad-title ">
                        <div className="text-uppercase ">
                           <h6> Food Delivery </h6>
                        </div>
                        <a className="ad-btn " href="#" >View</a>
                    </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image mt-2">
                <span className="card-notify-badge">Frontend(React Js)</span>
                <img src={E_comm} alt="project-img" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React Js</span>
                <span className="card-detail-badge">Java Script</span>
              </div>
              <div className="card-body text-center">
                    <div className="ad-title ">
                        <div className="text-uppercase ">
                           <h6> E-com(Shopping website) </h6>
                        </div>
                        <a className="ad-btn " href="View" >View</a>
                    </div>
              </div>
            </div>
          </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
