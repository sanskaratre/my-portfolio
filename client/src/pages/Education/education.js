import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { DiScrum } from "react-icons/di";


const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2015 - 2019"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">SIRT, Bhopal</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={<DiScrum />}
          >
            <h3 className="vertical-timeline-element-title">Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Simplilearn</h4>
          </VerticalTimelineElement>
         
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jan, 2025"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={<PiCertificateFill />}
          >
            <h3 className="vertical-timeline-element-title">Git and GitHub</h3>
            <h4 className="vertical-timeline-element-subtitle">UDEMY</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jan, 2025"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={<PiCertificateFill />}
          >
            <h3 className="vertical-timeline-element-title">Online-Dispute-Resolution(ODR)Mechanism</h3>
            <h4 className="vertical-timeline-element-subtitle">National Institute of Securities Markets (NISM)</h4>
          </VerticalTimelineElement>

        </VerticalTimeline>
        
      </div>
    </>
  );
};

export default Education;
