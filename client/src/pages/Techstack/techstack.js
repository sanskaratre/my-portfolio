import React from 'react';
import "./techstack.css";
import { TechstackList } from '../../Utils/TechStack_list/techstackList';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

const Techstack = () => {
  return (
    <>
        <div className="container techstack" id='techStack'>
            <RubberBand>
            <h2 className='col-12 mt-4 mb-1 text-center text-uppercase'>Technology Stack</h2>
            <hr />
            <p className='pb-5 text-center'>
            {/* 👉🏻The MERN stack is a collection of JavaScript-based technologies that are used together to develop web applications. 
             The stack consists of MongoDB, Express, React, and Node. js.
             MongoDB is a highly scalable document database that makes it easy to store and retrieve data in JSON documents. */}
            👉🏻 It includes technologies like React.js, JavaScript, HTML, CSS, Express.js, MongoDB, Node.js, TypeScript, Bootstrap, 
             , Next.js and Api's.
            </p>
            </RubberBand>
        <div className="row">
           {TechstackList.map((tech) => (
        <Fade left>
            <div key={tech._id} className="col-md-3">
               <div className="card m-2">
                <div className="card-content">
                    <div className="card-body">
                        <div className="media d-flex justify-content-center">
                            <div className="align-self-center">
                                <tech.icon  classNameName='tech-icon'/>
                            </div>
                            <div className="media-body">
                                <h5>{tech.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            </Fade>
           ))}
        </div>
        </div>
    </>
  )
}

export default Techstack