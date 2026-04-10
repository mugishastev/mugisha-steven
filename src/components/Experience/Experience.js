import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { MdWork, MdSchool } from "react-icons/md";

function Experience() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Experience</strong> & Education
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(33, 33, 33, 0.5)", color: "#fff", border: "1px solid #c770f0" }}
            contentArrowStyle={{ borderRight: "7px solid  #c770f0" }}
            date="2023 - Present"
            iconStyle={{ background: "#c770f0", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sohoza System</h4>
            <p>
              Lead backend development for multiple high-traffic applications.
              Architected scalable microservices using NestJS and PostgreSQL.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(33, 33, 33, 0.5)", color: "#fff", border: "1px solid #c770f0" }}
            contentArrowStyle={{ borderRight: "7px solid  #c770f0" }}
            date="2022 - 2023"
            iconStyle={{ background: "#c770f0", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Junior Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
            <p>
              Developed several web applications for local clients using React and Node.js.
              Integrated payment gateways and real-time messaging features.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgba(33, 33, 33, 0.5)", color: "#fff", border: "1px solid #c770f0" }}
            contentArrowStyle={{ borderRight: "7px solid  #c770f0" }}
            date="2020 - 2022"
            iconStyle={{ background: "#c770f0", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Software Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Integrated A2 Level</h4>
            <p>
              Focus on Algorithms, Data Structures, and Modern Web Technologies.
              Participated in national coding competitions and hackathons.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
