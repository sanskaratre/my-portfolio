import React from 'react'
import "./workExp.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiPreact,SiReact } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";

const WorkExp = () => {
  return (
    <>
     <div className="container work" id='workExp'>
      <div className="work-exp">
      <h2 className='col-12 mt-4 mb-1 text-center text-uppercase'>Work Experience</h2>
      <hr />
<VerticalTimeline>
<VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2024 - Present"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={< SiPreact/>}
          >
            <h3 className="vertical-timeline-element-title">Senior Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">I MONEY PAY PVT. LTD.</h4>
            <p>
            I am currently working as a Senior Frontend Developer at iMoney Pay, 
            Beyond development, I take on multiple responsibilities, including leading the team, conducting daily scrums, 
            and managing various aspects of the product. My role extends to brand management, security, 
            UI/UX design, and ensuring compliance with RBI regulations. I also contribute to the business by providing innovative ideas, 
            coordinating with different teams to drive business development, and planning project modules for optimal design and enhancement.
            My focus is on delivering the best possible solutions to elevate our projects and achieve our goals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - 2024"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={< TbBrandReact/>}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">I MONEY PAY PVT. LTD.</h4>
            <p>
            Working as a Frontend Developer at iMoney Pay, 
            a startup Fintech company. My primary role involves developing the frontend for web admin (CRM) portals for a payment application. Additionally, 
            I am working on another key project, the Gift Cards.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021 - 2022"
            iconStyle={{ background: "rgb(5, 161, 135)", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">M.P.E.B.(E.H.)</h4>
            <h6 className="vertical-timeline-element-subtitle">State Govt. organization(DESCO)</h6>
            <p>
              Works with Frontend development team.
              Using technology like React Js, HTML and Java-script.
            </p>
          </VerticalTimelineElement> 

        </VerticalTimeline>
      </div>
     </div>
    </>
  )
}

export default WorkExp